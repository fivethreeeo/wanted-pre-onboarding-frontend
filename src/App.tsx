import { Outlet } from 'react-router-dom'
import GeneralLayout from './layout/GeneralLayout'

function App() {
  return (
    <GeneralLayout>
      <Outlet />
    </GeneralLayout>
  )
}

export default App
