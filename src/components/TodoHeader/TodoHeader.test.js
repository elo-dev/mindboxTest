import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import TodoHeader from './TodoHeader'

describe('Header', () => {
  it('Есть ли инпут', () => {
    render(<TodoHeader />)

    expect(screen.getByPlaceholderText('You task')).toBeInTheDocument()
  })

  it('Правильное значение инпута', () => {
    render(<TodoHeader value="Привет мир !" />)

    const input = screen.getByPlaceholderText('You task')

    fireEvent.change(input, { target: { value: 'Привет мир !' } })

    expect(input.value).toBe('Привет мир !')
  })
})
