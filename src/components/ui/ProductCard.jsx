import RotatingBadge from './RotatingBadge.jsx'

export default function ProductCard({ product, className = '' }) {
  const { id, name, nameJp, description, price, image, aspect, hasBadge, placeholderColor } = product

  const aspectClass = {
    portrait:  'aspect-[2/3]',
    landscape: 'aspect-[3/2]',
    wide:      'aspect-[16/6]',
  }[aspect] || 'aspect-square'

  return (
    <div className={`flex flex-col ${className}`} style={{ backgroundColor: 'var(--kinari)' }}>
      {/* Image / Placeholder */}
      <div className={`relative w-full ${aspectClass} overflow-hidden`}>
        {image ? (
          <img
            src={image}
            alt={`${name} — ${nameJp}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div
            className="w-full h-full"
            style={{ backgroundColor: placeholderColor }}
            aria-label={`${name} placeholder`}
          />
        )}
        {hasBadge && (
          <div className="absolute bottom-3 right-3">
            <RotatingBadge text="BAKED IN NIIGATA · SEASONAL FLOUR ·" size={120} />
          </div>
        )}
      </div>

      {/* Info block */}
      <div className="p-5" style={{ backgroundColor: 'var(--kinari)' }}>
        <p
          className="font-body"
          style={{ fontSize: '11px', color: 'rgba(26,23,20,0.5)', marginBottom: '6px' }}
        >
          {id}
        </p>
        <p
          className="font-display"
          style={{ fontSize: '28px', color: 'var(--sumi)', lineHeight: 1.2, marginBottom: '12px' }}
        >
          {name} / {nameJp}
        </p>
        <div style={{ height: '1px', borderTop: '1px solid #d4cabb', marginBottom: '10px' }} />
        <div className="flex justify-between items-center">
          <span
            className="font-body uppercase"
            style={{ fontSize: '12px', letterSpacing: '2px', color: 'var(--sumi)' }}
          >
            {description}
          </span>
          <span
            className="font-body"
            style={{ fontSize: '12px', color: 'var(--sumi)', letterSpacing: '1px' }}
          >
            ¥{price.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  )
}
