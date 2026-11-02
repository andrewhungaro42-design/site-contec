import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import AuthField from '../components/AuthField'
import { useAuth } from '../context/auth-context'

export default function Login() {
  const { user, login } = useAuth()
  const [form, setForm] = useState({ email: '', senha: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // Quem já está logado não precisa ver esta tela
  if (user) return <Navigate to="/" replace />

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!form.email.trim() || !form.senha) {
      setError('Preencha e-mail e senha.')
      return
    }

    setLoading(true)
    try {
      await login(form)
      // ao logar, `user` é preenchido e o <Navigate> acima redireciona para o início
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  return (
    <AuthLayout
      title="Entrar"
      subtitle="Acesse sua conta na ONG Sonho de um Menino."
      gradient="linear-gradient(135deg, #3d8fd1 0%, #2e6fa3 60%, #245a87 100%)"
    >
      <h2
        className="text-2xl sm:text-3xl mb-6"
        style={{ fontFamily: "'Fredoka One', cursive", color: '#1a1a2e' }}
      >
        Bem-vindo de volta
      </h2>

      {error && (
        <div
          className="rounded-2xl p-4 mb-5 text-center font-bold text-sm"
          style={{ backgroundColor: '#fef2f2', color: '#dc2626', border: '1.5px solid rgba(239,68,68,0.3)' }}
          role="alert"
        >
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 sm:gap-5">
        <AuthField
          label="Email"
          type="email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          placeholder="seu@email.com"
          autoComplete="email"
        />

        <AuthField
          label="Senha"
          type="password"
          value={form.senha}
          onChange={e => setForm({ ...form, senha: e.target.value })}
          placeholder="Sua senha"
          autoComplete="current-password"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 sm:py-4 rounded-xl text-white font-bold text-base transition-all duration-200 disabled:opacity-70"
          style={{ backgroundColor: '#3d8fd1' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#2e6fa3')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#3d8fd1')}
        >
          {loading ? 'Entrando...' : 'Entrar 💙'}
        </button>

        <p className="text-center text-sm" style={{ color: '#4b5563' }}>
          Ainda não tem conta?{' '}
          <Link to="/registro" className="font-bold no-underline" style={{ color: '#3d8fd1' }}>
            Registre-se
          </Link>
        </p>

        <p className="text-center text-xs" style={{ color: '#9ca3af' }}>
          <Link to="/" className="no-underline" style={{ color: '#9ca3af' }}>
            ← Continuar sem entrar
          </Link>
        </p>

        <p className="text-center text-xs" style={{ color: '#9ca3af' }}>
          * Ambiente de demonstração: as contas ficam salvas apenas neste navegador.
        </p>
      </form>
    </AuthLayout>
  )
}
