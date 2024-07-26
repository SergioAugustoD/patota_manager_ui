import { ILoginData } from '../interfaces/ILoginData'

export const getUserFromLocalStorage = () => {
  // Recupera o valor de userInfo do localStorage
  const userInfoString = localStorage.getItem('userInfo')

  // Verifica se o valor foi encontrado
  if (userInfoString) {
    try {
      // Faz o parsing do JSON para um objeto do tipo UserInfo
      const userInfo: ILoginData = JSON.parse(userInfoString)

      return userInfo.user
    } catch (error) {
      throw new Error('Erro ao parsear JSON:' + error)
    }
  } else {
    return null
  }
}
