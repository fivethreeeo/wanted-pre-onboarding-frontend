import styled from 'styled-components'

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

export { Button }
