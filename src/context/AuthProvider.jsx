import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { AuthContext } from './auth-context'
import { auth, db } from '../services/firebase'
import * as authService from '../services/authService'

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(undefined) // undefined = ainda carregando

  // Escuta mudanças de autenticação em tempo real (login, logout, refresh)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Busca o nome no Firestore
        const snap = await getDoc(doc(db, 'usuarios', firebaseUser.uid))
        const nome = snap.exists() ? snap.data().nome : firebaseUser.displayName
        setUser({ id: firebaseUser.uid, nome, email: firebaseUser.email })
      } else {
        setUser(null)
      }
    })
    return unsubscribe
  }, [])

  const register = async (data) => {
    const newUser = await authService.register(data)
    setUser(newUser)
    return newUser
  }

  const login = async (data) => {
    const loggedUser = await authService.login(data)
    setUser(loggedUser)
    return loggedUser
  }

  const logout = async () => {
    await authService.logout()
    setUser(null)
  }

  // Enquanto o Firebase verifica se há sessão ativa, não renderiza nada
  // para evitar o "flash" de tela de login quando o usuário já está logado
  if (user === undefined) return null

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
