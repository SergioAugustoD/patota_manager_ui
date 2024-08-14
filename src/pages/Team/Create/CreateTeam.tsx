import React, { useState } from 'react'
import {
  FaMapMarkerAlt,
  FaUsers,
  FaClipboardList,
  FaPencilAlt,
  FaCity,
  FaHome,
  FaHashtag
} from 'react-icons/fa'
import TeamService from '../../../services/TeamService'
import { ITeam } from '../../../interfaces/ITeam'
import CustomToast from '../../../utils/Toast'
import { useNavigate } from 'react-router-dom'

const CreateTeam: React.FC = () => {
  const userInfo = localStorage.getItem('userInfo')
  const navigate = useNavigate()
  const [formData, setFormData] = useState<ITeam>({
    name: '',
    city: '',
    uf: '',
    address: '',
    addressNumber: 0,
    skillLevel: 'Novato',
    description: '',
    createdBy: ''
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (userInfo) {
      const userInfoObj = JSON.parse(userInfo)

      const userId = userInfoObj.user.userId
      formData.createdBy = userId
      const resp = await TeamService.createTeam(formData)

      if (resp.success && resp.data) {
        CustomToast.showToast({
          type: 'success',
          message: resp.message
        })

        navigate('/home')
      }
    } else {
      console.error('userinfo não encontrado no localStorage')
    }
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
              <FaHashtag className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="addressNumber"
                placeholder="Nº"
                value={
                  formData.addressNumber === 0 ? '' : formData.addressNumber
                }
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-green-500"
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
