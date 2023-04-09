import { Input } from './Sign.style'
import { SignInputType } from '../types/sign'
import { TestIdSignInputType } from '../types/testid'

interface SignInputProps {
  type: SignInputType
  placeholder: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const signInputTestId = {
  text: 'email-input',
  password: 'password-input',
} as const

const SignInput = ({ type, placeholder, onChange }: SignInputProps) => {
  const testid: TestIdSignInputType = signInputTestId[type]
  return (
    <Input
      type={type}
      name={type}
      data-testid={testid}
      placeholder={placeholder}
      onChange={onChange}
      maxLength={40}
      required
    />
  )
}

export default SignInput
