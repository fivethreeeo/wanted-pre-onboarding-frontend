import styled from 'styled-components'

const TodoContainer = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: 480px;
  height: 640px;
  background: #fff;
  box-shadow: 0px 6px 15px rgba(47, 128, 237, 0.1);
`

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
`

const List = styled.ul`
  height: 420px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #5c6999;
  }
`

const LogOutButton = styled.button`
  width: 80px;
  height: 36px;
  color: #fff;
  background: #5c6999;
`

export { TodoContainer, List, Heading, LogOutButton }
