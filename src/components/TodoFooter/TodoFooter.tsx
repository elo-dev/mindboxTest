import { FilterStatus, Todo } from '../../App'

interface ITodoFooter {
  filteredTodo: Todo[]
  setFilterStatus: (status: FilterStatus) => void
  filterStatus: string
  removeAll: () => void
}

const TodoFooter = ({
  filteredTodo,
  filterStatus,
  setFilterStatus,
  removeAll,
}: ITodoFooter) => {
  return (
    <div className="flex items-center justify-between p-3 text-gray-500">
      <p>
        {filterStatus === FilterStatus.COMPLETED
          ? filteredTodo.filter((todo) => todo.checked).length
          : filteredTodo.filter((todo) => !todo.checked).length}{' '}
        items left
      </p>
      <div>
        <button
          data-testid="allBtn"
          onClick={() => setFilterStatus(FilterStatus.ALL)}
          className="rounded-sm border border-transparent p-1 hover:text-sky-500 focus:border focus:border-sky-500 focus:text-sky-500"
        >
          All
        </button>
        <button
          data-testid="activeBtn"
          onClick={() => setFilterStatus(FilterStatus.ACTIVE)}
          className="rounded-sm border border-transparent p-1 hover:text-sky-500 focus:border focus:border-sky-500 focus:text-sky-500"
        >
          Active
        </button>
        <button
          data-testid="completedBtn"
          onClick={() => setFilterStatus(FilterStatus.COMPLETED)}
          className="rounded-sm border border-transparent p-1 hover:text-sky-500 focus:border focus:border-sky-500 focus:text-sky-500"
        >
          Completed
        </button>
      </div>
      <button
        data-testid="removeBtn"
        onClick={removeAll}
        className="hover:text-red-500"
      >
        Clear completed
      </button>
    </div>
  )
}
export default TodoFooter
