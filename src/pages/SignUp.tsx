import { Link, useNavigate } from 'react-router-dom'
import { signup } from '../api/sign'
import SignForm from '../components/SignForm'

const SignUp = () => {
  const navigate = useNavigate()

  const signUpSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    signup({
      email: formData.get('text') as string,
      password: formData.get('password') as string,
    }).then(res => {
      if (res === 'success') {
        navigate('/signin')
      } else {
        alert('회원가입에 실패했습니다.')
      }
    })
  }

  return (
    <>
      <SignForm title='회원가입' handleSubmit={signUpSubmitHandler} />
      <Link to='/signin'>로그인 하러가기</Link>
    </>
  )
}

export default SignUp
