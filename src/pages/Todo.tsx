import { TodoContainer, Heading, LogOutButton } from '../components/Todo.style'
import TodoForm from '../components/TodoForm'

const Todo = () => {
  const todoSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <>
      <TodoContainer>
        <Heading>투두리스트</Heading>
        <TodoForm handleSubmit={todoSubmitHandler} />
      </TodoContainer>
      <LogOutButton>로그아웃</LogOutButton>
    </>
  )
}

export default Todo
