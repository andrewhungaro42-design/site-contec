import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import heroImg from '../assets/GraphicPlaceholder.png'
import qrImg from '../assets/QRCodePlaceholder.png'
import pixLogo from '../assets/PixLogo.png'
import heartImg from '../assets/heartonhand.png'
import footballImg from '../assets/football.PNG'
import childrenImg from '../assets/children.png'
import copyImg from '../assets/CopyPaste.png'
import { PIX_CNPJ, TELEFONE_DISPLAY, WHATSAPP_LINK } from '../linksContato'

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
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollToDonation) {
      document.getElementById('doacao')?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location.key, location.state])

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
                to="/"
                state={{ scrollToDonation: true }}
                className="button-accent rounded-2xl px-6 py-3 text-center text-base font-bold no-underline sm:px-8 sm:py-4"
              >
                💙 Faça Sua Doação
              </Link>
              <Link
                to="/sobre"
                className="button-glass rounded-2xl px-6 py-3 text-center text-base font-bold no-underline sm:px-8 sm:py-4"
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
                className="font-display text-primary text-4xl font-bold md:text-5xl"
              >
                {num}
              </div>
              <div className="text-muted mt-1 text-sm font-semibold">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── MISSION CARDS ─── */}
      <section className="surface-muted py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">
              O Que Fazemos
            </h2>
            <p className="text-muted mt-3 text-lg">
              Nossa missão em três pilares
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {missions.map(({ img, title, desc, color, bg }) => (
              <div
                key={title}
                className="card-interactive rounded-2xl bg-white p-8 shadow-sm"
              >
                <div
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
                  style={{ backgroundColor: bg }}
                >
                  <img src={img} alt={title} className="w-10 h-10 object-contain" />
                </div>
                <h3 className="mb-3 text-2xl" style={{ color }}>
                  {title}
                </h3>
                <p className="text-body text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DONATION ─── */}
      <section id="doacao" className="scroll-mt-16 bg-white py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">
              Faça Sua Doação
            </h2>
            <p className="text-muted mt-3 text-lg">
              Cada centavo transforma uma vida real 💙
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* QR Code */}
            <div className="flex flex-col items-center">
              <div
                className="surface-muted rounded-3xl p-8 shadow-sm"
              >
                <img
                  src={qrImg}
                  alt="QR Code PIX"
                  className="w-52 h-52 object-contain"
                />
              </div>
              <p className="text-subtle mt-4 text-sm">
                Escaneie para doe via PIX
              </p>
            </div>

            {/* PIX details */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src={pixLogo} alt="PIX Logo" className="h-8 object-contain" />
                <span className="section-title text-lg font-bold">
                  Chave PIX — CNPJ
                </span>
              </div>

              <button
                onClick={handleCopy}
                className={`pix-copy-control w-full flex items-center justify-between px-5 py-4 rounded-2xl text-left ${copied ? 'pix-copy-success' : 'pix-copy-home-default'}`}
              >
                <span className="font-mono min-w-0 truncate text-sm font-bold text-ong-dark sm:text-lg">
                  {PIX_CNPJ}
                </span>
                <div className={`flex items-center gap-2 text-sm font-bold ${copied ? 'text-secondary' : 'text-primary'}`}>
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

              <p className="text-subtle mt-3 text-center text-sm">
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
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl no-underline text-sm font-semibold transition-colors"
                  style={{ backgroundColor: '#f0fdf4', color: '#3a9458' }}
                >
                  📱 Dúvidas? Fale no WhatsApp: {TELEFONE_DISPLAY}
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
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl">
            Junte-se a Esse Sonho!
          </h2>
          <p className="text-lg mb-10" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Conheça nossa história e descubra como você pode fazer parte dessa transformação.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              to="/sobre"
              className="button-outline-primary px-6 py-3 text-center font-bold no-underline sm:px-8 sm:py-4 rounded-2xl"
            >
              Conheça Nossa História
            </Link>
            <Link
              to="/contato"
              className="button-accent px-6 py-3 text-center font-bold no-underline sm:px-8 sm:py-4 rounded-2xl"
            >
              Entre em Contato
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
