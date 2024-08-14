import React, { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt } from 'react-icons/fa'
import { useSpring, animated } from '@react-spring/web'
import { ITeam } from '../interfaces/ITeam'
import TeamService from '../services/TeamService'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [teams, setTeams] = useState<ITeam[]>([])

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = TeamService.getTeams()
        const data = (await response).data
        setTeams(data)
      } catch (error) {
        console.error('Error fetching teams:', error)
      }
    }
    fetchTeams()
  }, [])

  // Função para determinar o número de slides exibidos com base na largura da tela
  const slidesToShow = (): number => (window.innerWidth < 768 ? 1 : 3)

  // Função para dividir as patotas em grupos de acordo com o número de slides exibidos
  const groupTeams = (teams: ITeam[]) => {
    const result: ITeam[][] = []
    const itemsPerSlide = slidesToShow()
    for (let i = 0; i < teams.length; i += itemsPerSlide) {
      result.push(teams.slice(i, i + itemsPerSlide))
    }
    return result
  }

  const groupedTeams = groupTeams(teams)

  // Animação do carrossel
  const { transform } = useSpring({
    transform: `translateX(-${currentIndex * (100 / groupedTeams.length)}%)`,
    config: { mass: 1, tension: 200, friction: 20 }
  })

  // Função para ir para o slide anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.ceil(teams.length / slidesToShow()) - 1
        : prevIndex - 1
    )
  }

  // Função para ir para o próximo slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(teams.length / slidesToShow()) - 1
        ? 0
        : prevIndex + 1
    )
  }

  useEffect(() => {
    // Autoplay do carrossel
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Math.ceil(teams.length / slidesToShow()) - 1
          ? 0
          : prevIndex + 1
      )
    }, 15000) // Troca de slide a cada 3 segundos
    return () => clearInterval(interval)
  }, [teams.length])

  // Atualiza o número de slides a serem exibidos quando a janela é redimensionada
  useEffect(() => {
    const handleResize = () => setCurrentIndex(0)
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <animated.div
          className="flex"
          style={{
            width: `${groupedTeams.length * 100}%`,
            transform,
            display: 'flex'
          }}
        >
          {groupedTeams.map((group, index) => (
            <div key={index} className="flex w-full">
              {group.map((team) => (
                <div
                  key={team.teamId}
                  className="w-full md:w-1/3 px-2 md:px-4 h-4/5"
                >
                  <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                    <h3 className="text-lg font-semibold mb-2 ">{team.name}</h3>
                    <div className="text-gray-600 mb-1">
                      <div className="flex mb-2">
                        <FaMapMarkerAlt className="mr-2 text-blue-600" />
                        <p>
                          <strong>Local:</strong>
                          <br />
                          <span className="text-gray-500 text-sm/[12px]">
                            {team.city}, {team.uf}, {team.address},{' '}
                            {team.addressNumber}
                          </span>
                        </p>
                      </div>
                      <p className=" text-gray-800 font-semibold">
                        <strong>Criador:</strong> {team.user?.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </animated.div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none"
      >
        <FaChevronLeft className="text-gray-700" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none"
      >
        <FaChevronRight className="text-gray-700" />
      </button>
    </div>
  )
}

export default Carousel
