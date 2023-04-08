import { GeneralLayoutContainer } from './GeneralLayout.style'

interface GeneralLayoutProps {
  children: React.ReactNode
}

const GeneralLayout: React.FC<GeneralLayoutProps> = ({ children }) => {
  // TODO:
  // 로그인 여부 체크
  // 로컬스토리지에 토큰이 있는 상태면
  // ㄴ /signin or /signup => /todo
  // ㄴ /todo => /todo
  // 로컬스토리지에 토큰이 없는 상태면
  // ㄴ /signin => /signin
  // ㄴ /signup => /signup
  // ㄴ /todo => /signin

  return <GeneralLayoutContainer>{children}</GeneralLayoutContainer>
}

export default GeneralLayout
