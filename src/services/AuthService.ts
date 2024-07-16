import { IApiResponse } from '../interfaces/IApiResponse'
import { ILogin } from '../interfaces/ILogin'
import { instance } from '../server/api'

async function login(data: ILogin) {
  const response = await instance.post('/auth/login', data)

  const dataResponse: IApiResponse<undefined> = response.data
  if (!dataResponse.success) return alert(dataResponse.message)

  return dataResponse
}

const AuthService = {
  login
}

export default AuthService
