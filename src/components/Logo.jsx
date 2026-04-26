/**
 * Logo — monograma N dourado (imagem real do escritório) + wordmark.
 *
 * @param {boolean} dark  — false = sobre fundo escuro (header/hero/footer)
 *                          true  = sobre fundo claro (uso futuro)
 * @param {'sm'|'md'|'lg'} size — tamanho do monograma
 */
export default function Logo({ dark = false, size = 'md' }) {
  const textColor = dark ? 'var(--verde)'       : 'var(--branco)'
  const goldColor = dark ? 'var(--dourado)'     : 'var(--dourado-claro)'
  const heights   = { sm: 36, md: 44, lg: 56 }
  const logoH     = heights[size] ?? 44
  const fontSize  = size === 'lg' ? '1.4rem' : size === 'sm' ? '1rem' : '1.2rem'

  return (
    <a
      href="#"
      aria-label="Nascente Advocacia — página inicial"
      style={{
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        lineHeight: 1,
      }}
    >
      {/*
        Monograma N dourado sobre fundo bege claro.
        - Sobre fundo verde escuro (header/hero): mix-blend-mode "screen" funde
          o bege claro da imagem com o verde, deixando apenas o N dourado visível.
        - Sobre fundo claro: exibe normalmente com multiply para remover o bege.
      */}
      <img
        src="/logo.png"
        alt=""
        aria-hidden="true"
        width={logoH}
        height={logoH}
        style={{
          width: logoH,
          height: logoH,
          objectFit: 'contain',
          flexShrink: 0,
          mixBlendMode: dark ? 'multiply' : 'screen',
          filter: dark
            ? 'none'
            : 'brightness(1.1) drop-shadow(0 0 2px rgba(212,170,32,0.3))',
        }}
      />

      {/* Wordmark */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize,
            fontWeight: 400,
            letterSpacing: '0.06em',
            color: textColor,
            lineHeight: 1,
            transition: 'color 0.3s',
          }}
        >
          Nascente
        </span>
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.52rem',
            fontWeight: 400,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: goldColor,
            transition: 'color 0.3s',
          }}
        >
          Advocacia
        </span>
      </div>
    </a>
  )
}
