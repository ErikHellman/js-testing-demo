import { render, screen, fireEvent } from '@testing-library/react'
import { React } from 'react'
import '@testing-library/jest-dom'
import App from '../App'

test('that App has a Chat header', () => {
  render(<App />)
  const chatHeader = screen.getByText(/Chat/)
  expect(chatHeader).toBeInTheDocument()
})

test('that App has a load message button', () => {
  render(<App />)
  const button = screen.getByText('Load messages')
  expect(button).toBeInTheDocument()
  fireEvent.click(button)
})
