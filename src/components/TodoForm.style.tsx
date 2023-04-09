import styled from 'styled-components'

const TodoContainer = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 480px;
  height: 600px;
  background: #fff;
  box-shadow: 0px 6px 15px rgba(47, 128, 237, 0.1);
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #152766;
  :focus-within {
    border-bottom: 1px solid #152766;
  }
`
const Input = styled.input`
  flex-grow: 1;
  padding: 0 8px;
  height: 40px;
  border: none;
  outline: none;
  ::placeholder {
    font-size: 1.4rem;
  }
`

const Button = styled.button`
  flex-basis: 80px;
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
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
`

export { TodoContainer, Form, Input, Button, Heading }
