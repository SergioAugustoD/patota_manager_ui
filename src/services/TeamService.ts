import { IApiResponse } from '../interfaces/IApiResponse'
import { ITeam } from '../interfaces/ITeam'
import instance from '../server/api'
import { getTokenFromLocalStorage } from '../utils/getTokenFromLocalStorage'
import CustomToast from '../utils/Toast'

async function createTeam(data: ITeam): Promise<IApiResponse<undefined>> {
  const token = getTokenFromLocalStorage()?.toString()
  const response = await instance.post('/team', data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  const dataResponse = response.data
  if (!dataResponse.success) {
    CustomToast.showToast({
      type: 'error',
      message: dataResponse.message
    })
    return Promise.reject(dataResponse.message)
  }

  return dataResponse
}

async function getTeams(): Promise<IApiResponse<ITeam[]>> {
  const token = getTokenFromLocalStorage()?.toString()

  const response = await instance.get('/team', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const dataResponse = response.data
  if (!dataResponse.success) {
    CustomToast.showToast({
      type: 'error',
      message: dataResponse.message
    })
    return Promise.reject(dataResponse.message)
  }

  return dataResponse
}

const TeamService = {
  createTeam,
  getTeams
}

export default TeamService
