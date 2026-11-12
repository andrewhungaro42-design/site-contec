import { Link } from 'react-router-dom'
import logoImg from '../assets/LogoOriginal.png'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a1a2e', color: '#ffffff' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 no-underline mb-4">
              <img src={logoImg} alt="Logo" className="w-10 h-10 rounded-xl object-cover" />
              <span
                className="text-base font-bold text-white"
                style={{ fontFamily: "'Fredoka One', cursive" }}
              >
                Sonho de um Menino
              </span>
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>
              Transformando vidas através do amor, do esporte e da solidariedade
              em Juiz de Fora, MG.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4
              className="font-bold mb-4 sm:mb-5 text-sm uppercase tracking-widest"
              style={{ color: '#f5a623' }}
            >
              Páginas
            </h4>
            <ul className="flex flex-col gap-2 sm:gap-3">
              {[
                { to: '/', label: 'Início' },
                { to: '/sobre', label: 'Sobre Nós' },
                { to: '/projetos', label: 'Projetos Futuros' },
                { to: '/contato', label: 'Contato' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm no-underline transition-colors"
                    style={{ color: '#9ca3af' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#9ca3af')}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4
              className="font-bold mb-4 sm:mb-5 text-sm uppercase tracking-widest"
              style={{ color: '#f5a623' }}
            >
              Contato
            </h4>
            <ul className="flex flex-col gap-2 sm:gap-3 text-sm" style={{ color: '#9ca3af' }}>
              <li className="flex items-center gap-2">
                <span>📱</span>
                <a
                  href="https://wa.me/5532988051075"
                  target="_blank"
                  rel="noreferrer"
                  className="no-underline transition-colors"
                  style={{ color: '#9ca3af' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#4db870')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#9ca3af')}
                >
                  (32) 98805-1075
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📸</span>
                <a
                  href="https://instagram.com/sonhodeummeninoong"
                  target="_blank"
                  rel="noreferrer"
                  className="no-underline transition-colors"
                  style={{ color: '#9ca3af' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#9ca3af')}
                >
                  @sonhodeummeninoong
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>Juiz de Fora, MG</span>
              </li>
              <li className="flex items-center gap-2">
                <span>💰</span>
                <span className="font-mono text-xs break-all">PIX: 50.412.437/0001-00</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-8 sm:mt-10 pt-6 sm:pt-8 flex flex-col items-center gap-2 sm:flex-row sm:justify-between sm:gap-3 text-xs text-center"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)', color: '#6b7280' }}
        >
          <span>© {new Date().getFullYear()} Sonho de um Menino — Todos os direitos reservados</span>
          <span>Juiz de Fora, MG — CNPJ: 50.412.437/0001-00</span>
        </div>
      </div>
    </footer>
  )
}
