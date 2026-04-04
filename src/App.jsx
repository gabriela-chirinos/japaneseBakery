// src/App.jsx
import { useState, useCallback, useEffect } from 'react'
import PanelContainer from './components/layout/PanelContainer.jsx'
import PersistentUI   from './components/layout/PersistentUI.jsx'

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 1024 : false
  )
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)')
    const handler = (e) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return isMobile
}

export default function App() {
  const [currentPanel, setCurrentPanel] = useState(0)
  const isMobile = useIsMobile()
  const [navigateFn, setNavigateFn] = useState(null)

  const handlePanelChange = useCallback((index) => {
    setCurrentPanel(index)
  }, [])

  const handleRegisterNavigate = useCallback((fn) => {
    setNavigateFn(() => fn)
  }, [])

  const handleNavigate = useCallback((index) => {
    navigateFn?.(index)
  }, [navigateFn])

  return (
    <>
      <PanelContainer
        onPanelChange={handlePanelChange}
        onRegisterNavigate={handleRegisterNavigate}
      />
      <PersistentUI
        currentPanel={currentPanel}
        onNavigate={handleNavigate}
        isMobile={isMobile}
        totalPanels={4}
      />
    </>
  )
}
