import { useRef, useEffect, useState, useCallback } from 'react'
import gsap from 'gsap'
import useHorizontalScroll from '../../hooks/useHorizontalScroll.js'
import useSwipe   from '../../hooks/useSwipe.js'
import useIsMobile from '../../hooks/useIsMobile.js'

import HeroPanel       from '../panels/HeroPanel.jsx'
import ProductsPanel   from '../panels/ProductsPanel.jsx'
import PhilosophyPanel from '../panels/PhilosophyPanel.jsx'
import FooterPanel     from '../panels/FooterPanel.jsx'

const PANELS = [HeroPanel, ProductsPanel, PhilosophyPanel, FooterPanel]
const TOTAL  = PANELS.length

function useReducedMotionPref() {
  const [reduced, setReduced] = useState(
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  )
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = (e) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return reduced
}

export default function PanelContainer({ onPanelChange, onRegisterNavigate }) {
  const isMobile = useIsMobile()
  const prefersReducedMotion = useReducedMotionPref()
  const panelRefs = useRef([])
  const [current, setCurrent] = useState(0)
  const [enteredIndex, setEnteredIndex] = useState(0)
  const isAnimating = useRef(false)
  const currentRef = useRef(0)

  const transitionTo = useCallback((nextIndex, fast = false) => {
    if (isAnimating.current) return
    if (nextIndex < 0 || nextIndex >= TOTAL) return
    if (nextIndex === currentRef.current) return

    isAnimating.current = true
    const duration = fast ? 0.5 : 0.7
    const direction = nextIndex > currentRef.current ? 1 : -1

    const currentEl = panelRefs.current[currentRef.current]
    const nextEl    = panelRefs.current[nextIndex]

    if (prefersReducedMotion) {
      if (currentEl) gsap.set(currentEl, { xPercent: -100 * direction })
      if (nextEl)    gsap.set(nextEl,    { xPercent: 0 })
      isAnimating.current = false
      setEnteredIndex(nextIndex)
    } else {
      if (currentEl) {
        gsap.fromTo(currentEl,
          { xPercent: 0 },
          { xPercent: -100 * direction, duration, ease: 'power3.out' }
        )
      }
      if (nextEl) {
        gsap.fromTo(
          nextEl,
          { xPercent: 100 * direction },
          {
            xPercent: 0,
            duration,
            ease: 'power3.out',
            onComplete: () => {
              isAnimating.current = false
              setEnteredIndex(nextIndex)
            },
          }
        )
      } else {
        // Panel not mounted (outside render window) — unlock immediately
        isAnimating.current = false
      }
    }

    currentRef.current = nextIndex
    setCurrent(nextIndex)
    onPanelChange?.(nextIndex)
  }, [onPanelChange, prefersReducedMotion])

  // Expose navigation to parent (for PersistentUI nav clicks)
  useEffect(() => {
    onRegisterNavigate?.(transitionTo)
  }, [transitionTo, onRegisterNavigate])

  // Desktop scroll engine (disabled on mobile)
  useHorizontalScroll({
    totalPanels: TOTAL,
    onPanelChange: transitionTo,
    enabled: !isMobile,
  })

  // Mobile swipe — use currentRef to avoid stale closure
  const { ref: swipeRef } = useSwipe({
    onSwipeLeft:  ({ fast }) => transitionTo(currentRef.current + 1, fast),
    onSwipeRight: ({ fast }) => transitionTo(currentRef.current - 1, fast),
    threshold: 50,
  })

  // Set initial panel positions on mount
  useEffect(() => {
    PANELS.forEach((_, i) => {
      const el = panelRefs.current[i]
      if (!el) return
      gsap.set(el, { xPercent: i === 0 ? 0 : 100 })
    })
  }, [])

  return (
    <div
      id="main-content"
      role="main"
      ref={swipeRef}
      style={{ position: 'fixed', inset: 0, overflow: 'hidden' }}
      aria-live="polite"
    >
      {PANELS.map((PanelComponent, i) => {
        if (Math.abs(i - current) > 1) return null

        return (
          <div
            key={i}
            ref={el => { panelRefs.current[i] = el }}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100vw',
              height: '100vh',
              willChange: 'transform',
            }}
            aria-hidden={i !== current}
          >
            <PanelComponent
              isActive={i === current}
              justEntered={i === enteredIndex}
            />
          </div>
        )
      })}
    </div>
  )
}
