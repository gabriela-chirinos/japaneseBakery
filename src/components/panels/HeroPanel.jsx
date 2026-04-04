// src/components/panels/HeroPanel.jsx
import { motion, AnimatePresence } from 'framer-motion'
import PanKun         from '../mascot/PanKun.jsx'
import CopperCrescent from '../mascot/CopperCrescent.jsx'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export default function HeroPanel({ isActive, justEntered }) {
  const shouldAnimate = isActive || justEntered

  return (
    <section
      aria-label="Hero — PAN 製パン所"
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'var(--ai)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative crescents */}
      <CopperCrescent size={48} style={{ position: 'absolute', top: '20%', left: '15%', opacity: 0.7 }} />
      <CopperCrescent size={32} style={{ position: 'absolute', bottom: '25%', right: '18%', opacity: 0.5 }} />

      {/* Pan-kun top-left */}
      <div style={{ position: 'absolute', top: '18%', left: '12%' }}>
        <PanKun size={64} color="var(--kinu)" variant="default" animate={isActive} />
      </div>

      {/* Pan-kun bottom-right */}
      <div style={{ position: 'absolute', bottom: '18%', right: '10%' }}>
        <PanKun size={56} color="var(--akagane)" variant="default" animate={isActive} />
      </div>

      {/* Main wordmark content */}
      <AnimatePresence>
        {shouldAnimate && (
          <motion.div
            key="hero-content"
            variants={stagger}
            initial="hidden"
            animate="visible"
            style={{ textAlign: 'center', zIndex: 1 }}
          >
            <motion.h1
              variants={fadeUp}
              className="font-display"
              style={{
                fontSize: 'clamp(80px, 14vw, 200px)',
                color: 'var(--shio)',
                letterSpacing: '0.15em',
                lineHeight: 1,
              }}
            >
              PAN
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="font-kanji"
              style={{
                fontSize: 'clamp(28px, 4vw, 56px)',
                color: 'rgba(244,240,232,0.8)',
                letterSpacing: '0.3em',
                marginTop: '0.5rem',
                fontWeight: 700,
              }}
            >
              製パン所
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
