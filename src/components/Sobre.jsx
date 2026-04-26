import { useReveal } from '../hooks/useReveal.js'
import { SOBRE } from '../constants/index.js'

export default function Sobre() {
  const refTexto  = useReveal()
  const refImagem = useReveal()

  return (
    <section
      id="escritorio"
      aria-labelledby="sobre-titulo"
      style={{ background: 'var(--bege)', padding: 'var(--section-pad)' }}
    >
      <div
        style={{
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'center',
        }}
        className="grid-two-col"
      >
        {/* Texto */}
        <div ref={refTexto} className="reveal">
          <span className="section-label">{SOBRE.label}</span>
          <h2
            id="sobre-titulo"
            className="section-title"
            style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.7rem)', marginBottom: '1.5rem' }}
          >
            {SOBRE.titulo}
          </h2>
          <div className="divider-gold left" role="presentation" />

          <p style={{ fontSize: '0.97rem', lineHeight: 1.88, color: 'var(--texto-medio)', marginBottom: '1.25rem' }}>
            {SOBRE.paragrafo1}
          </p>
          <p style={{ fontSize: '0.97rem', lineHeight: 1.88, color: 'var(--texto-medio)', marginBottom: '2.5rem' }}>
            {SOBRE.paragrafo2}
          </p>

          {/* Pilares — com classe para layout mobile */}
          <div
            className="pilares-grid"
            role="list"
            style={{ display: 'flex', gap: '0', flexWrap: 'wrap' }}
          >
            {SOBRE.pilares.map((pilar, i) => (
              <div
                key={pilar.titulo}
                role="listitem"
                className="pilar-item"
                style={{
                  flex: '1',
                  minWidth: 120,
                  paddingRight: i < SOBRE.pilares.length - 1 ? '2rem' : 0,
                  borderRight: i < SOBRE.pilares.length - 1 ? '1px solid var(--bege-escuro)' : 'none',
                  marginRight: i < SOBRE.pilares.length - 1 ? '2rem' : 0,
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.3rem',
                  fontWeight: 500,
                  color: 'var(--verde)',
                  marginBottom: '0.3rem',
                }}>
                  {pilar.titulo}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--texto-claro)', lineHeight: 1.5 }}>
                  {pilar.descricao}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Painel visual */}
        <div ref={refImagem} className="reveal" style={{ position: 'relative' }}>
          {/* Moldura principal */}
          <div style={{
            background: 'linear-gradient(160deg, var(--verde) 0%, #0e2619 100%)',
            aspectRatio: '4/5',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {/*
              Substitua por:
              <img src="/images/escritorio.jpg"
                   alt="Interior do escritório Nascente Advocacia"
                   style={{ width:'100%', height:'100%', objectFit:'cover' }} />
            */}
            {/* Placeholder elegante */}
            <img
  src="/logocompleta.png"
  alt="Logo Nascente"
  style={{ width: '80px', opacity: 0.8 }}
/>

            {/* Citação sobreposta */}
            <blockquote style={{
              position: 'absolute',
              bottom: '2.25rem', left: '2rem', right: '2rem',
            }}>
              <div style={{
                width: 28, height: 1,
                background: 'var(--dourado)',
                marginBottom: '1rem',
                opacity: 0.7,
              }} />
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
                color: 'rgba(250,250,248,0.88)',
                fontStyle: 'italic',
                fontWeight: 300,
                lineHeight: 1.45,
              }}>
                "Entender seus direitos é o primeiro passo para exercê-los."
              </p>
            </blockquote>

            {/* Textura sutil */}
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              backgroundImage: 'radial-gradient(ellipse at 80% 20%, rgba(184,150,12,0.06) 0%, transparent 55%)',
            }} />
          </div>

          {/* Ornamentos */}
          <div className="ornament" aria-hidden="true" style={{
            position: 'absolute', top: -18, right: -18,
            width: 72, height: 72,
            border: '1px solid var(--dourado)',
            opacity: 0.2,
          }} />
          <div className="ornament" aria-hidden="true" style={{
            position: 'absolute', bottom: -14, left: -14,
            width: 48, height: 48,
            border: '1px solid var(--verde-medio)',
            opacity: 0.22,
          }} />
        </div>
      </div>
    </section>
  )
}
