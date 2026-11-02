import { useEffect, useState } from 'react'
import { AuthContext } from './auth-context'
import * as authService from '../services/authService'

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() => authService.getCurrentUser())

  // Mantém várias abas sincronizadas (login/logout em uma reflete nas outras)
  useEffect(() => {
    const onStorage = () => setUser(authService.getCurrentUser())
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
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

  const logout = () => {
    authService.logout()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
