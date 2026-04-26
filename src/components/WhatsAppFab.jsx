import { useState, useEffect } from 'react'
import { CONTATO } from '../constants/index.js'

/**
 * WhatsAppFab — botão flutuante de WhatsApp.
 * Aparece após o usuário rolar 300px para criar um efeito de descoberta.
 */
export default function WhatsAppFab() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const href = `https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(
    'Olá! Gostaria de agendar uma consulta.'
  )}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Falar com o escritório pelo WhatsApp"
      title="WhatsApp"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.9)',
        transition: 'opacity 0.3s, transform 0.3s',
      }}
    >
      {/* Ícone WhatsApp — SVG oficial simplificado */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M14 2.333C7.557 2.333 2.333 7.557 2.333 14c0 2.02.535 3.914 1.471 5.546L2.333 25.667l6.285-1.448A11.596 11.596 0 0014 25.667c6.443 0 11.667-5.224 11.667-11.667S20.443 2.333 14 2.333z"
          fill="white"
          opacity="0.15"
        />
        <path
          d="M14 3.5C7.925 3.5 3 8.425 3 14.5c0 2.1.576 4.068 1.584 5.754L3 25.5l5.388-1.554A11.46 11.46 0 0014 25.5c6.075 0 11-4.925 11-11S20.075 3.5 14 3.5zm5.59 15.316c-.234.655-1.377 1.253-1.889 1.285-.512.033-.527.384-3.318-.814-2.79-1.198-4.468-4.15-4.603-4.341-.135-.191-1.097-1.516-1.04-2.856.057-1.341.771-1.985 1.04-2.252.27-.267.577-.317.77-.317.192 0 .385.003.553.011.177.009.415-.067.649.54.234.607.796 2.05.866 2.2.07.15.116.327.023.527-.093.2-.14.325-.28.5-.14.175-.294.39-.42.524-.14.149-.285.312-.122.596.163.284.723 1.24 1.553 2.01 1.066.986 1.967 1.296 2.25 1.444.284.148.45.124.615-.074.164-.199.706-.824.895-1.108.188-.284.377-.234.635-.14.258.093 1.638.805 1.92.952.283.147.472.22.541.345.07.124.07.718-.164 1.373z"
          fill="white"
        />
      </svg>
    </a>
  )
}
