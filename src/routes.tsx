import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import ErrorPage from './error-page'
import Signup from './pages/Signup/Signup'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: '/home',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/signup',
    element: <Signup />,
    errorElement: <ErrorPage />
  }
])
