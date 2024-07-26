import { IApiResponse } from '../interfaces/IApiResponse'
import { ISignup } from '../interfaces/ISignup'
import instance from '../server/api'
import CustomToast from '../utils/Toast'

async function signup(data: ISignup): Promise<IApiResponse<undefined>> {
  const response = await instance.post('/user', data)
  console.log('resp', response)
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

const UserService = {
  signup
}

export default UserService
