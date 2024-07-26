import React, { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useSpring, animated } from '@react-spring/web'
import { ITeam } from '../interfaces/ITeam'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const teams: ITeam[] = [
    {
      id: 1,
      name: 'Time A',
      detail: 'Descrição do Time A',
      location: 'Campo A',
      owner: 'Owner A'
    },
    {
      id: 2,
      name: 'Time B',
      detail: 'Descrição do Time B',
      location: 'Campo B',
      owner: 'Owner B'
    },
    {
      id: 3,
      name: 'Time C',
      detail: 'Descrição do Time C',
      location: 'Campo C',
      owner: 'Owner C'
    },
    {
      id: 4,
      name: 'Time D',
      detail: 'Descrição do Time D',
      location: 'Campo D',
      owner: 'Owner D'
    },
    {
      id: 5,
      name: 'Time E',
      detail: 'Descrição do Time E',
      location: 'Campo E',
      owner: 'Owner E'
    },
    {
      id: 6,
      name: 'Time F',
      detail: 'Descrição do Time F',
      location: 'Campo F',
      owner: 'Owner F'
    },
    {
      id: 7,
      name: 'Time G',
      detail: 'Descrição do Time G',
      location: 'Campo G',
      owner: 'Owner G'
    },
    {
      id: 8,
      name: 'Time H',
      detail: 'Descrição do Time H',
      location: 'Campo H',
      owner: 'Owner H'
    },
    {
      id: 9,
      name: 'Time I',
      detail: 'Descrição do Time I',
      location: 'Campo I',
      owner: 'Owner I'
    }
  ]
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
                <div key={team.id} className="w-full md:w-1/3 px-2 md:px-4">
                  <div className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                    <h3 className="text-lg font-semibold mb-2">{team.name}</h3>
                    <p className="text-gray-600 mb-1">
                      <strong>Detalhe:</strong> {team.detail}
                    </p>
                    <p className="text-gray-600 mb-1">
                      <strong>Local:</strong> {team.location}
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Dono da Patota:</strong> {team.owner}
                    </p>
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
