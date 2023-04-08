import { Link } from 'react-router-dom'
import SignForm from '../components/SignForm'

const SignIn = () => {
  const SignInSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    // TODO:
    // 로그인 API 호출
    // 성공하면 /todo로 이동
    // 실패하면 alert
  }

  return (
    <>
      <SignForm title='로그인' handleSubmit={SignInSubmitHandler} />
      <Link to='/signup'>회원가입 하러가기</Link>
    </>
  )
}

export default SignIn
