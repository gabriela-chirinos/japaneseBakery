// src/components/layout/MobileMenu.jsx
import PanKun from '../mascot/PanKun.jsx'
import CopperCrescent from '../mascot/CopperCrescent.jsx'

const NAV_LINKS = [
  { label: 'THE MENU',  kanji: '一', labelJp: 'メニュー', href: '#products' },
  { label: 'OUR STORY', kanji: '話', labelJp: 'ものがたり', href: '#philosophy' },
  { label: 'INQUIRY',   kanji: '連', labelJp: '連絡',     href: '#contact' },
]

export default function MobileMenu({ id, open, onClose }) {
  return (
    <div
      id={id}
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      aria-hidden={!open}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'var(--ai)',
        zIndex: 190,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transform: open ? 'translateY(0)' : 'translateY(-105%)',
        transition: 'transform 520ms cubic-bezier(0.34, 1.15, 0.64, 1)',
        pointerEvents: open ? 'auto' : 'none',
        overflow: 'hidden',
      }}
    >
      {/* Decorative crescents — whimsical background detail */}
      <CopperCrescent
        size={56}
        animate={false}
        style={{ position: 'absolute', top: '14%', right: '10%', opacity: 0.4,
          transform: open ? 'rotate(0deg) scale(1)' : 'rotate(-30deg) scale(0.6)',
          transition: 'transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s',
        }}
      />
      <CopperCrescent
        size={28}
        animate={false}
        style={{ position: 'absolute', bottom: '22%', left: '8%', opacity: 0.25,
          transform: open ? 'rotate(0deg) scale(1)' : 'rotate(20deg) scale(0.5)',
          transition: 'transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1) 0.25s',
        }}
      />

      {/* EST. label */}
      <p
        style={{
          position: 'absolute',
          top: '80px',
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '10px',
          letterSpacing: '4px',
          color: 'rgba(244,240,232,0.3)',
          textTransform: 'uppercase',
          transform: open ? 'translateY(0)' : 'translateY(-12px)',
          opacity: open ? 1 : 0,
          transition: 'all 400ms ease 0.05s',
        }}
      >
        [ EST. 1967 ]
      </p>

      {/* Nav links */}
      <nav aria-label="Mobile navigation" style={{ textAlign: 'center', width: '100%', padding: '0 32px' }}>
        {NAV_LINKS.map((link, i) => (
          <div key={link.href} style={{ marginBottom: i < NAV_LINKS.length - 1 ? '36px' : 0 }}>
            <a
              href={link.href}
              onClick={onClose}
              style={{
                textDecoration: 'none',
                display: 'block',
                cursor: 'pointer',
                transform: open ? 'translateY(0)' : `translateY(${24 + i * 8}px)`,
                opacity: open ? 1 : 0,
                transition: `transform 480ms cubic-bezier(0.16, 1, 0.3, 1) ${open ? 0.08 + i * 0.06 : 0}s,
                             opacity 350ms ease ${open ? 0.08 + i * 0.06 : 0}s`,
              }}
            >
              <p
                className="font-kanji"
                style={{
                  fontSize: '11px',
                  color: 'var(--akagane)',
                  letterSpacing: '5px',
                  marginBottom: '6px',
                }}
              >
                {link.kanji}
              </p>
              <p
                className="font-display"
                style={{
                  fontSize: 'clamp(36px, 11vw, 60px)',
                  color: 'var(--shio)',
                  lineHeight: 1,
                  letterSpacing: '0.05em',
                }}
              >
                {link.label}
              </p>
              <p
                className="font-body"
                style={{
                  fontSize: '11px',
                  color: 'rgba(244,240,232,0.4)',
                  letterSpacing: '3px',
                  marginTop: '8px',
                }}
              >
                {link.labelJp}
              </p>
            </a>
          </div>
        ))}
      </nav>

      {/* PanKun — peeks in from bottom corner, slightly tilted */}
      <div
        style={{
          position: 'absolute',
          bottom: '28px',
          right: '28px',
          transform: open ? 'translateY(0) rotate(-8deg)' : 'translateY(60px) rotate(5deg)',
          opacity: open ? 1 : 0,
          transition: 'transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1) 0.32s, opacity 300ms ease 0.32s',
        }}
      >
        <PanKun size={52} color="rgba(244,240,232,0.5)" variant="sitting" animate={true} />
      </div>

      {/* Subtle bottom tagline */}
      <p
        style={{
          position: 'absolute',
          bottom: '28px',
          left: '28px',
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '9px',
          letterSpacing: '2px',
          color: 'rgba(244,240,232,0.25)',
          textTransform: 'uppercase',
          transform: open ? 'translateY(0)' : 'translateY(16px)',
          opacity: open ? 1 : 0,
          transition: 'all 450ms ease 0.38s',
        }}
      >
        NIIGATA, JAPAN
      </p>
    </div>
  )
}
