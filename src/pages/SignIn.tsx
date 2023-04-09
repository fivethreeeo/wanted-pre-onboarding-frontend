import { Link, useNavigate } from 'react-router-dom'
import SignForm from '../components/SignForm'
import { saveAccessTokenToLocalStorage } from '../utils/accessTokenHandler'

interface SignInRequest {
  email: string
  password: string
}

type SignInResult = 'success' | 'fail'

const signin = async (args: SignInRequest): Promise<SignInResult> => {
  // TODO: api 엔드포인트 변경 필요
  const signInRes = await fetch('https://www.pre-onboarding-selection-task.shop/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(args),
  })

  if (signInRes.ok) {
    const { access_token } = await signInRes.json()
    saveAccessTokenToLocalStorage(access_token)
    return 'success'
  }

  return 'fail'
}

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
