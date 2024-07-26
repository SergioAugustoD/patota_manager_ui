import { useUser } from './useUser'
import { ILoginData } from '../interfaces/ILoginData'

export const useAuth = () => {
  // we can re export the user methods or object from this hook
  const { user, addUser, removeUser, setUser } = useUser()

  const login = (user: ILoginData) => {
    addUser(user)
  }

  const logout = () => {
    removeUser()
  }

  return { user, login, logout, setUser }
}
