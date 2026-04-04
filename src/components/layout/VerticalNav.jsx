// src/components/layout/VerticalNav.jsx
const NAV_ITEMS = [
  { kanji: '一', en: 'MENU',      jp: 'メニュー', panel: 1 },
  { kanji: '話', en: 'OUR STORY', jp: '話',      panel: 2 },
  { kanji: '場', en: 'LOCATE',    jp: '場所',     panel: 2 },
  { kanji: '連', en: 'INQUIRY',   jp: '連絡',     panel: 3 },
]

export default function VerticalNav({ current, onNavigate, lightMode = false }) {
  const textColor   = lightMode ? 'var(--sumi)' : 'var(--kinari)'
  const activeColor = 'var(--akagane)'

  return (
    <nav
      role="navigation"
      aria-label="Site navigation"
      style={{
        position: 'fixed',
        right: '32px',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        zIndex: 200,
      }}
    >
      {NAV_ITEMS.map((item, i) => {
        const isActive = current === item.panel
        return (
          <button
            key={i}
            type="button"
            onClick={() => onNavigate(item.panel)}
            aria-current={isActive ? 'true' : undefined}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              writingMode: 'vertical-rl',
              color: isActive ? activeColor : textColor,
              transition: 'color 300ms',
              padding: 0,
            }}
          >
            <span
              className="font-kanji"
              style={{ fontSize: '12px', fontWeight: 300 }}
            >
              {item.kanji}
            </span>
            <span
              className="font-body font-medium uppercase"
              style={{ fontSize: '10px', letterSpacing: '3px' }}
            >
              {item.en}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
