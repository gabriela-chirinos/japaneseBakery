import { render, screen } from '@testing-library/react'
import SectionLabel from '../../src/components/ui/SectionLabel.jsx'

test('renders number, english label, and japanese text', () => {
  render(<SectionLabel number="01" label="SELECT BAKES" labelJp="セレクト" />)
  expect(screen.getByText(/01/)).toBeInTheDocument()
  expect(screen.getByText(/SELECT BAKES/)).toBeInTheDocument()
  expect(screen.getByText(/セレクト/)).toBeInTheDocument()
})

test('renders without japanese text when not provided', () => {
  render(<SectionLabel number="02" label="THE PHILOSOPHY" />)
  expect(screen.getByText(/02/)).toBeInTheDocument()
  expect(screen.getByText(/THE PHILOSOPHY/)).toBeInTheDocument()
})
