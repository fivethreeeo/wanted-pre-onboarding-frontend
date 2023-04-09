import { BASE_URL } from './const'
import { getAccessTokenFromLocalStorage } from '../utils/accessTokenHandler'
import { TodoType } from '../types/todo'

export const getTodos = async (): Promise<TodoType[]> => {
  const getTodosRes = await fetch(`${BASE_URL}/todos`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getAccessTokenFromLocalStorage()}`,
    },
  })

  if (!getTodosRes.ok) {
    throw new Error('getTodos failed')
  }

  const todos = await getTodosRes.json()
  return todos
}

export const addTodo = async (todo: string): Promise<TodoType> => {
  const addTodoRes = await fetch(`${BASE_URL}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getAccessTokenFromLocalStorage()}`,
    },
    body: JSON.stringify({
      todo,
    }),
  })

  if (!addTodoRes.ok) {
    throw new Error('addTodo failed')
  }

  const newTodo = await addTodoRes.json()
  return newTodo
}

export const deleteTodo = async (id: number): Promise<'success'> => {
  const deleteTodoRes = await fetch(`${BASE_URL}/todos/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${getAccessTokenFromLocalStorage()}`,
    },
  })

  if (!deleteTodoRes.ok) {
    throw new Error('deleteTodo failed')
  }

  return 'success'
}

export const updateTodo = async (
  id: number,
  text: string,
  isCompleted: boolean
): Promise<TodoType> => {
  const updateTodoRes = await fetch(`${BASE_URL}/todos/${id}`, {
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

  if (!updateTodoRes.ok) {
    throw new Error('updateTodo failed')
  }

  const updatedTodo = await updateTodoRes.json()
  return updatedTodo
}
