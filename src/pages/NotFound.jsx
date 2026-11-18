import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section
      className="surface-muted relative flex min-h-[65vh] items-center justify-center overflow-hidden px-4 py-16 sm:py-20"
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
          className="font-display text-primary mb-3 text-6xl sm:text-7xl"
          aria-hidden="true"
        >
          404
        </div>
        <h1
          className="section-title mb-3 text-2xl sm:text-3xl"
        >
          Página não encontrada!
        </h1>
        <p className="text-muted mx-auto mb-8 max-w-md text-sm leading-relaxed sm:text-base">
          O endereço pode estar incorreto ou a página não existe mais.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="button-primary rounded-xl px-6 py-3 text-center text-sm font-bold no-underline"
          >
            Voltar ao início
          </Link>
          <Link
            to="/contato"
            className="button-outline-primary rounded-xl px-6 py-3 text-center text-sm font-bold no-underline"
          >
            Fale conosco
          </Link>
        </div>
      </div>
    </section>
  )
}