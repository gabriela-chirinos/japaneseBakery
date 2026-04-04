// src/components/layout/PersistentUI.jsx
import VerticalNav  from './VerticalNav.jsx'
import DotIndicator from './DotIndicator.jsx'

// Panels 1 and 2 have cream backgrounds — nav text should be dark
const LIGHT_MODE_PANELS = [1, 2]

export default function PersistentUI({ currentPanel, onNavigate, isMobile, totalPanels = 4 }) {
  const lightMode = LIGHT_MODE_PANELS.includes(currentPanel)

  return (
    <>
      {/* Top-left badge */}
      <div
        style={{
          position: 'fixed',
          top: isMobile ? '16px' : '32px',
          left: isMobile ? '16px' : '32px',
          zIndex: 200,
          lineHeight: 1.6,
        }}
      >
        <p
          className="font-body font-medium uppercase"
          style={{ fontSize: '10px', letterSpacing: '2px', color: 'var(--akagane)' }}
        >
          STONE-MILLED
        </p>
        <p
          className="font-body font-medium uppercase"
          style={{ fontSize: '10px', letterSpacing: '2px', color: 'var(--akagane)' }}
        >
          DAILY — 04:00 AM
        </p>
      </div>

      {/* Top-right tagline — desktop only */}
      {!isMobile && (
        <div
          style={{
            position: 'fixed',
            top: '32px',
            right: '32px',
            zIndex: 200,
            textAlign: 'right',
            lineHeight: 1.7,
          }}
        >
          {['EVERY LOAF', 'TELLS —', 'PAN ◎'].map(line => (
            <p
              key={line}
              className="font-body font-medium uppercase"
              style={{ fontSize: '10px', letterSpacing: '2px', color: 'var(--akagane)' }}
            >
              {line}
            </p>
          ))}
        </div>
      )}

      {/* Bottom-left hours card */}
      <div
        style={{
          position: 'fixed',
          bottom: isMobile ? '16px' : '32px',
          left: isMobile ? '16px' : '32px',
          backgroundColor: 'var(--ai)',
          padding: isMobile ? '14px 18px' : '20px 24px',
          zIndex: 200,
        }}
      >
        <p
          className="font-body font-medium uppercase"
          style={{ fontSize: '10px', letterSpacing: '3px', color: 'var(--akagane)', marginBottom: '6px' }}
        >
          OPEN / 開店
        </p>
        <p
          className="font-body"
          style={{ fontSize: isMobile ? '22px' : '28px', color: 'var(--shio)', letterSpacing: '2px' }}
        >
          07:00&nbsp;&nbsp;18:00
        </p>
        <p
          className="font-body font-medium uppercase"
          style={{ fontSize: '9px', letterSpacing: '2px', color: 'var(--shio)', opacity: 0.6, marginTop: '4px' }}
        >
          DAILY EXCEPT MONDAY / 月曜定休
        </p>
      </div>

      {/* Right-side vertical nav — desktop only */}
      {!isMobile && (
        <VerticalNav
          current={currentPanel}
          onNavigate={onNavigate}
          lightMode={lightMode}
        />
      )}

      {/* Bottom dot indicators — mobile only */}
      {isMobile && (
        <DotIndicator
          total={totalPanels}
          current={currentPanel}
          onDotClick={onNavigate}
        />
      )}
    </>
  )
}
