import { useState, useEffect } from 'react'

export function useScrollY() {
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const [y, setY] = useState(0)

  useEffect(() => {
    if (prefersReduced) return
    const handler = () => setY(window.scrollY)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [prefersReduced])

  return y
}
