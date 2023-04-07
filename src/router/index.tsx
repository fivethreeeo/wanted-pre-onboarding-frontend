import { Navigate, createBrowserRouter } from 'react-router-dom'

import App from '../App'
import NotFound from '../pages/NotFound'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import TodoList from '../pages/TodoList'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Navigate to='/signin' /> },
      { path: '/signin', element: <SignIn /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/todo', element: <TodoList /> },
    ],
  },
])

export default router
