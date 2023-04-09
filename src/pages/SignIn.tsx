import { Link, useNavigate } from 'react-router-dom'
import { signin } from '../api/sign'
import SignForm from '../components/SignForm'

const SignIn = () => {
  const navigate = useNavigate()

  const signInSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    signin({
      email: formData.get('text') as string,
      password: formData.get('password') as string,
    }).then(res => {
      if (res === 'success') {
        navigate('/todo')
      } else {
        alert('로그인에 실패했습니다.')
      }
    })
  }

  return (
    <>
      <SignForm title='로그인' handleSubmit={signInSubmitHandler} />
      <Link to='/signup'>회원가입 하러가기</Link>
    </>
  )
}

export default SignIn
