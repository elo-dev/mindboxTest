import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import TodoItem from './TodoItem'

describe('TodoItem', () => {
  test('Рендер задачи', () => {
    const todoMoke = { id: '1', title: 'Привет мир', checked: false }
    render(<TodoItem todo={todoMoke} />)

    const todoElement = screen.getByTestId('todo-1')

    expect(todoElement).toBeInTheDocument()
    expect(todoElement).toHaveTextContent('Привет мир')
  })

  test('Пустая задача', () => {
    const todoMoke = {}
    render(<TodoItem todo={todoMoke} />)

    const todoElement = screen.queryByTestId('todo-1')

    expect(todoElement).not.toBeInTheDocument()
    expect(todoElement).toBeNull()
  })
})
