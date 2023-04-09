import styled from 'styled-components'

const Item = styled.li`
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  :hover {
    background: #f7f7f7;
  }
`

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
`

const Text = styled.span`
  font-size: 16px;
`

const InputText = styled.input`
  margin: 0 16px;
  padding: 2px 8px;
  flex-grow: 1;
  font-size: 16px;
`

const InputCheckbox = styled.input`
  width: 16px;
  height: 16px;
`

const ButtonWrap = styled.div`
  display: flex;
  gap: 4px;
`

export { Item, Label, Text, InputText, InputCheckbox, ButtonWrap }
