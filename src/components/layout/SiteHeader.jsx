// src/components/layout/SiteHeader.jsx
import { useState } from 'react'
import MobileMenu from './MobileMenu.jsx'
import PanKun     from '../mascot/PanKun.jsx'
import useIsMobile from '../../hooks/useIsMobile.js'

const NAV_LINKS = [
  { label: 'THE MENU',  kanji: '一', href: '#products' },
  { label: 'OUR STORY', kanji: '話', href: '#philosophy' },
  { label: 'INQUIRY',   kanji: '連', href: '#contact' },
]

export default function SiteHeader() {
  const isMobile = useIsMobile()
  const [open, setOpen] = useState(false)

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: isMobile ? '16px 20px' : '24px 40px',
          pointerEvents: 'none',
        }}
      >
        {/* Top-left badge / wordmark */}
        <a href="#hero" style={{ pointerEvents: 'auto', textDecoration: 'none', lineHeight: 1.7 }}>
          <p className="font-body font-medium uppercase"
            style={{ fontSize: '10px', letterSpacing: '2px', color: 'var(--akagane)' }}>
            STONE-MILLED
          </p>
          <p className="font-body font-medium uppercase"
            style={{ fontSize: '10px', letterSpacing: '2px', color: 'var(--akagane)' }}>
            DAILY — 04:00 AM
          </p>
        </a>

        {/* Desktop: PanKun centered in header */}
        {!isMobile && (
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
            }}
          >
            <PanKun size={28} color="var(--akagane)" variant="default" animate={true} />
          </div>
        )}

        {/* Desktop nav */}
        {!isMobile && (
          <nav aria-label="Site navigation" style={{ display: 'flex', gap: '40px', pointerEvents: 'auto' }}>
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontWeight: 500,
                  fontSize: '10px',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  color: 'var(--akagane)',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                {link.kanji}&ensp;{link.label}
              </a>
            ))}
          </nav>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(v => !v)}
            style={{
              pointerEvents: 'auto',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              alignItems: 'flex-end',
            }}
          >
            {/* Top line — becomes first arm of X */}
            <span style={{
              display: 'block',
              width: '28px',
              height: '2px',
              backgroundColor: 'var(--akagane)',
              borderRadius: '2px',
              transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
              transition: 'transform 380ms cubic-bezier(0.34, 1.56, 0.64, 1)',
            }} />
            {/* Middle line — fades out */}
            <span style={{
              display: 'block',
              width: '20px',
              height: '2px',
              backgroundColor: 'var(--akagane)',
              borderRadius: '2px',
              opacity: open ? 0 : 1,
              transform: open ? 'scaleX(0)' : 'scaleX(1)',
              transition: 'opacity 200ms ease, transform 200ms ease',
            }} />
            {/* Bottom line — becomes second arm of X */}
            <span style={{
              display: 'block',
              width: '24px',
              height: '2px',
              backgroundColor: 'var(--akagane)',
              borderRadius: '2px',
              transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
              transition: 'transform 380ms cubic-bezier(0.34, 1.56, 0.64, 1)',
            }} />
          </button>
        )}
      </header>

      <MobileMenu id="mobile-menu" open={open} onClose={() => setOpen(false)} />
    </>
  )
}
