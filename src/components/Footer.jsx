import Logo from './Logo.jsx'
import { FOOTER, ESCRITORIO, CONTATO } from '../constants/index.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      role="contentinfo"
      style={{
        background: 'var(--verde-ultra, #0d2018)',
        padding: '3.5rem 5% 2.25rem',
      }}
    >
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>

        {/* Linha superior */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
          marginBottom: '2.5rem',
          paddingBottom: '2.25rem',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}>
          <Logo dark={false} size="sm" />

          <nav aria-label="Links do rodapé">
            <ul style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', listStyle: 'none' }}>
              {FOOTER.links.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.7rem',
                      color: 'rgba(245,240,232,0.38)',
                      textDecoration: 'none',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      transition: 'color var(--dur-base)',
                    }}
                    onMouseEnter={e => e.target.style.color = 'var(--dourado)'}
                    onMouseLeave={e => e.target.style.color = 'rgba(245,240,232,0.38)'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Contatos rápidos */}
        <div style={{
          display: 'flex',
          gap: '2.5rem',
          flexWrap: 'wrap',
          marginBottom: '2.25rem',
          paddingBottom: '2rem',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}>
          <a href={`mailto:${CONTATO.email}`} style={{
            fontSize: '0.78rem',
            color: 'rgba(245,240,232,0.38)',
            textDecoration: 'none',
            transition: 'color var(--dur-base)',
            display: 'flex', alignItems: 'center', gap: '0.5rem',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'rgba(245,240,232,0.7)'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,240,232,0.38)'}
          >
            {CONTATO.email}
          </a>
          <a href={`https://wa.me/${CONTATO.whatsapp}`} target="_blank" rel="noopener noreferrer"
          style={{
            fontSize: '0.78rem',
            color: 'rgba(245,240,232,0.38)',
            textDecoration: 'none',
            transition: 'color var(--dur-base)',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'rgba(245,240,232,0.7)'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,240,232,0.38)'}
          >
            {CONTATO.whatsapp_display}
          </a>
          <span style={{ fontSize: '0.78rem', color: 'rgba(245,240,232,0.28)' }}>
            {ESCRITORIO.oab}
          </span>
        </div>

        {/* Aviso OAB + copyright */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          alignItems: 'flex-end',
        }}>
          <p style={{
            fontSize: '0.68rem',
            color: 'rgba(245,240,232,0.22)',
            lineHeight: 1.75,
            maxWidth: 580,
            letterSpacing: '0.01em',
          }}>
            {FOOTER.aviso_oab}
          </p>
          <p style={{
            fontSize: '0.65rem',
            color: 'rgba(245,240,232,0.16)',
            letterSpacing: '0.06em',
            whiteSpace: 'nowrap',
          }}>
            © {year} {ESCRITORIO.nome}
          </p>
        </div>
      </div>
    </footer>
  )
}
