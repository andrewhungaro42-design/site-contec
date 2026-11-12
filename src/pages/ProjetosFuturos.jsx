import { useState } from 'react'
import { Link } from 'react-router-dom'

const planos = [
  {
    icon: '🏫',
    title: 'Educação',
    desc: 'Programas de reforço escolar para crianças e adolescentes em vulnerabilidade social.',
    tag: 'Em planejamento',
    tagColor: '#3d8fd1',
    tagBg: '#eff6ff',
  },
  {
    icon: '🍽️',
    title: 'Alimentação',
    desc: 'Distribuição regular de cestas básicas para famílias em situação de risco na cidade.',
    tag: 'Em planejamento',
    tagColor: '#4db870',
    tagBg: '#f0fdf4',
  },
  {
    icon: '⚽',
    title: 'Expansão Esportiva',
    desc: 'Expansão da escolinha de futebol com novas turmas, categorias e parceiros.',
    tag: 'Em planejamento',
    tagColor: '#f5a623',
    tagBg: '#fffbeb',
  },
  {
    icon: '🎨',
    title: 'Arte & Cultura',
    desc: 'Oficinas de arte, música e cultura para estimular o desenvolvimento criativo das crianças.',
    tag: 'Ideia futura',
    tagColor: '#9b59b6',
    tagBg: '#faf5ff',
  },
  {
    icon: '🏥',
    title: 'Saúde Comunitária',
    desc: 'Ações de saúde preventiva, mutirões e campanhas de vacinação para a comunidade.',
    tag: 'Ideia futura',
    tagColor: '#e74c3c',
    tagBg: '#fff5f5',
  },
  {
    icon: '📚',
    title: 'Biblioteca Comunitária',
    desc: 'Criação de um espaço de leitura e aprendizado acessível para todos da comunidade.',
    tag: 'Ideia futura',
    tagColor: '#16a085',
    tagBg: '#f0fffe',
  },
]

export default function ProjetosFuturos() {
  const [showAdminInfo, setShowAdminInfo] = useState(false)

  return (
    <div>
      {/* ─── HERO ─── */}
      <section
        className="relative py-16 sm:py-20 md:py-24 px-4 text-white overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #4db870 0%, #3a9458 60%, #1a6e3c 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-72 h-72 rounded-full" style={{ top: -60, right: -60, background: 'rgba(255,255,255,0.04)' }} />
          <div className="absolute w-48 h-48 rounded-full" style={{ bottom: 20, left: -30, background: 'rgba(245,166,35,0.06)' }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            Projetos Futuros
          </h1>
          <p className="text-base sm:text-xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Conheça as iniciativas que estamos planejando para expandir nosso impacto.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 50" fill="none" className="w-full">
            <path d="M0 30 C360 55 1080 5 1440 30 L1440 50 L0 50 Z" fill="#f0f4ff" />
          </svg>
        </div>
      </section>

      {/* ─── GRID DE PROJETOS ─── */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: '#f0f4ff' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <div className="text-5xl sm:text-6xl mb-4">🌱</div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl mb-3"
              style={{ fontFamily: "'Fredoka One', cursive", color: '#1a1a2e' }}
            >
              Novidades em Breve!
            </h2>
            <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: '#6b7280' }}>
              Estamos trabalhando em novos projetos para ampliar nosso alcance e impactar
              ainda mais vidas em Juiz de Fora. Fique ligado!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {planos.map(({ icon, title, desc, tag, tagColor, tagBg }) => (
              <div
                key={title}
                className="rounded-2xl p-5 sm:p-6 shadow-sm transition-all duration-200"
                style={{ backgroundColor: '#ffffff', opacity: 0.75 }}
                onMouseEnter={e => {
                  e.currentTarget.style.opacity = '1'
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.10)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.opacity = '0.75'
                  e.currentTarget.style.boxShadow = ''
                }}
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{icon}</div>
                <h3
                  className="text-lg sm:text-xl mb-2"
                  style={{ fontFamily: "'Fredoka One', cursive", color: '#1a1a2e' }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#6b7280' }}>
                  {desc}
                </p>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold"
                  style={{ color: tagColor, backgroundColor: tagBg }}
                >
                  {tag}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center mt-10 sm:mt-12 text-sm" style={{ color: '#9ca3af' }}>
            Quer apoiar um projeto específico? Entre em{' '}
            <Link to="/contato" className="font-bold no-underline" style={{ color: '#3d8fd1' }}>
              contato conosco
            </Link>
            !
          </p>
        </div>
      </section>

      {/* ─── ADMIN BUTTON ─── */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-4">
          <p className="text-sm" style={{ color: '#9ca3af' }}>
            Área restrita para a equipe da ONG
          </p>

          <button
            onClick={() => setShowAdminInfo(!showAdminInfo)}
            className="flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
            style={{
              border: '2px dashed #d1d5db',
              color: '#9ca3af',
              backgroundColor: 'transparent',
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#3d8fd1'
              e.currentTarget.style.color = '#3d8fd1'
              e.currentTarget.style.backgroundColor = '#f0f4ff'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#d1d5db'
              e.currentTarget.style.color = '#9ca3af'
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
          >
            🔐 Área Administrativa
          </button>

          {showAdminInfo && (
            <div
              className="max-w-sm w-full rounded-2xl p-5 sm:p-6 text-left"
              style={{
                backgroundColor: '#f0f4ff',
                border: '1.5px solid rgba(61,143,209,0.2)',
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">🔒</span>
                <h3 className="font-bold" style={{ color: '#1a1a2e' }}>
                  Acesso Restrito
                </h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#4b5563' }}>
                Esta área é exclusiva para a equipe da ONG Sonho de um Menino.
                O sistema de login e gerenciamento de projetos está em desenvolvimento.
              </p>
              <p className="text-xs font-bold mt-4" style={{ color: '#3d8fd1' }}>
                🚀 Em breve disponível!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
