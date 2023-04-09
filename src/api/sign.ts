import { BASE_URL } from './const'
import { saveAccessTokenToLocalStorage } from '../utils/accessTokenHandler'

type SignResult = 'success' | 'fail'

interface SignRequest {
  email: string
  password: string
}

export const signin = async (args: SignRequest): Promise<SignResult> => {
  const signInRes = await fetch(`${BASE_URL}/auth/signin`, {
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

export const signup = async (args: SignRequest): Promise<SignResult> => {
  const signUpRes = await fetch(`${BASE_URL}/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(args),
  })

  if (signUpRes.ok) {
    return 'success'
  }
  return 'fail'
}
