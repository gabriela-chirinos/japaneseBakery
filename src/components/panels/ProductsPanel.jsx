// src/components/panels/ProductsPanel.jsx
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel.jsx'
import ProductCard  from '../ui/ProductCard.jsx'
import PanKun       from '../mascot/PanKun.jsx'
import { products } from '../../data/products.js'

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay },
  },
})

export default function ProductsPanel({ isActive, justEntered }) {
  const shouldAnimate = isActive || justEntered
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.innerWidth < 1024
  )
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 1024)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return (
    <section
      aria-label="Select Bakes — product showcase"
      className="panel-scrollable"
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'var(--kinu)',
        overflowY: 'auto',
        overflowX: 'hidden',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      <div style={{ padding: 'clamp(60px, 8vh, 100px) clamp(24px, 6vw, 80px) 80px' }}>
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={shouldAnimate ? 'visible' : 'hidden'}
        >
          <SectionLabel number="01" label="SELECT BAKES" labelJp="セレクト" />
        </motion.div>

        {/* Desktop: 2-col asymmetric. Mobile: single column */}
        {isMobile ? (
          <div className="mt-10" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                variants={fadeUp(0.15 + i * 0.1)}
                initial="hidden"
                animate={shouldAnimate ? 'visible' : 'hidden'}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div
            className="mt-10"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gridTemplateRows: 'auto auto',
              gap: '24px',
            }}
          >
            <motion.div
              variants={fadeUp(0.15)}
              initial="hidden"
              animate={shouldAnimate ? 'visible' : 'hidden'}
              style={{ gridColumn: '1', gridRow: '1' }}
            >
              <ProductCard product={products[0]} />
            </motion.div>
            <motion.div
              variants={fadeUp(0.25)}
              initial="hidden"
              animate={shouldAnimate ? 'visible' : 'hidden'}
              style={{ gridColumn: '2', gridRow: '1' }}
            >
              <ProductCard product={products[1]} />
            </motion.div>
            <motion.div
              variants={fadeUp(0.35)}
              initial="hidden"
              animate={shouldAnimate ? 'visible' : 'hidden'}
              style={{ gridColumn: '1 / -1', gridRow: '2' }}
            >
              <ProductCard product={products[2]} />
            </motion.div>
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
          <PanKun size={56} color="var(--ai)" variant="sitting" animate={isActive} />
        </div>
      </div>
    </section>
  )
}
