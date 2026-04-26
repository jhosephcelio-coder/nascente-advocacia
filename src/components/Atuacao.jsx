import { useReveal } from '../hooks/useReveal.js'
import { AREAS } from '../constants/index.js'

function CardArea({ area }) {
  const ref = useReveal(0.08)
  return (
    <article
      ref={ref}
      className="reveal card-area"
      aria-label={`Área de atuação: ${area.titulo}`}
    >
      <span className="card-area-icon" aria-hidden="true" role="img">
        {area.icone}
      </span>
      <h3 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '1.2rem',
        fontWeight: 500,
        color: 'var(--verde)',
        marginBottom: '0.6rem',
        lineHeight: 1.25,
      }}>
        {area.titulo}
      </h3>
      <div role="presentation" style={{
        width: 24, height: 1,
        background: 'linear-gradient(to right, var(--dourado), transparent)',
        marginBottom: '1rem',
      }} />
      <p style={{ fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--texto-medio)' }}>
        {area.descricao}
      </p>
    </article>
  )
}

export default function Atuacao() {
  const refHeader = useReveal()

  return (
    <section
      id="atuacao"
      aria-labelledby="atuacao-titulo"
      style={{ background: 'var(--branco)', padding: 'var(--section-pad)' }}
    >
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>

        {/* Header */}
        <div ref={refHeader} className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">Áreas de Atuação</span>
          <h2
            id="atuacao-titulo"
            className="section-title"
            style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.7rem)', maxWidth: 480, margin: '0 auto 1.25rem' }}
          >
            Assessoria jurídica em diversas frentes
          </h2>
          <div className="divider-gold" role="presentation" />
          <p style={{
            fontSize: '0.92rem',
            color: 'var(--texto-claro)',
            maxWidth: 460,
            margin: '0 auto',
            lineHeight: 1.8,
          }}>
            Cada área tem suas especificidades. Atuamos com foco e
            atenção individual em cada situação.
          </p>
        </div>

        {/* Grid de cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1px',
          background: 'var(--bege-escuro)',
          border: '1px solid var(--bege-escuro)',
        }}>
          {AREAS.map(area => (
            <CardArea key={area.titulo} area={area} />
          ))}
        </div>
      </div>
    </section>
  )
}
