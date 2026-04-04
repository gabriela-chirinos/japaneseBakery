import { renderHook, act } from '@testing-library/react'
import useHorizontalScroll from '../../src/hooks/useHorizontalScroll.js'

// Mock gsap since it does DOM manipulation we don't need in unit tests
vi.mock('gsap', () => ({
  default: { registerPlugin: vi.fn(), set: vi.fn(), to: vi.fn(), fromTo: vi.fn() },
}))

test('initializes with panelIndex 0', () => {
  const { result } = renderHook(() =>
    useHorizontalScroll({ totalPanels: 4, onPanelChange: vi.fn() })
  )
  expect(result.current.panelIndex).toBe(0)
})

test('goToPanel clamps to 0 on negative input', () => {
  const { result } = renderHook(() =>
    useHorizontalScroll({ totalPanels: 4, onPanelChange: vi.fn() })
  )
  act(() => result.current.goToPanel(-1))
  expect(result.current.panelIndex).toBe(0)
})

test('goToPanel clamps to totalPanels-1 on overflow', () => {
  const { result } = renderHook(() =>
    useHorizontalScroll({ totalPanels: 4, onPanelChange: vi.fn() })
  )
  act(() => result.current.goToPanel(99))
  expect(result.current.panelIndex).toBe(3)
})

test('goToPanel updates to valid index', () => {
  const { result } = renderHook(() =>
    useHorizontalScroll({ totalPanels: 4, onPanelChange: vi.fn() })
  )
  act(() => result.current.goToPanel(2))
  expect(result.current.panelIndex).toBe(2)
})
