import { useState } from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/GraphicPlaceholder.png'
import qrImg from '../assets/QRCodePlaceholder.png'
import pixLogo from '../assets/PixLogo.png'
import heartImg from '../assets/heartonhand.png'
import footballImg from '../assets/football.PNG'
import childrenImg from '../assets/children.png'
import copyImg from '../assets/CopyPaste.png'

const PIX_CNPJ = '50.412.437/0001-00'

const stats = [
  { num: '3+', label: 'Anos de Impacto' },
  { num: '100%', label: 'Amor e Dedicação' },
]

const missions = [
  {
    img: heartImg,
    title: 'Apoio Social',
    desc: 'Realizamos trabalhos sociais nas ruas, levando apoio, cuidado, esperança e atenção para pessoas que precisam ser vistas e acolhidas. Acreditamos que pequenos gestos podem mudar histórias.',
    color: '#3d8fd1',
    bg: '#eff6ff',
  },
  {
    img: footballImg,
    title: 'Escolinha de Futebol',
    desc: 'Desenvolvemos uma escolhinha de futebol onde crianças e adolescentes encontram muito mais do que esporte: encontram disciplina, amizade, oportunidades e incentivo para sonhar.',
    color: '#4db870',
    bg: '#f0fdf4',
  },
  {
    img: childrenImg,
    title: 'Impacto Comunitário',
    desc: 'Nosso comprometimento é plantar esperança, fortalecer famílias e mostrar que todo menino e toda menina merecem oportunidades para crescer com dignidade, amor e propósito.',
    color: '#f5a623',
    bg: '#fffbeb',
  },
]

