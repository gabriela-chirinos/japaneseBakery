import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DotIndicator from '../../src/components/layout/DotIndicator.jsx'

test('renders 4 dots', () => {
  render(<DotIndicator total={4} current={0} onDotClick={() => {}} />)
  const buttons = screen.getAllByRole('button')
  expect(buttons).toHaveLength(4)
})

test('active dot has aria-current="true"', () => {
  render(<DotIndicator total={4} current={2} onDotClick={() => {}} />)
  const buttons = screen.getAllByRole('button')
  expect(buttons[2]).toHaveAttribute('aria-current', 'true')
})

test('clicking a dot calls onDotClick with its index', async () => {
  const user = userEvent.setup()
  const onDotClick = vi.fn()
  render(<DotIndicator total={4} current={0} onDotClick={onDotClick} />)
  const buttons = screen.getAllByRole('button')
  await user.click(buttons[2])
  expect(onDotClick).toHaveBeenCalledWith(2)
})
