import { IApiResponse } from '../interfaces/IApiResponse'
import { ILogin } from '../interfaces/ILogin'
import { IUser } from '../interfaces/IUser'
import instance from '../server/api'
import CustomToast from '../utils/Toast'

interface ILoginResponseData {
  token: string
  user: IUser
}
async function sign(data: ILogin): Promise<IApiResponse<ILoginResponseData>> {
  const response = await instance.post('/auth/login', data)

  const dataResponse = response.data
  if (!dataResponse.success) {
    CustomToast.showToast({
      type: 'error',
      message: dataResponse.message
    })
  }

  return dataResponse
}

const AuthService = {
  sign
}

export default AuthService
