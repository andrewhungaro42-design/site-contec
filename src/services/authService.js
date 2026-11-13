import {
  createUserWithEmailAndPassword,
  deleteUser,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { auth, db } from './firebase'

function toPublicUser(firebaseUser, nome = firebaseUser.displayName) {
  return {
    id: firebaseUser.uid,
    nome: nome ?? '',
    email: firebaseUser.email,
  }
}

export async function getProfile(firebaseUser) {
  if (!firebaseUser) return null

  try {
    const snapshot = await getDoc(doc(db, 'usuarios', firebaseUser.uid))
    return toPublicUser(firebaseUser, snapshot.data()?.nome)
  } catch {
    return toPublicUser(firebaseUser)
  }
}

export async function register({ nome, email, senha }) {
  const displayName = nome.trim()
  const normalizedEmail = email.trim().toLowerCase()
  const { user } = await createUserWithEmailAndPassword(auth, normalizedEmail, senha)

  try {
    await updateProfile(user, { displayName })
    await setDoc(doc(db, 'usuarios', user.uid), {
      nome: displayName,
      email: normalizedEmail,
      criadoEm: new Date().toISOString(),
    })
  } catch {
    try {
      await deleteUser(user)
    } catch {
      await signOut(auth)
      throw new Error('Sua conta foi criada, mas não foi possível salvar seu perfil. Tente entrar com o e-mail cadastrado.')
    }
    throw new Error('Não foi possível salvar seu perfil. Tente criar a conta novamente.')
  }

  return toPublicUser(user, displayName)
}

export async function login({ email, senha }) {
  const { user } = await signInWithEmailAndPassword(auth, email.trim().toLowerCase(), senha)
  return getProfile(user)
}

export function logout() {
  return signOut(auth)
}
