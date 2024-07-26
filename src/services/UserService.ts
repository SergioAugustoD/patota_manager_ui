import { IApiResponse } from '../interfaces/IApiResponse'
import { ISignup } from '../interfaces/ISignup'
import instance from '../server/api'

async function signup(data: ISignup): Promise<IApiResponse<undefined>> {
  return instance
    .post('/user', data)
    .then((response) => response.data)
    .then((dataResponse: IApiResponse<undefined>) => {
      if (!dataResponse.success) {
        return Promise.reject(dataResponse.message)
      }
      return dataResponse
    })
    .then((dataResponse) => {
      if (dataResponse.success) {
        alert(dataResponse.message)
      }
      return dataResponse
    })
    .catch((error) => {
      alert(error)
      throw error
    })
}

const UserService = {
  signup
}

export default UserService
