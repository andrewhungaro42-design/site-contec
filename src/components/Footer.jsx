import { Link } from 'react-router-dom'
import logoImg from '../assets/LogoOriginal.png'
import { navLinks } from '../navigation'
import {
  INSTAGRAM_LINK,
  PIX_CNPJ,
  TELEFONE_DISPLAY,
  WHATSAPP_LINK,
} from '../linksContato'

export default function Footer() {
  return (
    <footer className="bg-ong-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 no-underline mb-4">
              <img src={logoImg} alt="Logo" className="w-10 h-10 rounded-xl object-cover" />
              <span className="font-display text-base font-bold text-white">
                Sonho de um Menino
              </span>
            </Link>
            <p className="text-subtle text-sm leading-relaxed">
              Transformando vidas através do amor, do esporte e da solidariedade
              em Juiz de Fora, MG.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-accent mb-4 sm:mb-5 text-sm font-bold uppercase tracking-widest">
              Páginas
            </h4>
            <ul className="flex flex-col gap-2 sm:gap-3">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="footer-link text-sm no-underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-accent mb-4 sm:mb-5 text-sm font-bold uppercase tracking-widest">
              Contato
            </h4>
            <ul className="text-subtle flex flex-col gap-2 sm:gap-3 text-sm">
              <li className="flex items-center gap-2">
                <span>📱</span>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link footer-link-accent no-underline"
                >
                  {TELEFONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📸</span>
                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link no-underline"
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
                <span className="font-mono text-xs break-all">PIX: {PIX_CNPJ}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-xs text-center text-gray-500 mt-8 sm:mt-10 pt-6 sm:pt-8 flex flex-col items-center gap-2 sm:flex-row sm:justify-between sm:gap-3 border-t border-white/10">
          <span>© {new Date().getFullYear()} Sonho de um Menino — Todos os direitos reservados</span>
          <span>Juiz de Fora, MG — CNPJ: {PIX_CNPJ}</span>
        </div>
      </div>
    </footer>
  )
}
