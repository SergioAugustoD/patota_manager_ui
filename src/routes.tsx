// src/routes.tsx
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import ErrorPage from './error-page'
import Signup from './pages/Signup/Signup'
import ProtectedRoute from './components/ProtectedRoute'
import CreateTeam from './pages/Team/Create/CreateTeam'
import TeamsList from './pages/Team/List/TeamsList'
import TeamDetails from './pages/Team/Detail/TeamDetails'

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
  },
  {
    path: '/create-team',
    element: (
      <ProtectedRoute>
        <CreateTeam />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: '/list-team',
    element: (
      <ProtectedRoute>
        <TeamsList />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: '/team-details',
    element: (
      <ProtectedRoute>
        <TeamDetails />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />
  }
])
