import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <Link to='/signin'>로그인페이지로 이동하기</Link>
      <br />
      <br />
      <Link to='/signup'>회원가입페이지로 이동하기</Link>
      <br />
      <br />
      <Link to='/todo'>투두리스트페이지로 이동하기</Link>
    </div>
  )
}

export default NotFound