export default function Home() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PIX_CNPJ)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch (e) {
      console.error('Falha ao copiar', e)
    }
  }

  return (
    <div>
      {/* ─── HERO ─── */}
      <section
        className="relative flex items-center overflow-hidden"
        style={{
          minHeight: 'calc(100vh - 64px)',
          background: 'linear-gradient(135deg, #3d8fd1 0%, #2e6fa3 60%, #1a1a2e 100%)',
        }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute rounded-full blur-3xl pointer-events-none"
          style={{
            width: 400, height: 400,
            top: -100, right: -100,
            background: 'rgba(255,255,255,0.05)',
          }}
        />
        <div
          className="absolute rounded-full blur-3xl pointer-events-none"
          style={{
            width: 300, height: 300,
            bottom: 60, left: -80,
            background: 'rgba(245,166,35,0.08)',
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 w-full grid lg:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div className="text-white">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-5"
              style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}
            >
              🌟 ONG Social — Juiz de Fora, MG
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4"
              style={{ fontFamily: "'Fredoka One', cursive", color: '#ffffff' }}
            >
              Sonho de um Menino
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl font-bold mb-3" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Construindo o futuro, peça por peça!
            </p>

            <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Transformamos vidas através do amor, do esporte e da solidariedade.
              Apoio social nas ruas e escolinha de futebol para crianças e adolescentes.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/contato"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base font-bold no-underline transition-all duration-200 text-center"
                style={{ background: '#f5a623', color: '#1a1a2e' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#d4891a')}
                onMouseLeave={e => (e.currentTarget.style.background = '#f5a623')}
              >
                💙 Faça Sua Doação
              </Link>
              <Link
                to="/sobre"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base font-bold no-underline transition-all duration-200 text-center"
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  color: '#ffffff',
                  border: '1.5px solid rgba(255,255,255,0.25)',
                  backdropFilter: 'blur(8px)',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
              >
                Saiba Mais →
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="flex justify-center lg:justify-end mt-4 lg:mt-0">
            <img
              src={heroImg}
              alt="Sonho de um Menino"
              className="w-full rounded-3xl shadow-2xl"
              style={{ maxWidth: 420 }}
            />
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 40 C360 70 1080 10 1440 40 L1440 60 L0 60 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-xs sm:max-w-sm mx-auto px-4 grid grid-cols-2 gap-6">
          {stats.map(({ num, label }) => (
            <div key={label} className="text-center py-4">
              <div
                className="text-4xl md:text-5xl font-bold"
                style={{ fontFamily: "'Fredoka One', cursive", color: '#3d8fd1' }}
              >
                {num}
              </div>
              <div className="mt-1 text-sm font-semibold" style={{ color: '#6b7280' }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── MISSION CARDS ─── */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: '#f0f4ff' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl"
              style={{ fontFamily: "'Fredoka One', cursive", color: '#1a1a2e' }}
            >
              O Que Fazemos
            </h2>
            <p className="mt-3 text-lg" style={{ color: '#6b7280' }}>
              Nossa missão em três pilares
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {missions.map(({ img, title, desc, color, bg }) => (
              <div
                key={title}
                className="rounded-2xl p-8 shadow-sm transition-shadow duration-200"
                style={{ backgroundColor: '#ffffff' }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.10)')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = '')}
              >
                <div
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
                  style={{ backgroundColor: bg }}
                >
                  <img src={img} alt={title} className="w-10 h-10 object-contain" />
                </div>
                <h3
                  className="text-2xl mb-3"
                  style={{ fontFamily: "'Fredoka One', cursive", color }}
                >
                  {title}
                </h3>
                <p className="leading-relaxed text-sm" style={{ color: '#4b5563' }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DONATION ─── */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl"
              style={{ fontFamily: "'Fredoka One', cursive", color: '#1a1a2e' }}
            >
              Faça Sua Doação
            </h2>
            <p className="mt-3 text-lg" style={{ color: '#6b7280' }}>
              Cada centavo transforma uma vida real 💙
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* QR Code */}
            <div className="flex flex-col items-center">
              <div
                className="rounded-3xl p-8 shadow-sm"
                style={{ backgroundColor: '#f0f4ff' }}
              >
                <img
                  src={qrImg}
                  alt="QR Code PIX"
                  className="w-52 h-52 object-contain"
                />
              </div>
              <p className="mt-4 text-sm" style={{ color: '#9ca3af' }}>
                Escaneie para doe via PIX
              </p>
            </div>

            {/* PIX details */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src={pixLogo} alt="PIX Logo" className="h-8 object-contain" />
                <span className="text-lg font-bold" style={{ color: '#1a1a2e' }}>
                  Chave PIX — CNPJ
                </span>
              </div>

              <button
                onClick={handleCopy}
                className="w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-200 text-left"
                style={{
                  backgroundColor: copied ? '#f0fdf4' : '#f0f4ff',
                  border: `1.5px solid ${copied ? '#4db870' : 'transparent'}`,
                  cursor: 'pointer',
                }}
              >
                <span
                  className="font-mono text-sm sm:text-lg font-bold min-w-0 truncate"
                  style={{ color: '#1a1a2e' }}
                >
                  {PIX_CNPJ}
                </span>
                <div className="flex items-center gap-2 text-sm font-bold" style={{ color: copied ? '#4db870' : '#3d8fd1' }}>
                  {copied ? (
                    '✓ Copiado!'
                  ) : (
                    <>
                      <img src={copyImg} alt="Copiar" className="w-5 h-5 object-contain" />
                      Copiar
                    </>
                  )}
                </div>
              </button>

              <p className="mt-3 text-sm text-center" style={{ color: '#9ca3af' }}>
                Clique para copiar a chave PIX
              </p>

              <div
                className="mt-6 p-4 rounded-2xl text-center text-sm font-semibold"
                style={{
                  backgroundColor: '#f0fdf4',
                  color: '#3a9458',
                  border: '1px solid rgba(77,184,112,0.2)',
                }}
              >
                💚 Cada doação faz a diferença na vida de uma criança!
              </div>

              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="https://wa.me/5532988051075"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl no-underline text-sm font-semibold transition-colors"
                  style={{ backgroundColor: '#f0fdf4', color: '#3a9458' }}
                >
                  📱 Dúvidas? Fale no WhatsApp: (32) 98805-1075
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section
        className="py-14 sm:py-20"
        style={{ background: 'linear-gradient(135deg, #3d8fd1 0%, #2e6fa3 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            Junte-se a Esse Sonho!
          </h2>
          <p className="text-lg mb-10" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Conheça nossa história e descubra como você pode fazer parte dessa transformação.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              to="/sobre"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold no-underline transition-all duration-200 text-center"
              style={{ backgroundColor: '#ffffff', color: '#3d8fd1' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f0f4ff')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#ffffff')}
            >
              Conheça Nossa História
            </Link>
            <Link
              to="/contato"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold no-underline transition-all duration-200 text-center"
              style={{ backgroundColor: '#f5a623', color: '#1a1a2e' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#d4891a')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#f5a623')}
            >
              Entre em Contato
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
