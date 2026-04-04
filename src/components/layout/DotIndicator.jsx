// src/components/layout/DotIndicator.jsx
export default function DotIndicator({ total, current, onDotClick }) {
  return (
    <nav
      role="navigation"
      aria-label="Panel navigation"
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '12px',
        zIndex: 200,
      }}
    >
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          aria-label={`Go to panel ${i + 1}`}
          aria-current={i === current ? 'true' : undefined}
          onClick={() => onDotClick(i)}
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            border: i === current ? 'none' : '1px solid var(--kinari)',
            backgroundColor: i === current ? 'var(--akagane)' : 'transparent',
            padding: 0,
            cursor: 'pointer',
          }}
        />
      ))}
    </nav>
  )
}
