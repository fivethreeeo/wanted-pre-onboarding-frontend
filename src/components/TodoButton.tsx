import { Button } from './TodoButton.style'
import { TodoButtonTitleType } from '../types/todo'
import { TestIdTodoButtonType } from '../types/testid'

interface TodoButtonProps {
  title: TodoButtonTitleType
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const todoButtonTestId = {
  수정: 'modify-button',
  삭제: 'delete-button',
  제출: 'submit-button',
  취소: 'cancel-button',
} as const

const TodoButton = ({ title, handleClick }: TodoButtonProps) => {
  const testid: TestIdTodoButtonType = todoButtonTestId[title]

  return (
    <Button type='button' data-testid={testid} onClick={handleClick}>
      {title}
    </Button>
  )
}

export default TodoButton
