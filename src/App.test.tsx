import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import App from '@/App'

describe('App', () => {
  it('renders the hello starter screen', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /hello/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /get started/i }),
    ).toBeInTheDocument()
  })
})
