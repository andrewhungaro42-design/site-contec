import { useId, useState } from 'react'

// Campo de formulário no mesmo estilo dos inputs da página de Contato
export default function AuthField({ label, type = 'text', error, ...props }) {
  const id = useId()
  const [show, setShow] = useState(false)
  const isPassword = type === 'password'

  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
      </label>

      <div className="relative">
        <input
          id={id}
          type={isPassword && show ? 'text' : type}
          className={`field-control ${isPassword ? 'pr-20' : ''}`}
          aria-invalid={Boolean(error)}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShow(s => !s)}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs font-bold text-primary"
            aria-label={show ? 'Ocultar senha' : 'Mostrar senha'}
          >
            {show ? 'Ocultar' : 'Mostrar'}
          </button>
        )}
      </div>

      {error && (
        <p className="mt-1.5 text-xs font-semibold text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}
