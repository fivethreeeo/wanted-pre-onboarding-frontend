import { Navigate, createBrowserRouter } from 'react-router-dom'

import App from '../App'
import NotFound from '../pages/NotFound'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Todo from '../pages/Todo'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Navigate to='/signin' /> },
        { path: '/signin', element: <SignIn /> },
        { path: '/signup', element: <SignUp /> },
        { path: '/todo', element: <Todo /> },
      ],
    },
  ],
  { basename: process.env.PUBLIC_URL }
)

export default router
