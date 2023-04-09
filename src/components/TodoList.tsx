import { TodoType } from '../types/todo'

interface TodoListProps {
  todos: TodoType[]
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <label>
            <input type='checkbox' name='' id='' />
            <span>{todo.todo}</span>
          </label>
          <button>수정</button>
          <button>삭제</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
