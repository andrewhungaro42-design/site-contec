import { useId, useState } from 'react'

// Campo de formulário no mesmo estilo dos inputs da página de Contato
export default function AuthField({ label, type = 'text', error, ...props }) {
  const id = useId()
  const [show, setShow] = useState(false)
  const isPassword = type === 'password'

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-bold mb-2" style={{ color: '#1a1a2e' }}>
        {label}
      </label>

      <div className="relative">
        <input
          id={id}
          type={isPassword && show ? 'text' : type}
          className={`w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 ${isPassword ? 'pr-20' : ''}`}
          style={{
            border: `1.5px solid ${error ? '#ef4444' : '#e5e7eb'}`,
            backgroundColor: '#ffffff',
            color: '#1a1a2e',
            outline: 'none',
          }}
          onFocus={e => (e.currentTarget.style.borderColor = error ? '#ef4444' : '#3d8fd1')}
          onBlur={e => (e.currentTarget.style.borderColor = error ? '#ef4444' : '#e5e7eb')}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShow(s => !s)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold px-2 py-1 rounded-lg"
            style={{ color: '#3d8fd1' }}
            aria-label={show ? 'Ocultar senha' : 'Mostrar senha'}
          >
            {show ? 'Ocultar' : 'Mostrar'}
          </button>
        )}
      </div>

      {error && (
        <p className="mt-1.5 text-xs font-semibold" style={{ color: '#dc2626' }}>
          {error}
        </p>
      )}
    </div>
  )
}
