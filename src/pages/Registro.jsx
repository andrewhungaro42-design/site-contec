import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import AuthField from '../components/AuthField'
import { useAuth } from '../context/auth-context'

function validate(form) {
  const errors = {}
  if (form.nome.trim().length < 2) errors.nome = 'Informe seu nome.'
  if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) errors.email = 'Informe um e-mail válido.'
  if (form.senha.length < 8) errors.senha = 'A senha deve ter pelo menos 8 caracteres.'
  if (form.confirmar !== form.senha) errors.confirmar = 'As senhas não coincidem.'
  return errors
}

export default function Registro() {
  const { user, register } = useAuth()
  const [form, setForm] = useState({ nome: '', email: '', senha: '', confirmar: '' })
  const [errors, setErrors] = useState({})
  const [formError, setFormError] = useState('')
  const [loading, setLoading] = useState(false)

  // Quem já está logado não precisa ver esta tela
  if (user) return <Navigate to="/" replace />

  const setField = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError('')

    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    setLoading(true)
    try {
      await register({ nome: form.nome, email: form.email, senha: form.senha })
      // ao registrar, o usuário já fica logado e o <Navigate> acima redireciona
    } catch (err) {
      setFormError(err.message)
      setLoading(false)
    }
  }

  return (
    <AuthLayout
      title="Registre-se"
      subtitle="Crie sua conta e faça parte da nossa história."
      gradient="linear-gradient(135deg, #4db870 0%, #3a9458 60%, #2f7a48 100%)"
    >
      <h2
        className="text-2xl sm:text-3xl mb-6"
        style={{ fontFamily: "'Fredoka One', cursive", color: '#1a1a2e' }}
      >
        Criar conta
      </h2>

      {formError && (
        <div
          className="rounded-2xl p-4 mb-5 text-center font-bold text-sm"
          style={{ backgroundColor: '#fef2f2', color: '#dc2626', border: '1.5px solid rgba(239,68,68,0.3)' }}
          role="alert"
        >
          {formError}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 sm:gap-5">
        <AuthField
          label="Nome"
          value={form.nome}
          onChange={setField('nome')}
          placeholder="Seu nome completo"
          autoComplete="name"
          error={errors.nome}
        />

        <AuthField
          label="Email"
          type="email"
          value={form.email}
          onChange={setField('email')}
          placeholder="seu@email.com"
          autoComplete="email"
          error={errors.email}
        />

        <AuthField
          label="Senha"
          type="password"
          value={form.senha}
          onChange={setField('senha')}
          placeholder="Mínimo de 8 caracteres"
          autoComplete="new-password"
          error={errors.senha}
        />

        <AuthField
          label="Confirmar senha"
          type="password"
          value={form.confirmar}
          onChange={setField('confirmar')}
          placeholder="Repita a senha"
          autoComplete="new-password"
          error={errors.confirmar}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 sm:py-4 rounded-xl text-white font-bold text-base transition-all duration-200 disabled:opacity-70"
          style={{ backgroundColor: '#4db870' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#3a9458')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#4db870')}
        >
          {loading ? 'Criando conta...' : 'Criar conta 💚'}
        </button>

        <p className="text-center text-sm" style={{ color: '#4b5563' }}>
          Já tem uma conta?{' '}
          <Link to="/login" className="font-bold no-underline" style={{ color: '#3a9458' }}>
            Entrar
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
