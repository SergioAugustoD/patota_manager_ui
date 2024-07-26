// src/routes.tsx
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import ErrorPage from './error-page'
import Signup from './pages/Signup/Signup'
import ProtectedRoute from './components/ProtectedRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: '/home',
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: '/signup',
    element: <Signup />,
    errorElement: <ErrorPage />
  }
])
