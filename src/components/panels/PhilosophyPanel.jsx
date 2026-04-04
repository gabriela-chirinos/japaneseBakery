// src/components/panels/PhilosophyPanel.jsx
import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel.jsx'
import Button       from '../ui/Button.jsx'
import PanKun       from '../mascot/PanKun.jsx'

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 24 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay },
  },
})

export default function PhilosophyPanel({ isActive, justEntered }) {
  const shouldAnimate = isActive || justEntered

  return (
    <section
      aria-label="The Philosophy"
      className="panel-scrollable"
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'var(--kinu)',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
      }}
    >
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(60px, 8vh, 100px) clamp(24px, 6vw, 80px) 80px',
          textAlign: 'center',
        }}
      >
        <motion.div
          className="w-full mb-16"
          variants={fadeUp(0)}
          initial="hidden"
          animate={shouldAnimate ? 'visible' : 'hidden'}
          style={{ width: '100%', marginBottom: '64px' }}
        >
          <SectionLabel number="02" label="THE PHILOSOPHY" labelJp="哲学" />
        </motion.div>

        <motion.blockquote
          variants={fadeUp(0.1)}
          initial="hidden"
          animate={shouldAnimate ? 'visible' : 'hidden'}
          style={{ maxWidth: '800px' }}
        >
          <p
            className="font-display"
            style={{
              fontStyle: 'italic',
              fontSize: 'clamp(28px, 4.5vw, 56px)',
              color: 'var(--sumi)',
              lineHeight: 1.3,
            }}
          >
            We don't rush the dough.<br />
            The dough tells us when<br />
            it's ready.
          </p>
        </motion.blockquote>

        <motion.p
          variants={fadeUp(0.2)}
          initial="hidden"
          animate={shouldAnimate ? 'visible' : 'hidden'}
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: 300,
            fontSize: 'clamp(15px, 1.1vw, 17px)',
            color: 'rgba(26,23,20,0.85)',
            lineHeight: 1.8,
            maxWidth: '640px',
            marginTop: '48px',
          }}
        >
          In 1967, Haruki Minami left his family's rice paddies in Niigata with a
          question: what would Japanese bread taste like if it honored the land the
          way rice does? He spent three years studying fermentation — not in Paris,
          but in his grandmother's koji room. His first starter was cultivated from
          the skin of Niigata pears. Fifty-seven years later, that starter is still
          alive.
        </motion.p>

        <motion.div
          variants={fadeUp(0.3)}
          initial="hidden"
          animate={shouldAnimate ? 'visible' : 'hidden'}
          style={{ marginTop: '48px' }}
        >
          <Button>VISIT THE WORKSHOP →</Button>
        </motion.div>

        <div style={{ marginTop: '48px' }}>
          <PanKun size={72} color="var(--ai)" variant="sitting" animate={isActive} />
        </div>
      </div>
    </section>
  )
}
