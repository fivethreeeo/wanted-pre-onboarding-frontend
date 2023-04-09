import { useState, useEffect } from 'react'
import { TodoContainer, Heading, List, LogOutButton } from '../components/Todo.style'
import { getAccessTokenFromLocalStorage } from '../utils/accessTokenHandler'
import { TodoType } from '../types/todo'
import TodoForm from '../components/TodoForm'
import TodoItem from '../components/TodoItem'

const getTodos = async () => {
  const response = await fetch('https://www.pre-onboarding-selection-task.shop/todos', {
    // TODO: api 엔드포인트 변경 필요
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getAccessTokenFromLocalStorage()}`,
    },
  })
  const todos = await response.json()
  return todos
}

const addTodo = async (text: string) => {
  await fetch('https://www.pre-onboarding-selection-task.shop/todos', {
    // TODO: api 엔드포인트 변경 필요
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getAccessTokenFromLocalStorage()}`,
    },
    body: JSON.stringify({
      todo: text,
    }),
  })
}

const Todo = () => {
  const [todos, setTodos] = useState<TodoType[]>([])

  const todoSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const text = formData.get('text') as string
    addTodo(text).then(() => getTodos().then(res => setTodos(res)))
  }

  useEffect(() => {
    getTodos().then(res => setTodos(res))
  }, [])

  return (
    <>
      <TodoContainer>
        <Heading>투두리스트</Heading>
        <TodoForm handleSubmit={todoSubmitHandler} />
        <List>
          {todos.map(todo => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </List>
      </TodoContainer>
      <LogOutButton>로그아웃</LogOutButton>
    </>
  )
}

export default Todo
