import styled from 'styled-components'

const Input = styled.input`
  margin-bottom: 8px;
  padding: 0 8px;
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px solid #152766;
  ::placeholder {
    font-size: 1.4rem;
  }
`

const Button = styled.button`
  margin-top: 16px;
  width: 100%;
  height: 40px;
  color: #fff;
  font-size: 1.4rem;
  background: #152766;
  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export { Input, Button }
