import { useState } from 'react'
import AuthService from '../../services/AuthService'

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleLogin = async () => {
    const resp = AuthService.login({ email, password })

    console.log(resp)
  }

  const handleRegister = () => {
    console.log('Register:', { email, password })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Login
        </h2>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <div className="flex items-center border-b border-gray-300 py-2">
            <svg
              className="w-6 h-6 text-gray-400 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12A4 4 0 008 12m8 0a4 4 0 00-8 0m8 0V8m0 4v4m4-2a2 2 0 00-2-2h-8a2 2 0 00-2 2v4m6-4v2m0 0H8m4 0v4m0-4h2m-2 0h-2"
              />
            </svg>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="mb-8">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <div className="flex items-center border-b border-gray-300 py-2">
            <svg
              className="w-6 h-6 text-gray-400 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m0-6v4m-4-4v4m8-4v4m4-2a2 2 0 00-2-2h-8a2 2 0 00-2 2v4m6-4v2m0 0H8m4 0v4m0-4h2m-2 0h-2"
              />
            </svg>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
          >
            Log In
          </button>
        </div>
        <div className="mt-4 text-center">
          <button
            onClick={handleRegister}
            className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
