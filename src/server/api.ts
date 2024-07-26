import axios from 'axios'

// Cria uma instância do Axios com configuração padrão
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL // Defina sua URL base aqui
})

// Função para configurar interceptores
export const setupAxiosInterceptors = (
  logout: () => void,
  token: string | null
) => {
  // Intercepta as solicitações para adicionar o token de autenticação
  instance.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  // Intercepta respostas para lidar com erros de autenticação
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        // Se o token for inválido, faça logout
        logout()
      }
      return Promise.reject(error)
    }
  )
}

export default instance
