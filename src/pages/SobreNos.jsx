import { Link } from 'react-router-dom'
import imagemCristiano from '../assets/imagemCristiano.jpeg'
import imagemTatyane from '../assets/imagemTatyane.jpeg'
import pixLogo from '../assets/PixLogo.png'

const valores = [
  {
    icon: '🤝',
    title: 'Solidariedade',
    desc: 'O motor de cada campanha que realizamos. Acreditamos que juntos somos mais fortes.',
    color: '#3d8fd1',
  },
  {
    icon: '💙',
    title: 'Inclusão & Amor',
    desc: 'Olhamos para o próximo sem distinção, acolhendo cada história com empatia e respeito.',
    color: '#4db870',
  },
  {
    icon: '🔍',
    title: 'Transparência',
    desc: 'Compromisso total com cada doador e parceiro que viabiliza nosso trabalho.',
    color: '#f5a623',
  },
]

const equipe = [
  { name: 'Cristiano Vieira', role: 'Presidente', img: imagemCristiano },
  { name: 'Tatyane Almeida', role: 'Vice-Presidente', img: imagemTatyane },
]

export default function SobreNos() {
  return (
    <div>
      {/* ─── HERO ─── */}
      <section
        className="relative py-16 sm:py-20 md:py-24 px-4 text-white overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #3d8fd1 0%, #2e6fa3 50%, #1a1a2e 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-64 h-64 rounded-full" style={{ top: -40, right: -40, background: 'rgba(255,255,255,0.04)' }} />
          <div className="absolute w-40 h-40 rounded-full" style={{ bottom: 20, left: -30, background: 'rgba(245,166,35,0.06)' }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            Quem Somos
          </h1>
          <p className="text-base sm:text-xl italic" style={{ color: 'rgba(255,255,255,0.75)' }}>
            "Acreditamos que todo sonho merece uma chance."
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 50" fill="none" className="w-full">
            <path d="M0 30 C360 55 1080 5 1440 30 L1440 50 L0 50 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ─── HISTÓRIA ─── */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            <div>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8"
                style={{ fontFamily: "'Fredoka One', cursive", color: '#1a1a2e' }}
              >
                Nossa{' '}
                <span style={{ color: '#3d8fd1' }}>História</span>
              </h2>

              <div className="flex flex-col gap-4 sm:gap-5 text-base leading-relaxed" style={{ color: '#4b5563' }}>
                <p>
                  A ONG <strong style={{ color: '#1a1a2e' }}>Sonho de um Menino</strong> nasceu no coração de
                  Juiz de Fora com o propósito claro de transformar realidades e estender a mão
                  a quem mais precisa.
                </p>
                <p>
                  Somos uma organização não governamental voltada para amparar famílias e indivíduos
                  em situações de vulnerabilidade social, garantindo que o básico e o afeto nunca falte.
                </p>
                <p>
                  O que começou como um desejo de fazer a diferença uniu pessoas dedicadas a transformar
                  a solidariedade em ações práticas. Hoje, movemos redes de apoio para que recursos
                  essenciais cheguem até as comunidades que mais precisam.
                </p>
              </div>
            </div>

            {/* Missão card */}
            <div
              className="rounded-3xl p-6 sm:p-10 text-center shadow-sm"
              style={{ backgroundColor: '#f0f4ff' }}
            >
              <div className="text-5xl sm:text-6xl mb-4 sm:mb-5">💙</div>
              <h3
                className="text-2xl sm:text-3xl mb-3 sm:mb-4"
                style={{ fontFamily: "'Fredoka One', cursive", color: '#3d8fd1' }}
              >
                Nossa Missão
              </h3>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#4b5563' }}>
                Promover a dignidade humana e o alívio da vulnerabilidade social por meio de
                campanhas ativas e contínuas de arrecadação e distribuição de alimentos, roupas,
                brinquedos e itens de primeira necessidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── O QUE NOS MOVE ─── */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: '#f0f4ff' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl"
              style={{ fontFamily: "'Fredoka One', cursive", color: '#1a1a2e' }}
            >
              O Que Nos Move
            </h2>
            <p className="mt-3 text-base sm:text-lg" style={{ color: '#6b7280' }}>
              Os pilares que guiam cada ação da nossa ONG
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
            {valores.map(({ icon, title, desc, color }) => (
              <div
                key={title}
                className="rounded-3xl p-6 sm:p-8 text-center shadow-sm transition-shadow duration-200"
                style={{ backgroundColor: '#ffffff' }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.10)')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = '')}
              >
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-5">{icon}</div>
                <h3
                  className="text-xl sm:text-2xl mb-2 sm:mb-3"
                  style={{ fontFamily: "'Fredoka One', cursive", color }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EQUIPE ─── */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl"
              style={{ fontFamily: "'Fredoka One', cursive", color: '#1a1a2e' }}
            >
              Quem Faz Acontecer
            </h2>
            <p className="mt-3 text-base sm:text-lg" style={{ color: '#6b7280' }}>
              As pessoas que dedicam seu tempo e amor a essa causa
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 max-w-md sm:max-w-2xl mx-auto">
            {equipe.map(({ name, role, img }) => (
              <div key={name} className="flex flex-col items-center text-center">
                <div
                  className="w-32 h-32 sm:w-44 sm:h-44 rounded-full overflow-hidden mb-4 sm:mb-5 shadow-lg"
                  style={{ border: '4px solid #e0eaff' }}
                >
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3
                  className="text-xl sm:text-3xl mb-1"
                  style={{ fontFamily: "'Fredoka One', cursive", color: '#1a1a2e' }}
                >
                  {name}
                </h3>
                <p className="font-bold text-sm sm:text-base" style={{ color: '#3d8fd1' }}>
                  {role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMO AJUDAR ─── */}
      <section
        className="py-14 sm:py-20"
        style={{ background: 'linear-gradient(135deg, #3d8fd1 0%, #2e6fa3 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            Como Ajudar
          </h2>
          <p className="text-base sm:text-lg mb-8 sm:mb-12" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Faça uma doação e ajude a manter nossos projetos vivos.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
            {/* PIX */}
            <div
              className="p-5 sm:p-8 rounded-3xl text-center"
              style={{
                background: 'rgba(255,255,255,0.12)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <img src={pixLogo} alt="PIX" className="h-6 sm:h-7 object-contain" />
                <span className="font-bold text-sm sm:text-base">Chave PIX (CNPJ)</span>
              </div>
              <p
                className="font-mono text-sm sm:text-base font-bold px-3 py-2 sm:px-4 sm:py-3 rounded-2xl break-all"
                style={{ background: 'rgba(255,255,255,0.1)' }}
              >
                50.412.437/0001-00
              </p>
            </div>

            {/* Contatos */}
            <div
              className="p-5 sm:p-8 rounded-3xl flex flex-col justify-center gap-4 sm:gap-5"
              style={{
                background: 'rgba(255,255,255,0.12)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-xl sm:text-2xl">📱</span>
                <div className="text-left">
                  <p className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    WhatsApp
                  </p>
                  <p className="font-bold text-base sm:text-lg">(32) 98805-1075</p>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-xl sm:text-2xl">📸</span>
                <div className="text-left">
                  <p className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    Instagram
                  </p>
                  <p className="font-bold text-sm sm:text-base">@sonhodeummeninoong</p>
                </div>
              </div>
            </div>
          </div>

          <Link
            to="/contato"
            className="inline-block mt-8 sm:mt-10 px-7 sm:px-10 py-3 sm:py-4 rounded-2xl font-bold no-underline transition-all duration-200"
            style={{ backgroundColor: '#f5a623', color: '#1a1a2e' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#d4891a')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#f5a623')}
          >
            Ver Mais Formas de Ajudar →
          </Link>
        </div>
      </section>
    </div>
  )
}
