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
  console.log(id, isCompleted, todo)

  const [isModifyMode, setIsModifyMode] = useState(false)
  const [isChecked, setIsChecked] = useState(isCompleted)
  const [modifiedInput, setModifiedInput] = useState(todo)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setModifiedInput(value)
  }

  const handleCancelClick = () => {
    setIsModifyMode(false)
    setModifiedInput(todo)
  }

  return isModifyMode ? (
    <Item>
      <InputCheckbox
        type='checkbox'
        checked={isChecked}
        onChange={() => {
          const nextIsChecked = !isChecked
          setIsChecked(nextIsChecked)
          handleUpdate(id, modifiedInput, nextIsChecked)
        }}
      />
      <InputText type='text' value={modifiedInput} onChange={handleInputChange} />
      <ButtonWrap>
        <TodoButton
          title='제출'
          handleClick={() => {
            setIsModifyMode(false)
            handleUpdate(id, modifiedInput, isChecked)
          }}
        />
        <TodoButton title='취소' handleClick={handleCancelClick} />
      </ButtonWrap>
    </Item>
  ) : (
    <Item>
      <Label>
        <InputCheckbox
          type='checkbox'
          checked={isChecked}
          onChange={() => {
            const nextIsChecked = !isChecked
            setIsChecked(nextIsChecked)
            handleUpdate(id, modifiedInput, nextIsChecked)
          }}
        />
        <Text>{todo}</Text>
      </Label>
      <ButtonWrap>
        <TodoButton title='수정' handleClick={() => setIsModifyMode(true)} />
        <TodoButton title='삭제' handleClick={() => handleDelete(id)} />
      </ButtonWrap>
    </Item>
  )
}

export default TodoItem
