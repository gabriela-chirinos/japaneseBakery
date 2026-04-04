export default function Button({ children, onClick, className = '', dark = false }) {
  const borderColor = dark ? 'var(--shio)' : 'var(--sumi)'
  const hoverBg    = dark ? 'var(--shio)' : 'var(--sumi)'
  const hoverText  = dark ? 'var(--ai)'   : 'var(--kinu)'

  return (
    <button
      type="button"
      onClick={onClick}
      className={`font-body font-medium uppercase cursor-pointer transition-all ${className}`}
      style={{
        border: `1px solid ${borderColor}`,
        background: 'transparent',
        color: borderColor,
        padding: '18px 48px',
        fontSize: '12px',
        letterSpacing: '5px',
        borderRadius: 0,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = hoverBg
        e.currentTarget.style.color = hoverText
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'transparent'
        e.currentTarget.style.color = borderColor
      }}
    >
      {children}
    </button>
  )
}
