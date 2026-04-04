import { useRef, useEffect } from 'react'

/**
 * Attaches touch swipe detection to a ref element.
 * @param {object} options
 * @param {Function} options.onSwipeLeft  — called when user swipes left (→ next panel)
 * @param {Function} options.onSwipeRight — called when user swipes right (← prev panel)
 * @param {number}   options.threshold   — min px drag to commit (default 50)
 */
export default function useSwipe({ onSwipeLeft, onSwipeRight, threshold = 50 } = {}) {
  const ref = useRef(null)
  const startX = useRef(null)
  const startTime = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    function handleTouchStart(e) {
      startX.current = e.touches[0].clientX
      startTime.current = Date.now()
    }

    function handleTouchEnd(e) {
      if (startX.current === null) return
      const endX = e.changedTouches[0].clientX
      const delta = endX - startX.current
      const elapsed = Date.now() - startTime.current
      const velocity = Math.abs(delta) / elapsed

      if (Math.abs(delta) < threshold) return

      const fast = velocity > 0.5

      if (delta < 0) {
        onSwipeLeft?.({ fast })
      } else {
        onSwipeRight?.({ fast })
      }

      startX.current = null
    }

    el.addEventListener('touchstart', handleTouchStart, { passive: true })
    el.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      el.removeEventListener('touchstart', handleTouchStart)
      el.removeEventListener('touchend', handleTouchEnd)
    }
  }, [onSwipeLeft, onSwipeRight, threshold])

  return { ref }
}
