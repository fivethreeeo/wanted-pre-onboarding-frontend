import { Button } from './Sign.style'
import { SignTitleType } from '../types/sign'
import { TestIdSignButtonType } from '../types/testid'

interface SignButtonProps {
  title: SignTitleType
  disabled: boolean
}

const signButtonTestId = {
  로그인: 'signin-button',
  회원가입: 'signup-button',
} as const

const SignButton = ({ title, disabled }: SignButtonProps) => {
  const testid: TestIdSignButtonType = signButtonTestId[title]

  return (
    <Button type='submit' data-testid={testid} disabled={disabled}>
      {title}하기
    </Button>
  )
}

export default SignButton
