// src/components/panels/ProductsPanel.jsx
import SectionLabel from '../ui/SectionLabel.jsx'
import ProductCard  from '../ui/ProductCard.jsx'
import PanKun       from '../mascot/PanKun.jsx'
import { products } from '../../data/products.js'
import useIsMobile  from '../../hooks/useIsMobile.js'

export default function ProductsPanel() {
  const isMobile = useIsMobile()

  return (
    <section
      id="products"
      aria-label="Select Bakes — product showcase"
      style={{
        width: '100%',
        backgroundColor: 'var(--kinu)',
      }}
    >
      <div style={{ padding: 'clamp(80px, 10vh, 120px) clamp(24px, 6vw, 80px) 80px' }}>
        <SectionLabel number="01" label="SELECT BAKES" labelJp="セレクト" />

        {/* Desktop: 2-col asymmetric. Mobile: single column */}
        {isMobile ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '40px' }}>
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gridTemplateRows: 'auto auto',
              gap: '24px',
              marginTop: '40px',
            }}
          >
            <div style={{ gridColumn: '1', gridRow: '1' }}>
              <ProductCard product={products[0]} />
            </div>
            <div style={{ gridColumn: '2', gridRow: '1' }}>
              <ProductCard product={products[1]} />
            </div>
            <div style={{ gridColumn: '1 / -1', gridRow: '2' }}>
              <ProductCard product={products[2]} />
            </div>
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
          <PanKun size={56} color="var(--ai)" variant="sitting" animate={false} />
        </div>
      </div>
    </section>
  )
}
