// src/components/panels/FooterPanel.jsx
import SectionLabel from '../ui/SectionLabel.jsx'
import PanKun       from '../mascot/PanKun.jsx'

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

export default function FooterPanel() {
  return (
    <footer
      id="contact"
      aria-label="Logistics and contact"
      style={{ width: '100%' }}
    >
      {/* TOP HALF — Cream logistics */}
      <div
        style={{
          backgroundColor: 'var(--kinu)',
          padding: 'clamp(48px, 6vh, 80px) clamp(24px, 6vw, 80px) 60px',
        }}
      >
        <SectionLabel number="03" label="Find Us" labelJp="連絡" />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
            marginTop: '40px',
          }}
        >
          <div>
            <p style={labelStyle}>HEADQUARTERS</p>
            <p style={addressStyle}>
              1-24-9 TOCHIGI-KEN<br />
              NIIGATA-SHI, JAPAN<br />
              <br />
              +81 (0) 25 223 4401
            </p>
          </div>

          <div>
            <p style={labelStyle}>DIGITAL FOOTPRINT</p>
            <p style={addressStyle}>
              @PAN_SEIBANJO<br />
              HELLO@PAN-BAKERY.JP
            </p>
            <p style={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 500,
              fontSize: '12px',
              color: 'rgba(26,23,20,0.5)',
              marginTop: '16px',
              letterSpacing: '2px',
            }}>
              [ EST. 1967 ]
            </p>
          </div>

          <div>
            <p style={labelStyle}>OPEN / 開店</p>
            <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '28px', color: 'var(--sumi)', letterSpacing: '2px' }}>
              07:00&nbsp;&nbsp;18:00
            </p>
            <p style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 500, fontSize: '9px', letterSpacing: '2px', color: 'rgba(26,23,20,0.5)', marginTop: '6px', textTransform: 'uppercase' }}>
              DAILY EXCEPT MONDAY / 月曜定休
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM HALF — Indigo footer */}
      <div
        style={{
          backgroundColor: 'var(--ai)',
          padding: 'clamp(48px, 6vh, 80px) clamp(24px, 6vw, 80px) 60px',
        }}
      >
        <div
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
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '48px',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '11px', color: 'rgba(244,240,232,0.4)', letterSpacing: '1px', textTransform: 'uppercase' }}>
            © 2026 PAN 製パン所 INC. ALL RIGHTS RESERVED. MADE IN NIIGATA.
          </p>
          <PanKun size={32} color="rgba(244,240,232,0.5)" variant="default" animate={false} />
        </div>
      </div>
    </footer>
  )
}
