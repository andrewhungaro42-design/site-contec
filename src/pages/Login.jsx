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
        className="section-title mb-6 text-2xl sm:text-3xl"
      >
        Bem-vindo de volta
      </h2>

      {error && (
        <div
          className="form-error rounded-2xl p-4 mb-5 text-center text-sm font-bold"
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
          className="button-primary w-full py-3 sm:py-4 rounded-xl font-bold text-base disabled:opacity-70"
        >
          {loading ? 'Entrando...' : 'Entrar 💙'}
        </button>

        <p className="text-body text-center text-sm">
          Ainda não tem conta?{' '}
          <Link to="/registro" className="font-bold text-primary no-underline hover:text-primary-dark">
            Registre-se
          </Link>
        </p>

        <p className="text-subtle text-center text-xs">
          <Link to="/" className="text-subtle no-underline hover:text-primary">
            ← Continuar sem entrar
          </Link>
        </p>

      </form>
    </AuthLayout>
  )
}
