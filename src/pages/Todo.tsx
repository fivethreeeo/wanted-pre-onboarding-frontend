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

const deleteTodo = async (id: number) => {
  await fetch(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${getAccessTokenFromLocalStorage()}`,
    },
  })
}

const updateTodo = async (id: number, text: string, isCompleted: boolean) => {
  await fetch(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getAccessTokenFromLocalStorage()}`,
    },
    body: JSON.stringify({
      todo: text,
      isCompleted: isCompleted,
    }),
  })
}

const Todo = () => {
  const [todos, setTodos] = useState<TodoType[]>([])

  const todoSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const text = formData.get('text') as string
    addTodo(text).then(res => setTodos([...todos, res]))
  }

  const todoDeleteHandler = (id: number) => {
    deleteTodo(id).then(() => setTodos(todos.filter(item => item.id !== id)))
  }

  const todoUpdateHandler = (id: number, text: string, isCompleted: boolean) => {
    updateTodo(id, text, isCompleted).then(() =>
      setTodos(
        todos.map(item => {
          if (item.id === id) {
            return {
              ...item,
              todo: text,
              isCompleted: !isCompleted,
            }
          }
          return item
        })
      )
    )
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
          {todos.map(item => (
            <TodoItem
              key={item.id}
              handleDelete={todoDeleteHandler}
              handleUpdate={todoUpdateHandler}
              item={item}
            />
          ))}
        </List>
      </TodoContainer>
      <LogOutButton>로그아웃</LogOutButton>
    </>
  )
}

export default Todo
