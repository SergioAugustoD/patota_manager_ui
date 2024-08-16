import React, {
  useState,
  useRef,
  useEffect,
  MouseEvent,
  useCallback
} from 'react'
import {
  FaCalendarAlt,
  FaUsers,
  FaPlusCircle,
  FaUser,
  FaBars
} from 'react-icons/fa'
import { IUser } from '../../interfaces/IUser'
import Carousel from '../../components/Caroussel'
import { getUserFromLocalStorage } from '../../utils/getUserFromLocalStorage'
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const Home: React.FC = () => {
  const [user, setUser] = useState<IUser>({} as IUser)
  const { logout } = useAuth()
  const navigate = useNavigate()

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleClickOutside = (event: MouseEvent<Document>) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false)
    }
  }

  const handleLogout = useCallback(() => {
    logout()
    navigate('/')
  }, [logout])

  const handleOpenCreateTeam = () => {
    navigate('/create-team')
  }

  const handleOpenListTeam = () => {
    navigate('/list-team')
  }

  useEffect(() => {
    document.addEventListener(
      'mousedown',
      handleClickOutside as unknown as EventListener
    )
    const userJson = getUserFromLocalStorage()

    if (userJson) {
      try {
        const userData: IUser = userJson
        setUser(userData)
      } catch (error) {
        console.error('Erro ao analisar JSON do usuário:', error)
      }
    }
    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside as unknown as EventListener
      )
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-green-400 to-blue-500 p-8">
      <header className="flex justify-between items-center w-full p-2">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Patota Manager
        </h1>
        <div className="relative" ref={dropdownRef}>
          <div
            className="flex sm:hidden bg-white p-3 rounded-full shadow-lg items-center space-x-4 cursor-pointer"
            onClick={toggleDropdown}
          >
            <FaBars className="text-2xl text-gray-700" />
          </div>
          <div
            className="hidden sm:flex bg-white p-3 rounded-full shadow-lg items-center space-x-4 cursor-pointer"
            onClick={toggleDropdown}
          >
            <FaUser className="text-2xl text-gray-700" />
            <div className="hidden md:block">
              <p className="text-gray-800 font-semibold">{user.name}</p>
              <p className="text-gray-600 text-sm">{user.email}</p>
            </div>
          </div>
          {isDropdownOpen && (
            <div className="absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-10 flex flex-col justify-center items-center">
              <div className="block sm:hidden p-4 text-center">
                <p className="text-gray-800 font-semibold">{user.name}</p>
                <p className="text-gray-600 text-sm mb-2">{user.email}</p>
              </div>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-center"
              >
                Informações
              </a>
              <button
                onClick={handleLogout}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-center w-full"
              >
                Deslogar
              </button>
            </div>
          )}
        </div>
      </header>

      <div className="flex-grow flex items-center justify-center w-full">
        <div className="w-full max-w-5xl mx-auto">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform hover:scale-105">
              <FaCalendarAlt className="text-3xl text-green-500 mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Próximas Partidas</h2>
              <p className="text-gray-600">
                Veja as próximas partidas e seus horários.
              </p>
              <button className="mt-4 py-2 px-4 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-500 transform transition-transform hover:scale-105">
                Ver Partidas
              </button>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform hover:scale-105">
              <FaUsers className="text-3xl text-blue-500 mb-4" />
              <h2 className="text-2xl font-semibold mb-2">
                Patotas Registradas
              </h2>
              <p className="text-gray-600">
                Confira todas as patotas registradas.
              </p>
              <button
                onClick={handleOpenListTeam}
                className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500 transform transition-transform hover:scale-105"
              >
                Ver Patotas
              </button>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform hover:scale-105">
              <FaPlusCircle className="text-3xl text-purple-500 mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Criar Nova Patota</h2>
              <p className="text-gray-600">
                Crie uma nova patota e divirta-se.
              </p>
              <button
                onClick={handleOpenCreateTeam}
                className="mt-4 py-2 px-4 bg-purple-500 text-white rounded-full hover:bg-purple-600 focus:outline-none focus:ring-4 focus:ring-purple-500 transform transition-transform hover:scale-105"
              >
                Criar Patota
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
