import styled from 'styled-components'

const SignFormContainer = styled.div`
  padding: 24px 24px 48px;
  width: 100%;
  max-width: 320px;
  background: #fff;
  box-shadow: 0px 6px 15px rgba(47, 128, 237, 0.1);
`
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

const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
`

export { SignFormContainer, Input, Button, Heading }
