// src/components/panels/FooterPanel.jsx
import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel.jsx'
import PanKun       from '../mascot/PanKun.jsx'

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1], delay },
  },
})

const labelStyle = {
  fontFamily: '"DM Sans", sans-serif',
  fontWeight: 500,
  fontSize: '10px',
  letterSpacing: '3px',
  textTransform: 'uppercase',
  color: 'var(--akagane)',
  marginBottom: '12px',
}

const addressStyle = {
  fontFamily: '"DM Sans", sans-serif',
  fontWeight: 400,
  fontSize: '13px',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  color: 'var(--sumi)',
  lineHeight: 1.9,
}

export default function FooterPanel({ isActive, justEntered }) {
  const shouldAnimate = isActive || justEntered

  return (
    <section
      aria-label="Logistics and contact"
      style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      {/* TOP HALF — Cream logistics */}
      <div
        style={{
          flex: 1,
          backgroundColor: 'var(--kinu)',
          padding: 'clamp(48px, 6vh, 80px) clamp(24px, 6vw, 80px) 40px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={shouldAnimate ? 'visible' : 'hidden'}
        >
          <SectionLabel number="03" label="LOGISTICS" labelJp="連絡" />
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
            marginTop: '40px',
          }}
        >
          <motion.div variants={fadeUp(0.1)} initial="hidden" animate={shouldAnimate ? 'visible' : 'hidden'}>
            <p style={labelStyle}>HEADQUARTERS</p>
            <p style={addressStyle}>
              1-24-9 TOCHIGI-KEN<br />
              NIIGATA-SHI, JAPAN<br />
              <br />
              +81 (0) 25 223 4401
            </p>
          </motion.div>

          <motion.div variants={fadeUp(0.15)} initial="hidden" animate={shouldAnimate ? 'visible' : 'hidden'}>
            <p style={labelStyle}>DIGITAL FOOTPRINT</p>
            <p style={addressStyle}>
              @PAN_SEIBANJO<br />
              HELLO@PAN-BAKERY.JP
            </p>
            <p style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 500, fontSize: '12px', color: 'rgba(26,23,20,0.5)', marginTop: '16px', letterSpacing: '2px' }}>
              [ EST. 1967 ]
            </p>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM HALF — Indigo footer */}
      <div
        style={{
          flex: 1,
          backgroundColor: 'var(--ai)',
          padding: 'clamp(32px, 4vh, 60px) clamp(24px, 6vw, 80px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          animate={shouldAnimate ? 'visible' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '32px',
            alignItems: 'start',
          }}
        >
          <div>
            <p
              className="font-display"
              style={{ fontSize: 'clamp(48px, 6vw, 80px)', color: 'var(--shio)', lineHeight: 1 }}
            >
              PAN
            </p>
          </div>

          <div>
            <p style={{ ...labelStyle, color: 'var(--akagane)' }}>NAVIGATION</p>
            {['THE MENU', 'OUR STORY', 'WHOLESALE'].map(item => (
              <p key={item} style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '13px', color: 'rgba(244,240,232,0.7)', lineHeight: 2.2 }}>
                {item}
              </p>
            ))}
          </div>

          <div>
            <p style={{ ...labelStyle, color: 'var(--akagane)' }}>LEGAL</p>
            {['PRIVACY POLICY', 'TERMS', 'SHIPPING INFO'].map(item => (
              <p key={item} style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '13px', color: 'rgba(244,240,232,0.7)', lineHeight: 2.2 }}>
                {item}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp(0.3)}
          initial="hidden"
          animate={shouldAnimate ? 'visible' : 'hidden'}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '24px',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '11px', color: 'rgba(244,240,232,0.4)', letterSpacing: '1px', textTransform: 'uppercase' }}>
            © 2026 PAN 製パン所 INC. ALL RIGHTS RESERVED. MADE IN NIIGATA.
          </p>
          <PanKun size={32} color="rgba(244,240,232,0.5)" variant="small" animate={false} />
        </motion.div>
      </div>
    </section>
  )
}
