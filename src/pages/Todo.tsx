import { useState, useEffect } from 'react'
import { TodoContainer, Heading, List, LogOutButton } from '../components/Todo.style'
import { TodoType } from '../types/todo'
import TodoForm from '../components/TodoForm'
import TodoItem from '../components/TodoItem'
import { getTodos, addTodo, deleteTodo, updateTodo } from '../api/todo'

const Todo = () => {
  const [todos, setTodos] = useState<TodoType[]>([])

  const todoSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const text = formData.get('text') as string
    addTodo(text).then(res => {
      setTodos([...todos, res])
    })
  }

  const todoDeleteHandler = (id: number) => {
    deleteTodo(id).then(res => {
      if (res === 'success') {
        setTodos(todos.filter(item => item.id !== id))
      }
    })
  }

  const todoUpdateHandler = (id: number, text: string, isCompleted: boolean) => {
    updateTodo(id, text, isCompleted).then(() => {
      setTodos(
        todos.map(item =>
          item.id !== id
            ? item
            : {
                ...item,
                todo: text,
                isCompleted: !isCompleted,
              }
        )
      )
    })
  }

  useEffect(() => {
    getTodos().then(todos => setTodos(todos))
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
