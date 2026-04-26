import { useReveal } from '../hooks/useReveal.js'
import { ARTIGOS } from '../constants/index.js'

function CardArtigo({ artigo }) {
  const ref = useReveal(0.1)
  return (
    <article
      ref={ref}
      className="reveal"
      style={{
        padding: '2.25rem 2rem',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.875rem',
        cursor: 'pointer',
        transition: 'background var(--dur-base)',
        position: 'relative',
      }}
      onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
    >
      {/* Categoria */}
      <span style={{
        fontSize: '0.62rem',
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: 'var(--dourado)',
        fontWeight: 500,
      }}>
        {artigo.categoria}
      </span>

      {/* Título */}
      <h3 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 'clamp(1.1rem, 1.6vw, 1.25rem)',
        fontWeight: 400,
        color: 'var(--branco)',
        lineHeight: 1.38,
      }}>
        {artigo.titulo}
      </h3>

      {/* Resumo */}
      <p style={{
        fontSize: '0.875rem',
        color: 'rgba(245,240,232,0.55)',
        lineHeight: 1.78,
        flexGrow: 1,
      }}>
        {artigo.resumo}
      </p>

      {/* Rodapé do card */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '0.75rem',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}>
        <time style={{
          fontSize: '0.7rem',
          color: 'rgba(245,240,232,0.32)',
          letterSpacing: '0.06em',
        }}>
          {artigo.data}
        </time>
        <a
          href={artigo.href}
          aria-label={`Ler artigo: ${artigo.titulo}`}
          style={{
            fontSize: '0.68rem',
            color: 'var(--dourado-claro)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'color var(--dur-fast)',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#e8be30'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--dourado-claro)'}
        >
          Ler artigo →
        </a>
      </div>
    </article>
  )
}

export default function Conteudo() {
  const refHeader = useReveal()

  return (
    <section
      id="conteudo"
      aria-labelledby="conteudo-titulo"
      style={{
        background: 'linear-gradient(170deg, var(--verde) 0%, #0e2218 100%)',
        padding: 'var(--section-pad)',
      }}
    >
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>

        {/* Header */}
        <div
          ref={refHeader}
          className="reveal"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '3rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <div>
            <span className="section-label" style={{ color: 'var(--dourado-claro)' }}>
              Conteúdo Jurídico
            </span>
            <h2
              id="conteudo-titulo"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)',
                fontWeight: 300,
                color: 'var(--branco)',
                lineHeight: 1.2,
              }}
            >
              Informação acessível, sem promessas
            </h2>
          </div>
          <p style={{
            fontSize: '0.875rem',
            color: 'rgba(245,240,232,0.5)',
            maxWidth: 300,
            lineHeight: 1.75,
            textAlign: 'right',
          }}>
            Textos objetivos sobre temas jurídicos do cotidiano — para que você entenda seus direitos antes de precisar exercê-los.
          </p>
        </div>

        {/* Grid de artigos */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          border: '1px solid rgba(255,255,255,0.06)',
        }}>
          {ARTIGOS.map((artigo, i) => (
            <CardArtigo key={i} artigo={artigo} />
          ))}
        </div>
      </div>
    </section>
  )
}
