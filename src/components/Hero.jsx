import { HERO } from '../constants/index.js'

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Apresentação do escritório"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(158deg, #1e4832 0%, #112a1c 55%, #0a1f13 100%)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 var(--gutter)',
      }}
    >
      {/* Gradiente radial dourado — atmosfera */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          radial-gradient(ellipse 70% 60% at 75% 40%, rgba(184,150,12,0.09) 0%, transparent 65%),
          radial-gradient(ellipse 40% 40% at 20% 80%, rgba(26,61,43,0.5) 0%, transparent 70%)
        `,
      }} />

      {/* Linhas verticais decorativas */}
      <div aria-hidden="true" style={{
        position: 'absolute', right: '14%', top: '8%', bottom: '8%',
        width: 1,
        background: 'linear-gradient(to bottom, transparent 0%, rgba(184,150,12,0.25) 30%, rgba(184,150,12,0.25) 70%, transparent 100%)',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', right: 'calc(14% + 18px)', top: '18%', bottom: '18%',
        width: 1,
        background: 'linear-gradient(to bottom, transparent 0%, rgba(184,150,12,0.1) 50%, transparent 100%)',
      }} />

      {/* Conteúdo */}
      <div style={{
        maxWidth: 'var(--max-width)',
        margin: '0 auto',
        width: '100%',
        paddingTop: '7rem',
        paddingBottom: '6rem',
      }}>
        <div style={{ maxWidth: 660 }}>

          {/* Eyebrow */}
          <span
            className="section-label animate-fade-in delay-1"
            style={{ color: 'var(--dourado-claro)', opacity: 0, letterSpacing: '0.28em' }}
          >
            {HERO.label}
          </span>

          {/* Título H1 */}
          <h1
            className="animate-fade-up delay-2"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.6rem, 5.5vw, 4.75rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: 'var(--branco)',
              marginBottom: '1.75rem',
              opacity: 0,
              animationFillMode: 'forwards',
              letterSpacing: '-0.01em',
            }}
          >
            {HERO.titulo_normal}
            <br />
            <em style={{
              color: 'var(--dourado-claro)',
              fontStyle: 'italic',
              fontWeight: 300,
            }}>
              {HERO.titulo_destaque}
            </em>
          </h1>

          {/* Divisor dourado animado */}
          <div
            className="animate-fade-in delay-2"
            aria-hidden="true"
            style={{
              width: 44, height: 1,
              background: 'linear-gradient(to right, var(--dourado-claro) 60%, transparent)',
              marginBottom: '1.75rem',
              opacity: 0, animationFillMode: 'forwards',
            }}
          />

          {/* Subtítulo */}
          <p
            className="animate-fade-up delay-3"
            style={{
              fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
              fontWeight: 300,
              lineHeight: 1.85,
              color: 'rgba(245,240,232,0.72)',
              maxWidth: 500,
              marginBottom: '2.75rem',
              opacity: 0,
              animationFillMode: 'forwards',
            }}
          >
            {HERO.subtitulo}
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-up delay-4 hero-ctas"
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              opacity: 0,
              animationFillMode: 'forwards',
            }}
          >
            <a href={HERO.cta_primario.href} className="btn-primary">
              {HERO.cta_primario.label}
            </a>
            <a href={HERO.cta_secundario.href} className="btn-outline">
              {HERO.cta_secundario.label}
            </a>
          </div>

          {/* Citação discreta */}
          <div
            className="animate-fade-in delay-4"
            style={{
              marginTop: '3.5rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255,255,255,0.07)',
              opacity: 0,
              animationFillMode: 'forwards',
            }}
          >
            <blockquote style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
              fontStyle: 'italic',
              fontWeight: 300,
              color: 'rgba(245,240,232,0.42)',
              lineHeight: 1.6,
            }}>
              {HERO.citacao}
            </blockquote>
          </div>
        </div>
      </div>

      {/* Fade para a próxima seção */}
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: 100,
        background: 'linear-gradient(to top, var(--bege) 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />
    </section>
  )
}
