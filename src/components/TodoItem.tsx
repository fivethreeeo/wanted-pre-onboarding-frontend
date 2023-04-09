import { useState } from 'react'
import { TodoType } from '../types/todo'
import { Item, Label, Text, InputText, InputCheckbox, ButtonWrap } from './TodoItem.style'
import TodoButton from './TodoButton'

interface TodoItemProps {
  item: TodoType
  handleDelete: (id: number) => void
  handleUpdate: (id: number, text: string, isCompleted: boolean) => void
}

const TodoItem = ({ item, handleDelete, handleUpdate }: TodoItemProps) => {
  const { id, isCompleted, todo } = item

  const [isModifyMode, setIsModifyMode] = useState(false)
  const [isChecked, setIsChecked] = useState(isCompleted)
  const [modifiedInput, setModifiedInput] = useState(todo)

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target
    setIsChecked(checked)
    if (isModifyMode) {
      handleUpdate(id, todo, checked)
    } else {
      handleUpdate(id, modifiedInput, checked)
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setModifiedInput(event.target.value)

  const handleModifySumbitClick = () => {
    setIsModifyMode(false)
    handleUpdate(id, modifiedInput, isChecked)
  }

  const handleCancelClick = () => {
    setIsModifyMode(false)
    setModifiedInput(todo)
  }

  const handleModifyClick = () => setIsModifyMode(true)
  const handleDeleteClick = () => handleDelete(id)

  return isModifyMode ? (
    <Item>
      <InputCheckbox type='checkbox' checked={isChecked} onChange={handleCheckboxChange} />
      <InputText
        type='text'
        data-testid='modify-input'
        value={modifiedInput}
        onChange={handleInputChange}
      />
      <ButtonWrap>
        <TodoButton title='제출' handleClick={handleModifySumbitClick} />
        <TodoButton title='취소' handleClick={handleCancelClick} />
      </ButtonWrap>
    </Item>
  ) : (
    <Item>
      <Label>
        <InputCheckbox type='checkbox' checked={isChecked} onChange={handleCheckboxChange} />
        <Text>{todo}</Text>
      </Label>
      <ButtonWrap>
        <TodoButton title='수정' handleClick={handleModifyClick} />
        <TodoButton title='삭제' handleClick={handleDeleteClick} />
      </ButtonWrap>
    </Item>
  )
}

export default TodoItem
