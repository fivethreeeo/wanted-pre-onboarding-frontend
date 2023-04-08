export const saveAccessTokenToLocalStorage = (accessToken: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('accessToken', accessToken)
  }
}

export const getAccessTokenFromLocalStorage = (): string => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('accessToken') || ''
  }
  return ''
}
