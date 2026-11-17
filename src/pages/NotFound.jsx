import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section
      className="relative flex min-h-[65vh] items-center justify-center overflow-hidden px-4 py-16 sm:py-20"
      style={{ backgroundColor: '#f0f4ff' }}
    >
      <div
        className="absolute -right-16 -top-16 h-64 w-64 rounded-full pointer-events-none"
        style={{ background: 'rgba(61,143,209,0.08)' }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full pointer-events-none"
        style={{ background: 'rgba(245,166,35,0.1)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-xl rounded-3xl bg-white px-6 py-10 text-center shadow-sm sm:px-12 sm:py-14">
        <div
          className="mb-3 text-6xl sm:text-7xl"
          style={{ fontFamily: "'Fredoka One', cursive", color: '#3d8fd1' }}
          aria-hidden="true"
        >
          404
        </div>
        <h1
          className="mb-3 text-2xl sm:text-3xl"
          style={{ fontFamily: "'Fredoka One', cursive", color: '#1a1a2e' }}
        >
          Página não encontrada!
        </h1>
        <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed sm:text-base" style={{ color: '#6b7280' }}>
          O endereço pode estar incorreto ou a página não existe mais.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="rounded-xl px-6 py-3 text-center text-sm font-bold no-underline transition-colors"
            style={{ backgroundColor: '#3d8fd1', color: '#ffffff' }}
          >
            Voltar ao início
          </Link>
          <Link
            to="/contato"
            className="rounded-xl px-6 py-3 text-center text-sm font-bold no-underline transition-colors"
            style={{
              backgroundColor: '#ffffff',
              border: '1.5px solid #3d8fd1',
              color: '#3d8fd1',
            }}
          >
            Fale conosco
          </Link>
        </div>
      </div>
    </section>
  )
}