import React, { useState } from 'react'
import { FaUser, FaUserCircle, FaEnvelope, FaLock } from 'react-icons/fa'
import UserService from '../../services/UserService'
import CustomToast from '../../utils/Toast'
import { useNavigate } from 'react-router-dom'
import { ISignup } from '../../interfaces/ISignup'

function Signup() {
  const [signupInfo, setSignupInfo] = useState<ISignup>({} as ISignup)

  const navigate = useNavigate()

  const handleSignup = async (event: React.FormEvent) => {
    event.preventDefault()

    const resp = await UserService.signup(signupInfo)

    if (resp.success) {
      CustomToast.showToast({
        type: 'success',
        message: resp.message
      })
      navigate('/login')
    } else {
      CustomToast.showToast({
        type: 'error',
        message: resp.message
      })
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setSignupInfo((prevState) => ({ ...prevState, [name]: value }))
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-700 to-purple-700 px-4 sm:px-0">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl max-w-md w-full transform transition-transform hover:scale-105">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Cadastre sua conta
        </h2>
        <form className="space-y-6" onSubmit={handleSignup}>
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="name"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500"
              placeholder="Nome completo"
              value={signupInfo.name}
              onChange={handleChange}
            />
          </div>
          <div className="relative">
            <FaUserCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="username"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500"
              placeholder="Login"
              value={signupInfo.username}
              onChange={handleChange}
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="email"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500"
              placeholder="Email"
              value={signupInfo.email}
              onChange={handleChange}
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              name="password"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500"
              placeholder="Senha"
              value={signupInfo.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-center mt-6">
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transform transition-transform hover:scale-105"
            >
              Cadastrar
            </button>
          </div>
        </form>
        <div className="mt-8 text-center">
          <a href="/" className="text-blue-500 hover:underline">
            Já tem uma conta? Login
          </a>
        </div>
      </div>
    </div>
  )
}

export default Signup
