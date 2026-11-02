import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/LogoOriginal.png'
import { useAuth } from '../context/auth-context'

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre Nós' },
  { to: '/projetos', label: 'Projetos Futuros' },
  { to: '/contato', label: 'Contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const userMenuRef = useRef(null)
  const location = useLocation()
  const { user, logout } = useAuth()

  const firstName = user?.nome?.trim().split(' ')[0] ?? ''
  const initial = firstName.charAt(0).toUpperCase()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const timer = window.setTimeout(() => setMenuOpen(false), 0)
    return () => window.clearTimeout(timer)
  }, [location.pathname, menuOpen])

  // Fecha o menu do usuário ao clicar fora dele
  useEffect(() => {
    if (!userMenuOpen) return

    const onClickOutside = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [userMenuOpen])

  const isActive = (path) => location.pathname === path

  const handleLogout = () => {
    setUserMenuOpen(false)
    setMenuOpen(false)
    logout()
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: '#ffffff',
        boxShadow: scrolled || menuOpen ? '0 2px 20px rgba(0,0,0,0.08)' : '0 1px 0 rgba(0,0,0,0.05)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 no-underline">
          <img
            src={logoImg}
            alt="Logo Sonho de um Menino"
            className="w-10 h-10 rounded-xl object-cover"
          />
          <span
            className="hidden sm:block text-base font-bold"
            style={{ fontFamily: "'Fredoka One', cursive", color: '#1a1a2e' }}
          >
            Sonho de um Menino
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="px-3 xl:px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 no-underline"
              style={{
                color: isActive(to) ? '#3d8fd1' : '#1a1a2e',
                backgroundColor: isActive(to) ? '#f0f4ff' : 'transparent',
              }}
              onMouseEnter={e => {
                if (!isActive(to)) {
                  e.currentTarget.style.backgroundColor = '#f0f4ff'
                  e.currentTarget.style.color = '#3d8fd1'
                }
              }}
              onMouseLeave={e => {
                if (!isActive(to)) {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = '#1a1a2e'
                }
              }}
            >
              {label}
            </Link>
          ))}

          {/* Login / Registro (ou menu do usuário) */}
          <div
            className="ml-2 pl-3 flex items-center gap-2 border-l"
            style={{ borderColor: '#e5e7eb' }}
          >
            {user ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setUserMenuOpen(o => !o)}
                  className="flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:bg-[#f0f4ff]"
                  style={{ color: '#1a1a2e' }}
                  aria-haspopup="menu"
                  aria-expanded={userMenuOpen}
                >
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm text-white"
                    style={{ backgroundColor: '#3d8fd1', fontFamily: "'Fredoka One', cursive" }}
                  >
                    {initial}
                  </span>
                  <span className="max-w-[110px] truncate">Olá, {firstName}</span>
                </button>

                {userMenuOpen && (
                  <div
                    role="menu"
                    className="absolute right-0 mt-2 w-56 rounded-2xl p-2 bg-white"
                    style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.12)', border: '1.5px solid #f0f4ff' }}
                  >
                    <div className="px-3 py-2 mb-1 border-b" style={{ borderColor: '#f0f4ff' }}>
                      <p className="text-sm font-bold truncate" style={{ color: '#1a1a2e' }}>
                        {user.nome}
                      </p>
                      <p className="text-xs truncate" style={{ color: '#9ca3af' }}>
                        {user.email}
                      </p>
                    </div>
                    <button
                      role="menuitem"
                      onClick={handleLogout}
                      className="w-full text-left px-3 py-2 rounded-xl text-sm font-semibold transition-colors hover:bg-[#f0f4ff]"
                      style={{ color: '#dc2626' }}
                    >
                      Sair
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-3 xl:px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 no-underline hover:bg-[#f0f4ff] hover:!text-[#3d8fd1]"
                  style={{ color: isActive('/login') ? '#3d8fd1' : '#1a1a2e' }}
                >
                  Entrar
                </Link>
                <Link
                  to="/registro"
                  className="px-3 xl:px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 no-underline hover:!bg-[#3d8fd1] hover:!text-white"
                  style={{ color: '#3d8fd1', border: '1.5px solid #3d8fd1' }}
                >
                  Registrar
                </Link>
              </>
            )}
          </div>

          <Link
            to="/contato"
            className="ml-2 px-5 py-2 rounded-xl text-sm font-bold text-white transition-all duration-200 no-underline"
            style={{ backgroundColor: '#3d8fd1' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#2e6fa3')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#3d8fd1')}
          >
            Doe Agora
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 rounded-xl transition-colors"
          style={{ color: '#1a1a2e' }}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden px-4 pb-4 border-t" style={{ borderColor: '#f0f4ff' }}>
          <div className="flex flex-col gap-1 pt-3">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="px-4 py-3 rounded-xl text-sm font-semibold no-underline transition-colors"
                style={{
                  color: isActive(to) ? '#3d8fd1' : '#1a1a2e',
                  backgroundColor: isActive(to) ? '#f0f4ff' : 'transparent',
                }}
              >
                {label}
              </Link>
            ))}

            {/* Login / Registro (ou usuário logado) */}
            <div className="mt-2 pt-3 border-t flex flex-col gap-2" style={{ borderColor: '#f0f4ff' }}>
              {user ? (
                <>
                  <div className="flex items-center gap-3 px-4 py-2">
                    <span
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white flex-shrink-0"
                      style={{ backgroundColor: '#3d8fd1', fontFamily: "'Fredoka One', cursive" }}
                    >
                      {initial}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-bold truncate" style={{ color: '#1a1a2e' }}>
                        Olá, {firstName}
                      </p>
                      <p className="text-xs truncate" style={{ color: '#9ca3af' }}>
                        {user.email}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-3 rounded-xl text-sm font-bold text-center transition-colors"
                    style={{ color: '#dc2626', backgroundColor: '#fef2f2' }}
                  >
                    Sair
                  </button>
                </>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    to="/login"
                    className="px-4 py-3 rounded-xl text-sm font-bold text-center no-underline"
                    style={{ color: '#3d8fd1', backgroundColor: '#f0f4ff' }}
                  >
                    Entrar
                  </Link>
                  <Link
                    to="/registro"
                    className="px-4 py-3 rounded-xl text-sm font-bold text-center no-underline"
                    style={{ color: '#3d8fd1', border: '1.5px solid #3d8fd1' }}
                  >
                    Registrar
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contato"
              className="mt-1 px-4 py-3 rounded-xl text-sm font-bold text-white text-center no-underline"
              style={{ backgroundColor: '#3d8fd1' }}
            >
              Doe Agora 💙
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
