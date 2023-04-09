import { useState } from 'react'
import { TodoType } from '../types/todo'
import { Item, Label, Text, InputText, InputCheckbox, ButtonWrap } from './TodoItem.style'
import TodoButton from './TodoButton'

const TodoItem = ({ id, isCompleted, todo, userId }: TodoType) => {
  console.log(id, isCompleted, todo, userId)
  const [isModifyMode, setIsModifyMode] = useState(false)
  const [isChecked, setIsChecked] = useState(isCompleted)
  const [modifiedInput, setModifiedInput] = useState(todo)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setModifiedInput(value)
  }

  return isModifyMode ? (
    <Item>
      <InputText type='text' value={modifiedInput} onChange={handleInputChange} />
      <ButtonWrap>
        <TodoButton title='제출' handleClick={() => console.log('클릭 제출')} />
        <TodoButton title='취소' handleClick={() => setIsModifyMode(false)} />
      </ButtonWrap>
    </Item>
  ) : (
    <Item>
      <Label>
        <InputCheckbox
          type='checkbox'
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <Text>{todo}</Text>
      </Label>
      <ButtonWrap>
        <TodoButton title='수정' handleClick={() => setIsModifyMode(true)} />
        <TodoButton title='삭제' handleClick={() => console.log('클릭 삭제')} />
      </ButtonWrap>
    </Item>
  )
}

export default TodoItem
