import React, { useState } from 'react'
import { FaUser, FaUserCircle, FaEnvelope, FaLock } from 'react-icons/fa'
import UserService from '../../services/UserService'

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')

  const handleSignup = (event: React.FormEvent) => {
    event.preventDefault()

    UserService.signup({
      name,
      username,
      email,
      password
    })
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-700 to-purple-700">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full transform transition-transform hover:scale-105">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Cadastre sua conta
        </h2>
        <form className="space-y-6" onSubmit={handleSignup}>
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500"
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative">
            <FaUserCircle className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500"
              placeholder="Login"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
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
            Ja tem uma conta? Login
          </a>
        </div>
      </div>
    </div>
  )
}

export default Signup
