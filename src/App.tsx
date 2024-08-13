import { RouterProvider } from 'react-router-dom'
import { AuthContext } from './context/authContext'
import { useAuth } from './hooks/useAuth'
import { router } from './routes'
import React, { useMemo } from 'react'
import { ToastContainer } from 'react-toastify'

const App = () => {
  const { user, setUser } = useAuth()
  const value = useMemo(() => ({ user, setUser }), [setUser])

  return (
    <AuthContext.Provider value={value}>
      {useMemo(
        () => (
          <>
            <ToastContainer
              autoClose={2000}
              position="bottom-right"
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              className="Toastify__toast-container--custom"
              toastClassName="Toastify__toast--custom"
              bodyClassName=""
              progressClassName="Toastify__progress-bar--custom"
            />

            <RouterProvider router={router} />
          </>
        ),
        []
      )}
    </AuthContext.Provider>
  )
}

export default App
