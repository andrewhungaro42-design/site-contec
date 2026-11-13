import { useEffect, useRef, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { AuthContext } from './auth-context'
import { auth } from '../services/firebase'
import * as authService from '../services/authService'

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(undefined)
  const registering = useRef(false)

  useEffect(() => {
    let active = true

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (registering.current) return

      if (!firebaseUser) {
        setUser(null)
        return
      }

      const profile = await authService.getProfile(firebaseUser)
      if (active && auth.currentUser === firebaseUser && !registering.current) {
        setUser(profile)
      }
    })

    return () => {
      active = false
      unsubscribe()
    }
  }, [])

  const register = async (data) => {
    registering.current = true
    try {
      const newUser = await authService.register(data)
      setUser(newUser)
      return newUser
    } finally {
      registering.current = false
    }
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

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {user !== undefined && children}
    </AuthContext.Provider>
  )
}
