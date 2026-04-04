// tests/components/PanKun.test.jsx
import { render } from '@testing-library/react'
import PanKun from '../../src/components/mascot/PanKun.jsx'

test('renders an SVG element', () => {
  const { container } = render(<PanKun />)
  expect(container.querySelector('svg')).toBeInTheDocument()
})

test('applies custom size', () => {
  const { container } = render(<PanKun size={100} />)
  const svg = container.querySelector('svg')
  expect(svg.getAttribute('width')).toBe('100')
  expect(svg.getAttribute('height')).toBe('88')
})

test('accepts variant prop without crashing', () => {
  const { container } = render(<PanKun variant="peeking" />)
  expect(container.querySelector('svg')).toBeInTheDocument()
})
