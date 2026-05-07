import { describe, expect, it } from 'vitest'

import App from '@/App'
import { render, screen } from '@/test/render'

describe('App', () => {
  it('renders the hello starter screen', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /hello/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /get started/i }),
    ).toBeInTheDocument()
  })
})
