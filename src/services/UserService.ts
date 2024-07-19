import { IApiResponse } from '../interfaces/IApiResponse'
import { ISignup } from '../interfaces/ISignup'
import { instance } from '../server/api'

async function signup(data: ISignup) {
  const response = await instance.post('/user', data)

  const dataResponse: IApiResponse<undefined> = response.data
  if (!dataResponse.success) return alert(dataResponse.message)
  console.log(dataResponse)
  return dataResponse
}

const UserService = {
  signup
}

export default UserService
