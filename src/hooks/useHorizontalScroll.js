import { useState, useEffect, useCallback, useRef } from 'react'

/**
 * Desktop horizontal scroll engine.
 * Intercepts wheel events and calls onPanelChange(newIndex).
 *
 * @param {object} options
 * @param {number}   options.totalPanels   — number of panels (4)
 * @param {Function} options.onPanelChange — called with new panel index
 * @param {boolean}  options.enabled       — false on mobile (default true)
 */
export default function useHorizontalScroll({ totalPanels, onPanelChange, enabled = true }) {
  const [panelIndex, setPanelIndex] = useState(0)
  const isTransitioning = useRef(false)
  const panelIndexRef = useRef(0)

  const goToPanel = useCallback((index) => {
    const clamped = Math.max(0, Math.min(totalPanels - 1, index))
    setPanelIndex(clamped)
    panelIndexRef.current = clamped
    onPanelChange?.(clamped)
  }, [totalPanels, onPanelChange])

  useEffect(() => {
    if (!enabled) return

    function handleWheel(e) {
      e.preventDefault()
      if (isTransitioning.current) return

      const direction = e.deltaY > 0 ? 1 : -1
      const next = panelIndexRef.current + direction
      if (next < 0 || next >= totalPanels) return

      isTransitioning.current = true
      goToPanel(next)

      // Lock during transition (700ms + 100ms buffer)
      setTimeout(() => { isTransitioning.current = false }, 800)
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [enabled, totalPanels, goToPanel])

  // Keyboard arrow key support
  useEffect(() => {
    if (!enabled) return

    function handleKey(e) {
      if (isTransitioning.current) return
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault()
        isTransitioning.current = true
        goToPanel(panelIndexRef.current + 1)
        setTimeout(() => { isTransitioning.current = false }, 800)
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        isTransitioning.current = true
        goToPanel(panelIndexRef.current - 1)
        setTimeout(() => { isTransitioning.current = false }, 800)
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [enabled, goToPanel])

  return { panelIndex, goToPanel }
}
