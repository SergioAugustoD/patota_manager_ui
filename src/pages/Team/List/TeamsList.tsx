import React, { useEffect, useState } from 'react'
import {
  FaMapMarkerAlt,
  FaUsers,
  FaChevronLeft,
  FaChevronRight,
  FaInfoCircle
} from 'react-icons/fa'
import { ITeam } from '../../../interfaces/ITeam'
import TeamService from '../../../services/TeamService'
import { useNavigate } from 'react-router-dom'

const TeamsList: React.FC = () => {
  const [teamsData, setTeamsData] = useState<ITeam[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [filter, setFilter] = useState('')

  const navigate = useNavigate()

  const teamsPerPage = 4

  const filteredTeams = teamsData.filter((team) =>
    Object.values(team).some((value) =>
      value?.toString().toLowerCase().includes(filter.toLowerCase())
    )
  )

  const indexOfLastTeam = currentPage * teamsPerPage
  const indexOfFirstTeam = indexOfLastTeam - teamsPerPage
  const currentTeams = filteredTeams.slice(indexOfFirstTeam, indexOfLastTeam)

  const totalPages = Math.ceil(filteredTeams.length / teamsPerPage)

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleTeamClick = (teamId: string) => {
    navigate(`/team-details`, { state: { teamId } })
  }

  useEffect(() => {
    const fetchTeams = async () => {
      const resp = await TeamService.getTeams()
      if (resp.success && resp.data) {
        setTeamsData(resp.data)
      }
    }

    fetchTeams()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-700 to-purple-700 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Todas as Patotas
        </h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Filtrar patotas..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-purple-500"
          />
        </div>
        <div className="space-y-4">
          {currentTeams.map((team) => (
            <div
              key={team.teamId}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => handleTeamClick(team.teamId?.toString()!)}
            >
              <h3 className="text-xl font-semibold mb-2">{team.name}</h3>
              <p className="text-gray-600 mb-1">
                <FaMapMarkerAlt className="inline mr-1 text-gray-400" />
                <strong>Local:</strong> {team.city}, {team.uf}
              </p>
              <p className="text-gray-600 mb-1">
                <FaUsers className="inline mr-1 text-gray-400" />
                <strong>Nível:</strong> {team.skillLevel}
              </p>
              <p className="text-gray-600">
                <strong>Descrição:</strong>{' '}
                {team.description.length > 100
                  ? `${team.description.slice(0, 100)}...`
                  : team.description}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleTeamClick(team.teamId?.toString()!)
                }}
                className="mt-2 text-blue-500 hover:underline flex items-center"
              >
                <FaInfoCircle className="mr-1" /> Ver mais
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none"
          >
            <FaChevronLeft className="text-gray-700" />
          </button>
          <span className="text-white">
            Página {currentPage} de {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none"
          >
            <FaChevronRight className="text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TeamsList
