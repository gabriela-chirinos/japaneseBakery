import { render } from '@testing-library/react'
import RotatingBadge from '../../src/components/ui/RotatingBadge.jsx'

test('renders an SVG with aria-label', () => {
  const { container } = render(<RotatingBadge text="BAKED IN NIIGATA · SEASONAL FLOUR ·" />)
  const svg = container.querySelector('svg')
  expect(svg).toBeInTheDocument()
  expect(svg.getAttribute('role')).toBe('img')
})

test('uses provided text as aria-label', () => {
  const { container } = render(<RotatingBadge text="TEST TEXT ·" />)
  const svg = container.querySelector('svg')
  expect(svg.getAttribute('aria-label')).toBe('TEST TEXT ·')
})
