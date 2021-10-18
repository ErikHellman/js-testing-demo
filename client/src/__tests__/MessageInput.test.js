import { React } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import MessageInput from '../MessageInput'

test('that submit will call onSend function', async () => {
  const sender = jest.fn((input) => input)
  render(<MessageInput onSend={sender}/>)

  const input = screen.getByRole('textbox')
  fireEvent.change(input, { target: { value: 'Testing message' } })
  expect(input.value).toBe('Testing message')

  const send = screen.getByRole('button')
  fireEvent.click(send)

  expect(sender.mock.calls.length).toBe(1)
  expect(sender.mock.calls[0][0]).toStrictEqual({ message: 'Testing message' })

  expect(input.value).toBe('')
})
