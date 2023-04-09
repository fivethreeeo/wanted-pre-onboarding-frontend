import { Form, Input, Button } from './TodoForm.style'

interface TodoFormProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

const TodoForm = ({ handleSubmit }: TodoFormProps) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type='text'
        name='text'
        data-testid='new-todo-input'
        placeholder='할 일을 입력하세요'
        required
      />
      <Button type='submit' data-testid='new-todo-add-button'>
        추가하기
      </Button>
    </Form>
  )
}

export default TodoForm
