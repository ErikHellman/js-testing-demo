import { React } from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ChatMessages from '../ChatMessages'

test('that setting messages will dispaly them', async () => {
  const messages = [{ message: 'First' }, { message: 'Second' }, { message: 'Third' }]
  render(<ChatMessages messages={messages} />)
  const messageItems = screen.getAllByRole('listitem')
  expect(messageItems.length).toBe(3)
})
