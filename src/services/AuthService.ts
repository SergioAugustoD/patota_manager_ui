import { IApiResponse } from '../interfaces/IApiResponse'
import { ILogin } from '../interfaces/ILogin'
import { LoginData } from '../interfaces/ILoginData'
import { instance } from '../server/api'

async function login(data: ILogin): Promise<IApiResponse<LoginData>> {
  const response = await instance.post('/auth/login', data)
  const dataResponse = response.data
  if (!dataResponse.success) {
    throw new Error(dataResponse.message)
  }
  localStorage.setItem('token', dataResponse.data.token)
  localStorage.setItem('user', JSON.stringify(dataResponse.data.user))

  return dataResponse
}

const AuthService = {
  login
}

export default AuthService
