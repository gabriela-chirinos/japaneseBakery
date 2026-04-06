// src/components/panels/PhilosophyPanel.jsx
import SectionLabel from '../ui/SectionLabel.jsx'
import Button       from '../ui/Button.jsx'
import PanKun       from '../mascot/PanKun.jsx'

export default function PhilosophyPanel() {
  return (
    <section
      id="philosophy"
      aria-label="The Philosophy"
      style={{
        width: '100%',
        backgroundColor: 'var(--kinu)',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 'clamp(80px, 10vh, 120px) clamp(24px, 6vw, 80px) 80px',
          textAlign: 'center',
        }}
      >
        <div style={{ width: '100%', marginBottom: '64px' }}>
          <SectionLabel number="02" label="THE PHILOSOPHY" labelJp="哲学" />
        </div>

        <blockquote style={{ maxWidth: '800px' }}>
          <p
            className="font-display"
            style={{
              fontStyle: 'italic',
              fontSize: 'clamp(28px, 4.5vw, 56px)',
              color: 'var(--sumi)',
              lineHeight: 1.3,
            }}
          >
            Tradition is not the worship of ashes,<br />
            but the preservation of fire.<br />
            
          </p>
        </blockquote>

        <p
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
        </p>

        <div style={{ marginTop: '48px' }}>
          <Button>VISIT THE WORKSHOP →</Button>
        </div>

        <div style={{ marginTop: '48px' }}>
          <PanKun size={72} color="var(--ai)" variant="sitting" animate={false} />
        </div>
      </div>
    </section>
  )
}
