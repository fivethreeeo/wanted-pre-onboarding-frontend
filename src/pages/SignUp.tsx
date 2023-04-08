import { Link } from 'react-router-dom'
import SignForm from '../components/SignForm'

const SignUp = () => {
  const signUpSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    // TODO:
    // 회원가입 API 호출
    // 회원가입 성공 시 /signin 으로 이동
    // 회원가입 실패 시 에러 메시지 출력 (alert)
  }

  return (
    <>
      <SignForm title='회원가입' handleSubmit={signUpSubmitHandler} />
      <Link to='/signin'>로그인 하러가기</Link>
    </>
  )
}

export default SignUp
