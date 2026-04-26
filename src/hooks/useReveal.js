import { useRef, useEffect } from 'react'

/**
 * useReveal — Aplica a classe "visible" quando o elemento entra na viewport.
 * Requer a classe CSS .reveal no elemento para a animação funcionar.
 *
 * @param {number} threshold — fração do elemento visível para disparar (0–1)
 */
export function useReveal(threshold = 0.15) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
