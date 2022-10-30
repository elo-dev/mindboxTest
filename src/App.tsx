import { useEffect, useState } from 'react'

import TodoFooter from './components/TodoFooter/TodoFooter'
import TodoHeader from './components/TodoHeader/TodoHeader'

import Todo from './components/TodoItem/TodoItem'

export interface Todo {
  id: string
  title: string
  checked: boolean
}

export enum FilterStatus {
  ALL = 'all',
  ACTIVE = 'active',
  COMPLETED = 'completed',
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [filteredTodo, setFilteredTodo] = useState<Todo[]>(todos)
  const [value, setValue] = useState('')
  const [filterStatus, setFilterStatus] = useState<FilterStatus>(
    FilterStatus.ALL
  )

  useEffect(() => {
    setFilteredTodo(todos)
  }, [todos])

  const createTodo = () => {
    if (value.length) {
      setTodos([
        { id: Math.random().toString(36), title: value, checked: false },
        ...todos,
      ])
      setValue('')
    }
  }

  const handleChecked = (id: string): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo

        return {
          ...todo,
          checked: !todo.checked,
        }
      })
    )
  }

  const removeTodo = (id: string): void => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') createTodo()
  }

  const filterTodo = () => {
    if (filterStatus === 'all') {
      setFilteredTodo(todos)
    } else if (filterStatus === 'active') {
      setFilteredTodo(todos.filter((todo) => !todo.checked))
    } else if (filterStatus === 'completed') {
      setFilteredTodo(todos.filter((todo) => todo.checked))
    }
  }

  useEffect(() => {
    filterTodo()
  }, [filterStatus])

  const removeAll = () => {
    setTodos(todos.filter((todo) => !todo.checked))
  }

  return (
    <div className="mx-auto max-w-3xl p-10">
      <h1 className="mb-5 text-center text-6xl font-extralight text-sky-500">
        todos
      </h1>
      <div className="grid grid-cols-1 divide-y-2 shadow-lg">
        <TodoHeader
          setValue={setValue}
          value={value}
          handleKeyDown={handleKeyDown}
        />
        {filteredTodo.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            handleChecked={handleChecked}
            removeTodo={removeTodo}
          />
        ))}
        <TodoFooter
          filterStatus={filterStatus}
          filteredTodo={filteredTodo}
          setFilterStatus={setFilterStatus}
          removeAll={removeAll}
        />
      </div>
    </div>
  )
}

export default App
