import { useState } from 'react'
import Logo from './Logo.jsx'
import { NAV_LINKS } from '../constants/index.js'
import { useScrolled } from '../hooks/useScrolled.js'

export default function Header() {
  const scrolled  = useScrolled(60)
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      role="banner"
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        background: scrolled
          ? 'rgba(13, 32, 24, 0.96)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'background 0.4s, border-color 0.4s, backdrop-filter 0.4s',
        padding: '0 5%',
      }}
    >
      {/* Barra principal */}
      <div style={{
        maxWidth: 'var(--max-width)',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: scrolled ? 68 : 84,
        transition: 'height 0.35s var(--ease-out)',
      }}>

        <Logo dark={false} size={scrolled ? 'md' : 'lg'} />

        {/* Nav desktop */}
        <nav
          aria-label="Navegação principal"
          className="hide-mobile"
          style={{ display: 'flex', gap: '2.25rem', color: 'var(--branco)' }}
        >
          {NAV_LINKS.map(link => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href="#contato"
          className="btn-primary hide-mobile"
          style={{ padding: '10px 22px', fontSize: '0.68rem' }}
        >
          Fale Conosco
        </a>

        {/* Hambúrguer mobile */}
        <button
          className="show-mobile"
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block',
              height: '1.5px',
              background: 'var(--branco)',
              borderRadius: 2,
              transformOrigin: 'center',
              transition: 'transform 0.25s var(--ease-out), opacity 0.2s, width 0.2s',
              width: i === 2 ? (menuOpen ? 24 : 16) : 24,
              opacity: i === 1 && menuOpen ? 0 : 1,
              transform: i === 0 && menuOpen ? 'rotate(45deg) translate(4.5px, 4.5px)'
                        : i === 2 && menuOpen ? 'rotate(-45deg) translate(4.5px, -4.5px)'
                        : 'none',
            }} />
          ))}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Menu mobile"
          style={{
            background: 'rgba(13,32,24,0.97)',
            backdropFilter: 'blur(12px)',
            padding: '1.25rem 5% 1.75rem',
            borderTop: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              style={{
                display: 'block',
                color: 'rgba(245,240,232,0.78)',
                textDecoration: 'none',
                padding: '11px 0',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                fontSize: '0.82rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                transition: 'color var(--dur-fast)',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--dourado-claro)'}
              onMouseLeave={e => e.target.style.color = 'rgba(245,240,232,0.78)'}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={closeMenu}
            className="btn-primary"
            style={{ marginTop: '1.5rem', display: 'block', textAlign: 'center' }}
          >
            Fale Conosco
          </a>
        </nav>
      )}
    </header>
  )
}
