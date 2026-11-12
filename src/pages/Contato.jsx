import { useState } from 'react'
import pixLogo from '../assets/PixLogo.png'
import qrImg from '../assets/QRCodePlaceholder.png'
import copyImg from '../assets/CopyPaste.png'

const PIX_CNPJ = '50.412.437/0001-00'

export default function Contato() {
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })
  const [sent, setSent] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PIX_CNPJ)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch (e) {
      console.error(e)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ nome: '', email: '', mensagem: '' })
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <div>
      {/* ─── HERO ─── */}
      <section
        className="relative py-16 sm:py-20 md:py-24 px-4 text-white overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #f5a623 0%, #d4891a 60%, #b5721a 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-72 h-72 rounded-full" style={{ top: -60, right: -60, background: 'rgba(255,255,255,0.06)' }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            Contato
          </h1>
          <p className="text-base sm:text-xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Entre em contato com a ONG <strong>Sonho de um Menino</strong>.
            Estamos sempre abertos para conversar e receber apoio.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 50" fill="none" className="w-full">
            <path d="M0 30 C360 55 1080 5 1440 30 L1440 50 L0 50 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─── */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-14">

          {/* ── Left: Info + Doação ── */}
          <div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8"
              style={{ fontFamily: "'Fredoka One', cursive", color: '#1a1a2e' }}
            >
              Como nos encontrar
            </h2>

            <div className="flex flex-col gap-3 sm:gap-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/5532988051075"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl no-underline transition-all duration-200"
                style={{ border: '1.5px solid #e5e7eb' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#4db870'
                  e.currentTarget.style.backgroundColor = '#f0fdf4'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#e5e7eb'
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}
              >
                <div
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0"
                  style={{ backgroundColor: '#f0fdf4' }}
                >
                  📱
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: '#1a1a2e' }}>WhatsApp</p>
                  <p className="font-bold text-base sm:text-lg" style={{ color: '#4db870' }}>(32) 98805-1075</p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/sonhodeummeninoong"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl no-underline transition-all duration-200"
                style={{ border: '1.5px solid #e5e7eb' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#ec4899'
                  e.currentTarget.style.backgroundColor = '#fdf2f8'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#e5e7eb'
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}
              >
                <div
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0"
                  style={{ backgroundColor: '#fdf2f8' }}
                >
                  📸
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: '#1a1a2e' }}>Instagram</p>
                  <p className="font-bold text-sm sm:text-lg" style={{ color: '#ec4899' }}>@sonhodeummeninoong</p>
                </div>
              </a>

              {/* Localização */}
              <div
                className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl"
                style={{ border: '1.5px solid #e5e7eb' }}
              >
                <div
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0"
                  style={{ backgroundColor: '#f0f4ff' }}
                >
                  📍
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: '#1a1a2e' }}>Localização</p>
                  <p className="text-sm sm:text-base" style={{ color: '#6b7280' }}>Juiz de Fora, MG</p>
                </div>
              </div>
            </div>

            {/* PIX / Doação */}
            <div className="mt-8 sm:mt-10">
              <h3
                className="text-2xl sm:text-3xl mb-4 sm:mb-5"
                style={{ fontFamily: "'Fredoka One', cursive", color: '#1a1a2e' }}
              >
                Doe via PIX
              </h3>

              <div
                className="rounded-2xl p-5 sm:p-6"
                style={{ backgroundColor: '#f0f4ff' }}
              >
                {/* QR Code */}
                <div className="flex justify-center mb-4 sm:mb-5">
                  <img
                    src={qrImg}
                    alt="QR Code PIX"
                    className="w-36 h-36 sm:w-40 sm:h-40 object-contain rounded-xl"
                    style={{ backgroundColor: '#ffffff', padding: 8 }}
                  />
                </div>

                {/* Copy button */}
                <button
                  onClick={handleCopy}
                  className="w-full flex items-center justify-between px-3 sm:px-4 py-3 rounded-xl transition-all duration-200 text-left"
                  style={{
                    backgroundColor: copied ? '#f0fdf4' : '#ffffff',
                    border: `1.5px solid ${copied ? '#4db870' : '#e5e7eb'}`,
                    cursor: 'pointer',
                  }}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <img src={pixLogo} alt="PIX" className="h-5 sm:h-6 object-contain flex-shrink-0" />
                    <span
                      className="font-mono font-bold text-xs sm:text-sm truncate"
                      style={{ color: '#1a1a2e' }}
                    >
                      {PIX_CNPJ}
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-1 text-xs font-bold flex-shrink-0 ml-2"
                    style={{ color: copied ? '#4db870' : '#3d8fd1' }}
                  >
                    {copied ? (
                      '✓ Copiado!'
                    ) : (
                      <>
                        <img src={copyImg} alt="Copiar" className="w-4 h-4 object-contain" />
                        Copiar
                      </>
                    )}
                  </div>
                </button>

                <p
                  className="text-center text-xs mt-3"
                  style={{ color: '#9ca3af' }}
                >
                  Clique para copiar a chave PIX (CNPJ)
                </p>
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div
            className="rounded-3xl p-6 sm:p-8"
            style={{ backgroundColor: '#f0f4ff' }}
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8"
              style={{ fontFamily: "'Fredoka One', cursive", color: '#1a1a2e' }}
            >
              Envie uma Mensagem
            </h2>

            {sent && (
              <div
                className="rounded-2xl p-4 mb-6 text-center font-bold text-sm"
                style={{ backgroundColor: '#f0fdf4', color: '#3a9458', border: '1.5px solid rgba(77,184,112,0.3)' }}
              >
                ✅ Mensagem enviada! Entraremos em contato em breve.
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
              <div>
                <label
                  className="block text-sm font-bold mb-2"
                  style={{ color: '#1a1a2e' }}
                >
                  Nome
                </label>
                <input
                  type="text"
                  value={form.nome}
                  onChange={e => setForm({ ...form, nome: e.target.value })}
                  placeholder="Seu nome completo"
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200"
                  style={{
                    border: '1.5px solid #e5e7eb',
                    backgroundColor: '#ffffff',
                    color: '#1a1a2e',
                    outline: 'none',
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = '#3d8fd1')}
                  onBlur={e => (e.currentTarget.style.borderColor = '#e5e7eb')}
                />
              </div>

              <div>
                <label
                  className="block text-sm font-bold mb-2"
                  style={{ color: '#1a1a2e' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="seu@email.com"
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200"
                  style={{
                    border: '1.5px solid #e5e7eb',
                    backgroundColor: '#ffffff',
                    color: '#1a1a2e',
                    outline: 'none',
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = '#3d8fd1')}
                  onBlur={e => (e.currentTarget.style.borderColor = '#e5e7eb')}
                />
              </div>

              <div>
                <label
                  className="block text-sm font-bold mb-2"
                  style={{ color: '#1a1a2e' }}
                >
                  Mensagem
                </label>
                <textarea
                  value={form.mensagem}
                  onChange={e => setForm({ ...form, mensagem: e.target.value })}
                  placeholder="Como podemos ajudar? Deixe sua mensagem..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 resize-none"
                  style={{
                    border: '1.5px solid #e5e7eb',
                    backgroundColor: '#ffffff',
                    color: '#1a1a2e',
                    outline: 'none',
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = '#3d8fd1')}
                  onBlur={e => (e.currentTarget.style.borderColor = '#e5e7eb')}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 sm:py-4 rounded-xl text-white font-bold text-base transition-all duration-200"
                style={{ backgroundColor: '#3d8fd1' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#2e6fa3')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#3d8fd1')}
              >
                Enviar Mensagem 💙
              </button>

              <p className="text-center text-xs" style={{ color: '#9ca3af' }}>
                * O formulário ainda não está conectado ao servidor.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ─── GRATIDÃO ─── */}
      <section
        className="py-12 sm:py-16 text-center"
        style={{ backgroundColor: '#f0f4ff' }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-4xl sm:text-5xl mb-4">🙏</div>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl mb-3"
            style={{ fontFamily: "'Fredoka One', cursive", color: '#1a1a2e' }}
          >
            Gratidão por fazer parte desse sonho!
          </h2>
          <p className="text-base sm:text-lg" style={{ color: '#6b7280' }}>
            Cada gesto de amor e solidariedade nos motiva a continuar transformando vidas.
          </p>
        </div>
      </section>
    </div>
  )
}
