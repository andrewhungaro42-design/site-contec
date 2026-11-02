// ─────────────────────────────────────────────────────────────
// Serviço de autenticação (MODO DEMONSTRAÇÃO)
//
// Por enquanto as contas ficam salvas no localStorage do navegador.
// Quando o banco de dados estiver pronto, basta trocar o corpo das
// funções register / login / logout / getCurrentUser por chamadas
// à sua API — o resto do site (telas, Header, contexto) não muda.
// ─────────────────────────────────────────────────────────────

const USERS_KEY = 'sdum_users'
const SESSION_KEY = 'sdum_session'

function readUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || []
  } catch {
    return []
  }
}

function writeUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

async function hashPassword(password, salt) {
  const data = new TextEncoder().encode(`${salt}:${password}`)
  const buffer = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(buffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}

// Remove campos sensíveis antes de entregar o usuário para a interface
function toPublicUser({ id, nome, email }) {
  return { id, nome, email }
}

export function getCurrentUser() {
  try {
    const id = localStorage.getItem(SESSION_KEY)
    if (!id) return null
    const user = readUsers().find(u => u.id === id)
    return user ? toPublicUser(user) : null
  } catch {
    return null
  }
}

export async function register({ nome, email, senha }) {
  const users = readUsers()
  const emailNorm = email.trim().toLowerCase()

  if (users.some(u => u.email === emailNorm)) {
    throw new Error('Já existe uma conta com este e-mail.')
  }

  const salt = crypto.randomUUID()
  const user = {
    id: crypto.randomUUID(),
    nome: nome.trim(),
    email: emailNorm,
    salt,
    senhaHash: await hashPassword(senha, salt),
    criadoEm: new Date().toISOString(),
  }

  writeUsers([...users, user])
  localStorage.setItem(SESSION_KEY, user.id)
  return toPublicUser(user)
}

export async function login({ email, senha }) {
  const emailNorm = email.trim().toLowerCase()
  const user = readUsers().find(u => u.email === emailNorm)

  // Mesma mensagem para e-mail inexistente e senha errada (boa prática)
  const invalid = new Error('E-mail ou senha incorretos.')
  if (!user) throw invalid

  const hash = await hashPassword(senha, user.salt)
  if (hash !== user.senhaHash) throw invalid

  localStorage.setItem(SESSION_KEY, user.id)
  return toPublicUser(user)
}

export function logout() {
  localStorage.removeItem(SESSION_KEY)
}
