import { Todo } from '../../App'

interface ITodoProps {
  todo: Todo
  handleChecked: (id: string) => void
  removeTodo: (id: string) => void
}

const TodoItem = ({ todo, handleChecked, removeTodo }: ITodoProps) => {
  return (
    <div data-testid={`todo-${todo.id}`} className="p-5">
      <label
        htmlFor={todo.id}
        className="relative flex cursor-pointer items-center space-x-3 checked:line-through"
      >
        <input
          id={todo.id}
          type={'checkbox'}
          checked={todo.checked}
          onChange={() => handleChecked(todo.id)}
          className="h-5 w-5 appearance-none rounded-full text-opacity-0 outline outline-1 outline-gray-300 checked:text-opacity-100"
        />
        <span
          className={`font-medium text-green-500 ${
            todo.checked ? 'text-opacity-100' : 'text-opacity-0'
          } absolute left-[-8px] top-[-1px]`}
        >
          &#10003;
        </span>
        <p
          className={`grow ${todo.checked ? 'line-through opacity-40' : null}`}
        >
          {todo.title}
        </p>
        <button
          className="text-right hover:text-red-500"
          onClick={() => removeTodo(todo.id)}
        >
          X
        </button>
      </label>
    </div>
  )
}
export default TodoItem
