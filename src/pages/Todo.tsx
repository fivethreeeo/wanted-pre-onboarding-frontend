import { useState, useEffect } from 'react'
import { TodoContainer, Heading, LogOutButton } from '../components/Todo.style'
import { getAccessTokenFromLocalStorage } from '../utils/accessTokenHandler'
import { TodoType } from '../types/todo'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'

const getTodos = async () => {
  const response = await fetch('http://localhost:8000/todos', {
    // TODO: api 엔드포인트 변경 필요
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getAccessTokenFromLocalStorage()}`,
    },
  })
  const todos = await response.json()
  return todos
}

const Todo = () => {
  const [todos, setTodos] = useState<TodoType[]>([])

  const todoSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  useEffect(() => {
    getTodos().then(res => setTodos(res))
  }, [])

  return (
    <>
      <TodoContainer>
        <Heading>투두리스트</Heading>
        <TodoForm handleSubmit={todoSubmitHandler} />
        <TodoList todos={todos} />
      </TodoContainer>
      <LogOutButton>로그아웃</LogOutButton>
    </>
  )
}

export default Todo
