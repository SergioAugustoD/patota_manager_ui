import { useState } from 'react'
import AuthService from '../../services/AuthService'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import CustomToast from '../../utils/Toast'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { ILoginData } from '../../interfaces/ILoginData'
import { ILogin } from '../../interfaces/ILogin'

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState<ILogin>({} as ILogin)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = async () => {
    const resp = await AuthService.sign(credentials)

    if (resp.success && resp.data) {
      const respData: ILoginData = {
        token: resp.data.token,
        user: resp.data.user
      }
      login(respData)

      CustomToast.showToast({
        type: 'success',
        message: resp.message
      })

      navigate('/home')
    }
  }

  const handleSignup = () => {
    window.location.href = '/signup'
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-700 to-purple-700 px-4 sm:px-0">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full transform transition-transform hover:scale-105">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Bem vindo
        </h2>
        <div className="space-y-6">
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-4 text-gray-400 " />
            <input
              type="email"
              className="w-full pl-10 pr-4 py-2 mt-1 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500"
              placeholder="Email"
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-4 text-gray-400 " />
            <input
              type="password"
              className="w-full pl-10 pr-4 py-2 mt-1 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500"
              placeholder="Senha"
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={handleLogin}
              className="w-full py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transform transition-transform hover:scale-105"
            >
              Login
            </button>
          </div>
          <div className="flex items-center justify-center mt-6">
            <button
              type="button"
              onClick={handleSignup}
              className="w-full py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-300 transform transition-transform hover:scale-105"
            >
              Cadastrar
            </button>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a href="#" className="text-blue-500 hover:underline">
            Esqueceu sua senha?
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login
