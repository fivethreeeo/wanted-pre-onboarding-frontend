import { useState } from 'react'
import { SignFormContainer, Heading } from './SignForm.style'
import { SignTitleType, SignInputType } from '../types/sign'
import SignButton from './SignButton'
import SignInput from './SignInput'

interface SignFormProps {
  title: SignTitleType
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

const SignForm = ({ title, handleSubmit }: SignFormProps) => {
  const [isValid, setIsValid] = useState({
    text: false,
    password: false,
  })

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { type, value } = target
    console.log(type, value)
    // TODO: Input (text, password) 유효성 검사 결과에 따라
    // setIsValid 상태 변경 & SignButton disabled 상태 변경
  }

  return (
    <SignFormContainer>
      <Heading>{title}</Heading>
      <form onSubmit={handleSubmit}>
        <SignInput type='text' placeholder='이메일을 입력하세요' onChange={handleChange} />
        <SignInput type='password' placeholder='비밀번호를 입력하세요' onChange={handleChange} />
        <SignButton title={title} disabled={!(isValid.text && isValid.password)} />
      </form>
    </SignFormContainer>
  )
}

export default SignForm
