import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import instance from '../server/api'
import { getTokenFromLocalStorage } from '../utils/getTokenFromLocalStorage'
import CustomToast from '../utils/Toast'

interface ProtectedRouteProps {
  children: React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { logout } = useAuth()
  const [authenticated, setAuthenticated] = useState<boolean | null>(null) // Alterar para boolean ou null

  useEffect(() => {
    const checkAuthentication = async () => {
      const token = getTokenFromLocalStorage()

      if (!token) {
        setAuthenticated(false)
        logout()
        return
      }

      try {
        const response = await instance.get('/auth/verify-token', {
          headers: { Authorization: `Bearer ${token}` }
        })

        if (response.data.success) {
          setAuthenticated(true)
        } else {
          setAuthenticated(false)
          logout()
        }
      } catch (error) {
        CustomToast.showToast({
          type: 'error',
          message: 'Autenticação inválida, logue-se novamente.'
        })
        setAuthenticated(false)
        logout()
      }
    }

    checkAuthentication()
  }, [logout])

  if (authenticated === null) {
    return <div>Carregando...</div>
  }

  if (!authenticated) {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}

export default ProtectedRoute
