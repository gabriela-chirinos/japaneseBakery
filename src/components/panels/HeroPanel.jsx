// src/components/panels/HeroPanel.jsx
import PanKun         from '../mascot/PanKun.jsx'
import CopperCrescent from '../mascot/CopperCrescent.jsx'
import { useScrollY } from '../../hooks/useScrollY.js'

export default function HeroPanel() {
  const scrollY      = useScrollY()
  const bgOffset     = scrollY * 0.28
  const crOffset     = -scrollY * 0.12
  const pankunOffset = -scrollY * 0.08

  return (
    <section
      id="hero"
      aria-label="Hero — PAN 製パン所"
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: 'var(--ai)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background image — slow parallax layer */}
      <img
        src={`${import.meta.env.BASE_URL}hero-bg.png`}
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '110%',  /* extra height so parallax doesn't reveal edges */
          objectFit: 'cover',
          objectPosition: 'center',
          opacity: 0.12,
          mixBlendMode: 'luminosity',
          pointerEvents: 'none',
          userSelect: 'none',
          transform: `translateY(${bgOffset}px)`,
          willChange: 'transform',
        }}
      />

      {/* Decorative crescents — medium parallax layer */}
      <div style={{
        position: 'absolute', top: '20%', left: '15%',
        transform: `translateY(${crOffset}px)`,
        willChange: 'transform',
      }}>
        <CopperCrescent size={48} style={{ opacity: 0.7 }} animate={true} />
      </div>
      <div style={{
        position: 'absolute', bottom: '25%', right: '18%',
        transform: `translateY(${crOffset}px)`,
        willChange: 'transform',
      }}>
        <CopperCrescent size={32} style={{ opacity: 0.5 }} animate={true} />
      </div>

      {/* PanKun mascots — slow parallax layer */}
      <div style={{
        position: 'absolute', top: '18%', left: '12%',
        transform: `translateY(${pankunOffset}px)`,
        willChange: 'transform',
      }}>
        <PanKun size={64} color="var(--kinu)" variant="default" animate={true} />
      </div>
      <div style={{
        position: 'absolute', bottom: '18%', right: '10%',
        transform: `translateY(${pankunOffset}px)`,
        willChange: 'transform',
      }}>
        <PanKun size={56} color="var(--akagane)" variant="default" animate={true} />
      </div>

      {/* Main wordmark — no parallax, stays anchored */}
      <div style={{ textAlign: 'center', zIndex: 1 }}>
        <h1
          className="font-display"
          style={{
            fontSize: 'clamp(80px, 14vw, 200px)',
            color: 'var(--shio)',
            letterSpacing: '0.15em',
            lineHeight: 1,
          }}
        >
          PAN
        </h1>
        <p
          className="font-kanji"
          style={{
            fontSize: 'clamp(28px, 4vw, 56px)',
            color: 'var(--kinu)',
            opacity: 0.8,
            letterSpacing: '0.3em',
            marginTop: '0.5rem',
            fontWeight: 700,
          }}
        >
          製パン所
        </p>
      </div>
    </section>
  )
}
