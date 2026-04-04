import { render, screen } from '@testing-library/react'
import ProductCard from '../../src/components/ui/ProductCard.jsx'

const mockProduct = {
  id: 'PRD_NO.082',
  name: 'Shokupan',
  nameJp: '食パン',
  description: 'NIIGATA PEAR YEAST',
  price: 880,
  image: null,
  aspect: 'portrait',
  hasBadge: false,
  placeholderColor: '#2A3558',
}

test('renders product id, name, nameJp, description, and price', () => {
  render(<ProductCard product={mockProduct} />)
  expect(screen.getByText('PRD_NO.082')).toBeInTheDocument()
  expect(screen.getByText(/Shokupan/)).toBeInTheDocument()
  expect(screen.getByText(/食パン/)).toBeInTheDocument()
  expect(screen.getByText(/NIIGATA PEAR YEAST/)).toBeInTheDocument()
  expect(screen.getByText(/¥880/)).toBeInTheDocument()
})

test('renders rotating badge when hasBadge is true', () => {
  const badgeProduct = { ...mockProduct, hasBadge: true }
  const { container } = render(<ProductCard product={badgeProduct} />)
  expect(container.querySelector('svg[role="img"]')).toBeInTheDocument()
})

test('does not render badge when hasBadge is false', () => {
  const { container } = render(<ProductCard product={mockProduct} />)
  expect(container.querySelector('svg[role="img"]')).not.toBeInTheDocument()
})
