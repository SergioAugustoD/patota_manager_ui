import React, { useEffect, useState } from 'react'
import {
  FaMapMarkerAlt,
  FaUsers,
  FaClipboardList,
  FaChevronLeft
} from 'react-icons/fa'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { ITeam } from '../../../interfaces/ITeam'
import TeamService from '../../../services/TeamService'

const TeamDetails: React.FC = () => {
  const [team, setTeam] = useState<ITeam | null>(null)
  const location = useLocation()
  const teamId = location.state?.teamId
  const navigate = useNavigate()

  useEffect(() => {
    const fetchTeam = async () => {
      const resp = await TeamService.getTeamById(teamId?.toString()!)

      if (resp.success && resp.data) {
        setTeam(resp.data)
      }
    }

    fetchTeam()
  }, [teamId])

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-700 to-purple-700 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="text-white mb-6 flex items-center"
        >
          <FaChevronLeft className="mr-2" /> Voltar
        </button>
        {team && (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">{team.name}</h3>
            <p className="text-gray-600 mb-1">
              <a
                href={`https://www.google.com/maps/place/${
                  team.address +
                  ',' +
                  team.addressNumber +
                  ',' +
                  team.city +
                  ',,' +
                  team.uf
                }`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapMarkerAlt className="inline mr-1 text-blue-600" />
              </a>
              <strong>Local:</strong> {team.city}, {team.uf}, {team.address},{' '}
              {team.addressNumber}
            </p>
            <p className="text-gray-600 mb-1">
              <FaUsers className="inline mr-1 text-gray-400" />
              <strong>Nível:</strong> {team.skillLevel}
            </p>
            <p className="text-gray-600 mb-1">
              <FaClipboardList className="inline mr-1 text-gray-400" />
              <strong>Criador da Patota:</strong> {team.user?.name}
            </p>
            <p className="text-gray-600 whitespace-pre-wrap break-words">
              <strong>Descrição:</strong> {team.description}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default TeamDetails
