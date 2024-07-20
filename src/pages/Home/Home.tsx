import React from 'react'
import { FaCalendarAlt, FaPlusCircle, FaUsers } from 'react-icons/fa'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-8">
      <h1 className="text-4xl font-bold text-white mb-8">Patota Manager</h1>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-2xl shadow-2xl hover:shadow-3xl transform transition-transform hover:scale-105">
          <FaCalendarAlt className="text-3xl text-green-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Próximas Partidas</h2>
          <p className="text-gray-600">
            Veja as próximas partidas e seus horários.
          </p>
          <button className="mt-4 py-2 px-4 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-500 transform transition-transform hover:scale-105">
            Ver Partidas
          </button>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-2xl hover:shadow-3xl transform transition-transform hover:scale-105">
          <FaUsers className="text-3xl text-blue-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Equipes Registradas</h2>
          <p className="text-gray-600">Confira todas as equipes registradas.</p>
          <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500 transform transition-transform hover:scale-105">
            Ver Equipes
          </button>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-2xl hover:shadow-3xl transform transition-transform hover:scale-105">
          <FaPlusCircle className="text-3xl text-purple-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Criar Nova Partida</h2>
          <p className="text-gray-600">Agende uma nova partida de futebol.</p>
          <button className="mt-4 py-2 px-4 bg-purple-500 text-white rounded-full hover:bg-purple-600 focus:outline-none focus:ring-4 focus:ring-purple-500 transform transition-transform hover:scale-105">
            Criar Partida
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
