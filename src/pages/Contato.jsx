import { useState } from 'react'
import pixLogo from '../assets/PixLogo.png'
import qrImg from '../assets/QRCodePlaceholder.png'
import copyImg from '../assets/CopyPaste.png'
import { INSTAGRAM_LINK, WHATSAPP_LINK } from '../linksContato'

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
          <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
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
            <h2 className="section-title mb-6 text-2xl sm:mb-8 sm:text-3xl md:text-4xl">
              Como nos encontrar
            </h2>

            <div className="flex flex-col gap-3 sm:gap-4">
              {/* WhatsApp */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="contact-info-card contact-info-card-whatsapp flex items-center gap-4 rounded-2xl p-4 no-underline sm:p-5"
              >
                <div
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0"
                  style={{ backgroundColor: '#f0fdf4' }}
                >
                  📱
                </div>
                <div>
                  <p className="text-ong-dark text-sm font-bold">WhatsApp</p>
                  <p className="text-secondary text-base font-bold sm:text-lg">(32) 98805-1075</p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noreferrer"
                className="contact-info-card contact-info-card-instagram flex items-center gap-4 rounded-2xl p-4 no-underline sm:p-5"
              >
                <div
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0"
                  style={{ backgroundColor: '#fdf2f8' }}
                >
                  📸
                </div>
                <div>
                  <p className="text-ong-dark text-sm font-bold">Instagram</p>
                  <p className="text-sm font-bold text-pink-500 sm:text-lg">@sonhodeummeninoong</p>
                </div>
              </a>

              {/* Localização */}
              <div
                className="contact-info-card flex items-center gap-4 rounded-2xl p-4 sm:p-5"
              >
                <div className="surface-muted flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl text-xl sm:h-12 sm:w-12 sm:text-2xl">
                  📍
                </div>
                <div>
                  <p className="text-ong-dark text-sm font-bold">Localização</p>
                  <p className="text-muted text-sm sm:text-base">Juiz de Fora, MG</p>
                </div>
              </div>
            </div>

            {/* PIX / Doação */}
            <div className="mt-8 sm:mt-10">
              <h3 className="section-title mb-4 text-2xl sm:mb-5 sm:text-3xl">
                Doe via PIX
              </h3>

              <div className="surface-muted rounded-2xl p-5 sm:p-6">
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
                  className={`pix-copy-control w-full flex items-center justify-between px-3 sm:px-4 py-3 rounded-xl text-left ${copied ? 'pix-copy-success' : 'pix-copy-contact-default'}`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <img src={pixLogo} alt="PIX" className="h-5 sm:h-6 object-contain flex-shrink-0" />
                    <span className="font-mono truncate text-xs font-bold text-ong-dark sm:text-sm">
                      {PIX_CNPJ}
                    </span>
                  </div>
                  <div className={`ml-2 flex flex-shrink-0 items-center gap-1 text-xs font-bold ${copied ? 'text-secondary' : 'text-primary'}`}>
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

                <p className="text-subtle mt-3 text-center text-xs">
                  Clique para copiar a chave PIX (CNPJ)
                </p>
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="surface-muted rounded-3xl p-6 sm:p-8">
            <h2
              className="section-title mb-6 text-2xl sm:mb-8 sm:text-3xl md:text-4xl"
            >
              Envie uma Mensagem
            </h2>

            {sent && (
              <div
                className="form-success rounded-2xl p-4 mb-6 text-center text-sm font-bold"
              >
                ✅ Mensagem enviada! Entraremos em contato em breve.
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
              <div>
                <label htmlFor="contact-name" className="field-label">
                  Nome
                </label>
                <input
                  type="text"
                  id="contact-name"
                  value={form.nome}
                  onChange={e => setForm({ ...form, nome: e.target.value })}
                  placeholder="Seu nome completo"
                  required
                  className="field-control"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="field-label">
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="seu@email.com"
                  required
                  className="field-control"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="field-label">
                  Mensagem
                </label>
                <textarea
                  id="contact-message"
                  value={form.mensagem}
                  onChange={e => setForm({ ...form, mensagem: e.target.value })}
                  placeholder="Como podemos ajudar? Deixe sua mensagem..."
                  rows={5}
                  required
                  className="field-control resize-none"
                />
              </div>

              <button
                type="submit"
                className="button-primary w-full py-3 sm:py-4 rounded-xl font-bold text-base"
              >
                Enviar Mensagem 💙
              </button>

              <p className="text-subtle text-center text-xs">
                * O formulário ainda não está conectado ao servidor.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ─── GRATIDÃO ─── */}
      <section className="surface-muted py-12 text-center sm:py-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-4xl sm:text-5xl mb-4">🙏</div>
          <h2
            className="section-title mb-3 text-2xl sm:text-3xl md:text-4xl"
          >
            Gratidão por fazer parte desse sonho!
          </h2>
          <p className="text-muted text-base sm:text-lg">
            Cada gesto de amor e solidariedade nos motiva a continuar transformando vidas.
          </p>
        </div>
      </section>
    </div>
  )
}
