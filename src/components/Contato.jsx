import { useState } from 'react'
import { useReveal } from '../hooks/useReveal.js'
import { CONTATO, SECAO_CONTATO, FORM_AREAS } from '../constants/index.js'

const INITIAL_FORM = { nome: '', email: '', area: '', mensagem: '' }
const INITIAL_ERRORS = { nome: '', email: '', area: '', mensagem: '' }

function validate(form) {
  const errors = { ...INITIAL_ERRORS }
  let valid = true

  if (!form.nome.trim()) {
    errors.nome = 'Por favor, informe seu nome.'
    valid = false
  }

  if (!form.email.trim()) {
    errors.email = 'Por favor, informe seu e-mail.'
    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Informe um e-mail válido.'
    valid = false
  }

  if (!form.area) {
    errors.area = 'Selecione a área de interesse.'
    valid = false
  }

  if (!form.mensagem.trim() || form.mensagem.trim().length < 20) {
    errors.mensagem = 'Descreva brevemente sua situação (mínimo 20 caracteres).'
    valid = false
  }

  return { errors, valid }
}

function InfoItem({ label, children }) {
  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <div
        style={{
          fontSize: '0.68rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--dourado)',
          marginBottom: '0.5rem',
        }}
      >
        {label}
      </div>
      {children}
    </div>
  )
}

function SuccessMessage({ onReset }) {
  return (
    <div
      role="alert"
      aria-live="polite"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 400,
        textAlign: 'center',
        padding: '3rem',
      }}
    >
      {/* Ícone check */}
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          border: '1.5px solid var(--dourado)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.5rem',
        }}
        aria-hidden="true"
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path
            d="M6 14 L11 20 L22 9"
            stroke="var(--dourado)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <h3
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.6rem',
          fontWeight: 400,
          color: 'var(--verde)',
          marginBottom: '1rem',
        }}
      >
        Mensagem enviada
      </h3>
      <p
        style={{
          fontSize: '0.9rem',
          color: 'var(--texto-medio)',
          lineHeight: 1.8,
          maxWidth: 360,
          marginBottom: '2rem',
        }}
      >
        Agradecemos o contato. Retornaremos em até 2 dias úteis para agendar sua consulta inicial.
      </p>
      <button className="btn-primary" onClick={onReset} style={{ fontSize: '0.75rem' }}>
        Enviar nova mensagem
      </button>
    </div>
  )
}

