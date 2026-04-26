import { useReveal } from '../hooks/useReveal.js'
import { ADVOGADA } from '../constants/index.js'

export default function Advogada() {
  const refTexto  = useReveal()
  const refFoto   = useReveal()

  return (
    <section
      id="advogada"
      aria-labelledby="advogada-titulo"
      style={{ background: 'var(--bege)', padding: 'var(--section-pad)' }}
    >
      <div
        style={{
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '5fr 7fr',
          gap: '5rem',
          alignItems: 'center',
        }}
        className="grid-two-col"
      >
        {/* Foto */}
        <div ref={refFoto} className="reveal" style={{ position: 'relative' }}>
          <div style={{
            background: 'linear-gradient(170deg, #1e4832 0%, #0d2018 100%)',
            aspectRatio: '3/4',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/*
              Substitua por:
              <img
                src="/images/advogada.jpg"
                alt="Dra. Victoria Gabriela Soares Nascente, advogada — OAB/MG 225.962"
                style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top center' }}
              />
            */}
            <img
  src="/advogada.png"
  alt="Dra. Victoria Nascente"
  style={{
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'top center'
  }}
/>

            {/* Badge de identificação */}
            <div style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              padding: '1.75rem 1.75rem',
              background: 'linear-gradient(to top, rgba(10,31,19,0.95) 0%, transparent 100%)',
            }}>
              <div style={{
                fontSize: '0.58rem',
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: 'var(--dourado)',
                marginBottom: '0.35rem',
                fontWeight: 500,
              }}>
                {ADVOGADA.oab_display}
              </div>
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.05rem',
                color: 'var(--branco)',
                fontWeight: 400,
                lineHeight: 1.3,
              }}>
                {ADVOGADA.nome_curto}
              </div>
            </div>
          </div>

          {/* Ornamentos */}
          <div className="ornament" aria-hidden="true" style={{
            position: 'absolute', top: 20, left: -16,
            width: 56, height: 56,
            border: '1px solid var(--dourado)',
            opacity: 0.2,
          }} />
          <div className="ornament" aria-hidden="true" style={{
            position: 'absolute', bottom: 20, right: -12,
            width: 36, height: 36,
            border: '1px solid var(--dourado)',
            opacity: 0.15,
          }} />
        </div>

        {/* Texto */}
        <div ref={refTexto} className="reveal">
          <span className="section-label">{ADVOGADA.label}</span>
          <h2
            id="advogada-titulo"
            className="section-title"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '1.5rem' }}
          >
            {ADVOGADA.titulo_secao}
          </h2>
          <div className="divider-gold left" role="presentation" />

          <p style={{ fontSize: '0.97rem', lineHeight: 1.88, color: 'var(--texto-medio)', marginBottom: '1.25rem' }}>
            {ADVOGADA.paragrafo1}
          </p>
          <p style={{ fontSize: '0.97rem', lineHeight: 1.88, color: 'var(--texto-medio)', marginBottom: '2.25rem' }}>
            {ADVOGADA.paragrafo2}
          </p>

          {/* Formação / credenciais */}
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {ADVOGADA.formacao.map(item => (
              <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                <span aria-hidden="true" style={{
                  width: 5, height: 5,
                  borderRadius: '50%',
                  background: 'var(--dourado)',
                  marginTop: '0.52rem',
                  flexShrink: 0,
                  display: 'block',
                }} />
                <span style={{ fontSize: '0.875rem', color: 'var(--texto-medio)', lineHeight: 1.65 }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA discreto */}
          <div style={{ marginTop: '2.5rem' }}>
            <a href="#contato" className="btn-primary" style={{ fontSize: '0.68rem' }}>
              Entrar em contato
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
