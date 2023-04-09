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

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const LogOutButton = styled.button`
  width: 80px;
  height: 36px;
  color: #fff;
  background: #5c6999;
`

export { TodoContainer, List, Heading, LogOutButton }
