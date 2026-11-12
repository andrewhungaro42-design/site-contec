// ─────────────────────────────────────────────────────────────
// Serviço de autenticação — Firebase Auth + Firestore
//
// Substitui o modo demonstração (localStorage) pela integração
// real com o banco de dados Firebase.
// ─────────────────────────────────────────────────────────────
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { auth, db } from './firebase'

// Remove campos sensíveis antes de entregar o usuário para a interface
function toPublicUser(firebaseUser, nome) {
  return {
    id: firebaseUser.uid,
    nome: nome || firebaseUser.displayName || '',
    email: firebaseUser.email,
  }
}

export function getCurrentUser() {
  const firebaseUser = auth.currentUser
  if (!firebaseUser) return null
  return toPublicUser(firebaseUser)
}

export async function register({ nome, email, senha }) {
  // 1. Cria o usuário no Firebase Authentication
  const credential = await createUserWithEmailAndPassword(auth, email.trim().toLowerCase(), senha)
  const firebaseUser = credential.user

  // 2. Salva o nome no perfil do Firebase Auth
  await updateProfile(firebaseUser, { displayName: nome.trim() })

  // 3. Salva os dados extras no Firestore (banco de dados)
  await setDoc(doc(db, 'usuarios', firebaseUser.uid), {
    nome: nome.trim(),
    email: email.trim().toLowerCase(),
    criadoEm: new Date().toISOString(),
  })

  return toPublicUser(firebaseUser, nome.trim())
}

export async function login({ email, senha }) {
  const credential = await signInWithEmailAndPassword(auth, email.trim().toLowerCase(), senha)
  const firebaseUser = credential.user

  // Busca o nome salvo no Firestore
  const snap = await getDoc(doc(db, 'usuarios', firebaseUser.uid))
  const nome = snap.exists() ? snap.data().nome : firebaseUser.displayName

  return toPublicUser(firebaseUser, nome)
}

export function logout() {
  return signOut(auth)
}
