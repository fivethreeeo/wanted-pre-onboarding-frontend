import { useState, useEffect } from 'react'
import { TodoContainer, Heading, List, LogOutButton } from '../components/Todo.style'
import { getAccessTokenFromLocalStorage } from '../utils/accessTokenHandler'
import { TodoType } from '../types/todo'
import TodoForm from '../components/TodoForm'
import TodoItem from '../components/TodoItem'

const getTodos = async () => {
  const response = await fetch('https://www.pre-onboarding-selection-task.shop/todos', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getAccessTokenFromLocalStorage()}`,
    },
  })
  const todos = await response.json()
  return todos
}

const addTodo = async (text: string): Promise<TodoType> => {
  const addTodoRes = await fetch('https://www.pre-onboarding-selection-task.shop/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getAccessTokenFromLocalStorage()}`,
    },
    body: JSON.stringify({
      todo: text,
    }),
  })

  return addTodoRes.json()
}
}

const Todo = () => {
  const [todos, setTodos] = useState<TodoType[]>([])

  const todoSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const text = formData.get('text') as string
    addTodo(text).then(res => setTodos([...todos, res]))
  }
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
