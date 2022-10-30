import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import TodoFooter from './TodoFooter'

const todoMoke = [{ id: 1, title: 'Привет мир !', checked: false }]

describe('Footer', () => {
  it('Есть ли кнопки', async () => {
    render(<TodoFooter filterStatus="all" filteredTodo={todoMoke} />)

    const btnList = await screen.findAllByRole('button')

    expect(btnList).toHaveLength(4)
  })

  it('Удаление задачи', () => {
    const onRemove = jest.fn()
    render(<TodoFooter filteredTodo={todoMoke} removeAll={onRemove} />)

    const button = screen.getByTestId('removeBtn')

    fireEvent.click(button)

    expect(onRemove).toHaveBeenCalledTimes(1)

    const todoElement = screen.queryByTestId('todo-1')
    expect(todoElement).not.toBeInTheDocument()
  })
})