export default function Contato() {
  const ref = useReveal()
  const [form, setForm]       = useState(INITIAL_FORM)
  const [errors, setErrors]   = useState(INITIAL_ERRORS)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handle = field => e => setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const { errors: errs, valid } = validate(form)
    setErrors(errs)
    if (!valid) return

    // Simula envio (substitua pela integração real: Formspree, EmailJS, etc.)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  const reset = () => {
    setForm(INITIAL_FORM)
    setErrors(INITIAL_ERRORS)
    setSubmitted(false)
  }

  const { endereco } = CONTATO

  return (
    <section
      id="contato"
      aria-labelledby="contato-titulo"
      style={{ background: 'var(--bege)', padding: 'var(--section-pad)' }}
    >
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">{SECAO_CONTATO.label}</span>
          <h2
            id="contato-titulo"
            className="section-title"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}
          >
            {SECAO_CONTATO.titulo}
          </h2>
          <div className="divider-gold" role="presentation" />
          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--texto-claro)',
              maxWidth: 440,
              margin: '0 auto',
              lineHeight: 1.8,
            }}
          >
            {SECAO_CONTATO.subtitulo}
          </p>
        </div>

        {/* Grid contato + formulário */}
        <div
          ref={ref}
          className="reveal grid-two-col"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.6fr',
            gap: '4rem',
            alignItems: 'start',
          }}
        >
          {/* Info de contato */}
          <address style={{ fontStyle: 'normal' }}>
            <InfoItem label="WhatsApp">
              <a
                href={`https://wa.me/${CONTATO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.3rem',
                  color: 'var(--verde)',
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                {CONTATO.whatsapp_display}
              </a>
              <div style={{ fontSize: '0.78rem', color: 'var(--texto-claro)', marginTop: 4 }}>
                {CONTATO.whatsapp_horario}
              </div>
            </InfoItem>

            <InfoItem label="E-mail">
              <a
                href={`mailto:${CONTATO.email}`}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.05rem',
                  color: 'var(--verde)',
                  textDecoration: 'none',
                }}
              >
                {CONTATO.email}
              </a>
            </InfoItem>

            <InfoItem label="Endereço">
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.05rem',
                  color: 'var(--verde)',
                  lineHeight: 1.7,
                }}
              >
                {endereco.logradouro}<br />
                {endereco.bairro} — {endereco.cidade}, {endereco.estado}<br />
                CEP {endereco.cep}
              </div>
            </InfoItem>

            <div
              style={{
                paddingTop: '2rem',
                borderTop: '1px solid var(--bege-escuro)',
              }}
            >
              <p style={{ fontSize: '0.72rem', color: 'var(--texto-claro)', lineHeight: 1.8 }}>
                {SECAO_CONTATO.aviso_lgpd}
              </p>
            </div>
          </address>

          {/* Formulário */}
          <div
            style={{
              background: 'var(--branco)',
              padding: '3rem',
              border: '1px solid var(--bege-escuro)',
            }}
          >
            {submitted ? (
              <SuccessMessage onReset={reset} />
            ) : (
              <>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.3rem',
                    color: 'var(--verde)',
                    marginBottom: '2rem',
                    fontWeight: 400,
                  }}
                >
                  Envie uma mensagem
                </h3>

                <form
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Formulário de contato"
                >
                  {/* Nome + Email */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '1rem',
                      marginBottom: '1rem',
                    }}
                    className="grid-two-col"
                  >
                    <div>
                      <label htmlFor="nome" className="sr-only">Seu nome</label>
                      <input
                        id="nome"
                        type="text"
                        placeholder="Seu nome"
                        value={form.nome}
                        onChange={handle('nome')}
                        className={`form-input${errors.nome ? ' error' : ''}`}
                        autoComplete="name"
                        aria-required="true"
                        aria-describedby={errors.nome ? 'nome-error' : undefined}
                      />
                      {errors.nome && (
                        <span id="nome-error" className="field-error" role="alert">
                          {errors.nome}
                        </span>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="sr-only">Seu e-mail</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Seu e-mail"
                        value={form.email}
                        onChange={handle('email')}
                        className={`form-input${errors.email ? ' error' : ''}`}
                        autoComplete="email"
                        aria-required="true"
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <span id="email-error" className="field-error" role="alert">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Área */}
                  <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="area" className="sr-only">Área de interesse</label>
                    <select
                      id="area"
                      value={form.area}
                      onChange={handle('area')}
                      className={`form-input${errors.area ? ' error' : ''}`}
                      aria-required="true"
                      aria-describedby={errors.area ? 'area-error' : undefined}
                      style={{ cursor: 'pointer' }}
                    >
                      <option value="">Área de interesse</option>
                      {FORM_AREAS.map(a => (
                        <option key={a} value={a}>{a}</option>
                      ))}
                    </select>
                    {errors.area && (
                      <span id="area-error" className="field-error" role="alert">
                        {errors.area}
                      </span>
                    )}
                  </div>

                  {/* Mensagem */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label htmlFor="mensagem" className="sr-only">Descreva sua situação</label>
                    <textarea
                      id="mensagem"
                      rows={5}
                      placeholder="Descreva brevemente sua situação..."
                      value={form.mensagem}
                      onChange={handle('mensagem')}
                      className={`form-textarea${errors.mensagem ? ' error' : ''}`}
                      aria-required="true"
                      aria-describedby={errors.mensagem ? 'mensagem-error' : undefined}
                    />
                    {errors.mensagem && (
                      <span id="mensagem-error" className="field-error" role="alert">
                        {errors.mensagem}
                      </span>
                    )}
                  </div>

                  {/* Aviso legal */}
                  <p
                    style={{
                      fontSize: '0.72rem',
                      color: 'var(--texto-claro)',
                      marginBottom: '1.5rem',
                      lineHeight: 1.7,
                    }}
                  >
                    {SECAO_CONTATO.aviso_mandato}
                  </p>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%' }}
                    disabled={loading}
                    aria-busy={loading}
                  >
                    {loading ? 'Enviando…' : 'Enviar Mensagem'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
