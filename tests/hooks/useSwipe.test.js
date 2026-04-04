import { renderHook } from '@testing-library/react'
import useSwipe from '../../src/hooks/useSwipe.js'

test('returns a ref object', () => {
  const { result } = renderHook(() =>
    useSwipe({ onSwipeLeft: () => {}, onSwipeRight: () => {} })
  )
  expect(result.current.ref).toBeDefined()
  expect(typeof result.current.ref).toBe('object')
})

test('does not throw when called with no callbacks', () => {
  expect(() => {
    renderHook(() => useSwipe({}))
  }).not.toThrow()
})

test('does not throw when threshold is customized', () => {
  expect(() => {
    renderHook(() => useSwipe({ onSwipeLeft: () => {}, onSwipeRight: () => {}, threshold: 100 }))
  }).not.toThrow()
})
