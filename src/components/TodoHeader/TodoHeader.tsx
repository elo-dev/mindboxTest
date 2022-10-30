interface ITodoHeader {
  value: string
  setValue: (value: string) => void
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const TodoHeader = ({ value, setValue, handleKeyDown }: ITodoHeader) => {
  return (
    <input
      type="text"
      placeholder="You task"
      className="w-full p-5 focus:outline-none"
      value={value}
      onKeyDown={handleKeyDown}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}
export default TodoHeader
