import { Link, useNavigate } from 'react-router-dom'
import SignForm from '../components/SignForm'

interface SignUpRequest {
  email: string
  password: string
}

type SignUpResult = 'success' | 'fail'

const signup = async (args: SignUpRequest): Promise<SignUpResult> => {
  // TODO: api 엔드포인트 변경 필요
  const signUpRes = await fetch('http://localhost:8000/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(args),
  })

  return signUpRes.ok ? 'success' : 'fail'
}

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
