import React, { useState } from 'react'
import {
  FaMapMarkerAlt,
  FaUsers,
  FaClipboardList,
  FaPencilAlt,
  FaCity,
  FaHome
} from 'react-icons/fa'

interface TeamFormData {
  name: string
  city: string
  uf: string
  address: string
  addressNumber: string
  skillLevel: 'Novato' | 'Medianos' | 'Veterano' | 'Qualquer nível'
  description: string
}

const CreateTeam: React.FC = () => {
  const [formData, setFormData] = useState<TeamFormData>({
    name: '',
    city: '',
    uf: '',
    address: '',
    addressNumber: '',
    skillLevel: 'Novato',
    description: ''
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    // Lógica de envio do formulário
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-700 to-blue-700 p-4 sm:p-8">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl max-w-lg w-full transform transition-transform hover:scale-105">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Cadastro de Patota
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <FaPencilAlt className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Nome da Patota"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-green-500"
            />
          </div>
          <div className="flex space-x-4">
            <div className="relative w-3/4">
              <FaCity className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="city"
                placeholder="Cidade"
                value={formData.city}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-green-500"
              />
            </div>
            <div className="relative w-1/4">
              <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="uf"
                placeholder="UF"
                value={formData.uf}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-green-500"
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="relative w-3/4">
              <FaHome className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="address"
                placeholder="Endereço"
                value={formData.address}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-green-500"
              />
            </div>
            <div className="relative w-1/4">
              <input
                type="text"
                name="addressNumber"
                placeholder="Nº"
                value={formData.addressNumber}
                onChange={handleChange}
                className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-green-500"
              />
            </div>
          </div>
          <div className="relative">
            <FaUsers className="absolute left-3 top-3 text-gray-400" />
            <select
              name="skillLevel"
              value={formData.skillLevel}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-green-500"
            >
              <option value="Novato">Novato</option>
              <option value="Medianos">Medianos</option>
              <option value="Veterano">Veterano</option>
              <option value="Qualquer nível">Qualquer nível</option>
            </select>
          </div>
          <div className="relative">
            <FaClipboardList className="absolute left-3 top-3 text-gray-400" />
            <textarea
              name="description"
              placeholder="Descrição"
              value={formData.description}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-500 h-32"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white rounded-full hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 transform transition-transform hover:scale-105"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTeam
