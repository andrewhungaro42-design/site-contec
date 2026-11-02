// Estrutura visual compartilhada entre as telas de Login e Registro
export default function AuthLayout({ title, subtitle, gradient, children }) {
  return (
    <div>
      {/* ─── HERO ─── */}
      <section
        className="relative py-12 sm:py-16 px-4 text-white overflow-hidden"
        style={{ background: gradient }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute w-72 h-72 rounded-full"
            style={{ top: -60, right: -60, background: 'rgba(255,255,255,0.06)' }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 pb-4">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl mb-3"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            {title}
          </h1>
          <p className="text-base sm:text-lg" style={{ color: 'rgba(255,255,255,0.85)' }}>
            {subtitle}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 50" fill="none" className="w-full">
            <path d="M0 30 C360 55 1080 5 1440 30 L1440 50 L0 50 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ─── CARD ─── */}
      <section className="px-4 pt-4 pb-16 sm:pb-24">
        <div
          className="max-w-md mx-auto rounded-3xl p-6 sm:p-8"
          style={{ backgroundColor: '#f0f4ff' }}
        >
          {children}
        </div>
      </section>
    </div>
  )
}
