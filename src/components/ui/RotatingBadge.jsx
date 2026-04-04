export default function RotatingBadge({ text = 'BAKED IN NIIGATA · SEASONAL FLOUR ·', size = 120 }) {
  const r = size / 2 - 12
  const cx = size / 2
  const cy = size / 2

  return (
    <svg
      role="img"
      aria-label={text}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{
        animation: 'badge-rotate 15s linear infinite',
        display: 'block',
      }}
    >
      <style>{`
        @keyframes badge-rotate {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
      <defs>
        <path
          id="badge-circle"
          d={`M ${cx},${cy - r} a ${r},${r} 0 1,1 -0.01,0`}
        />
      </defs>
      <text
        fill="var(--akagane)"
        fontFamily='"DM Sans", sans-serif'
        fontWeight="500"
        fontSize="9"
        letterSpacing="2"
      >
        <textPath href="#badge-circle">
          {text}
        </textPath>
      </text>
    </svg>
  )
}
