import api from 'axios'

export const instance = api.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
})
