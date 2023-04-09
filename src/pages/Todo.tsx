import { TodoContainer, Heading, LogOutButton } from '../components/Todo.style'

const Todo = () => {
  return (
    <>
      <TodoContainer>
        <Heading>투두리스트</Heading>
      </TodoContainer>
      <LogOutButton>로그아웃</LogOutButton>
    </>
  )
}

export default Todo
