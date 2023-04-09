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

  useEffect(() => {
    if (getAccessTokenFromLocalStorage()) {
      console.log(`hasToken ${pathname}`)
      ;(pathname === '/' || pathname === '/signin' || pathname === '/signup') && navigate('/todo')
    } else {
      pathname === '/todo' && navigate('/signin')
    }
    setIsLoading(false)
  }, [pathname])

  return (
    <GeneralLayoutContainer>{isLoading ? '로그인 여부 확인 중' : children}</GeneralLayoutContainer>
  )
}

export default GeneralLayout
