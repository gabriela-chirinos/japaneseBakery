export default function SectionLabel({ number, label, labelJp, className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span
        className="font-body font-medium text-akagane uppercase"
        style={{ fontSize: '11px', letterSpacing: '4px', whiteSpace: 'nowrap' }}
      >
        [ {number} ] {label}{labelJp ? ` / ${labelJp}` : ''}
      </span>
      <div
        aria-hidden="true"
        className="flex-1 h-px"
        style={{ backgroundColor: 'rgba(196,112,63,0.3)' }}
      />
    </div>
  )
}
