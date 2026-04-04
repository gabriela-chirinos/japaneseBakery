import { useState, useCallback } from 'react'
import PanelContainer from './components/layout/PanelContainer.jsx'
import PersistentUI   from './components/layout/PersistentUI.jsx'
import useIsMobile    from './hooks/useIsMobile.js'

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
