import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { GeneralLayoutContainer } from './GeneralLayout.style'
import { getAccessTokenFromLocalStorage } from '../utils/accessTokenHandler'

interface GeneralLayoutProps {
  children: React.ReactNode
}

const GeneralLayout: React.FC<GeneralLayoutProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  console.log(`layout ${pathname}`)
  // TODO: 주석 제거, 토큰을 context로 관리할지 말지 정하기

  useEffect(() => {
    if (getAccessTokenFromLocalStorage()) {
      if (pathname === '/signin' || pathname === '/signup') {
        navigate('/todo')
      }
    } else {
      if (pathname === '/todo') {
        navigate('/signin')
      }
    }
    setIsLoading(false)
  }, [pathname, navigate])

  return <GeneralLayoutContainer>{isLoading ? '로딩중' : children}</GeneralLayoutContainer>
}

export default GeneralLayout
