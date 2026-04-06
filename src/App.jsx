import SiteHeader    from './components/layout/SiteHeader.jsx'
import HeroPanel      from './components/panels/HeroPanel.jsx'
import ProductsPanel  from './components/panels/ProductsPanel.jsx'
import PhilosophyPanel from './components/panels/PhilosophyPanel.jsx'
import FooterPanel    from './components/panels/FooterPanel.jsx'

export default function App() {
  return (
    <>
      <a
        href="#main-content"
        style={{
          position: 'absolute',
          left: '-9999px',
          top: 'auto',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
        }}
        onFocus={e => Object.assign(e.target.style, { left: '16px', top: '16px', width: 'auto', height: 'auto' })}
        onBlur={e => Object.assign(e.target.style, { left: '-9999px', top: 'auto', width: '1px', height: '1px' })}
      >
        Skip to main content
      </a>

      <SiteHeader />

      <main id="main-content">
        <HeroPanel />
        <ProductsPanel />
        <PhilosophyPanel />
        <FooterPanel />
      </main>
    </>
  )
}
