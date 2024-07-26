import { ILoginData } from '../interfaces/ILoginData'

export function getTokenFromLocalStorage(): string | null {
  // Recupera o valor de userInfo do localStorage
  const userInfoString = localStorage.getItem('userInfo')

  // Verifica se o valor foi encontrado
  if (userInfoString) {
    try {
      // Faz o parsing do JSON para um objeto do tipo UserInfo
      const userInfo: ILoginData = JSON.parse(userInfoString)

      // Acessa e retorna o campo token
      return userInfo.token
    } catch (error) {
      console.error('Erro ao parsear JSON:', error)
      return null
    }
  } else {
    return null
  }
}
