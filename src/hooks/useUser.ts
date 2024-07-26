import { useContext } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { AuthContext } from '../context/authContext'
import { ILoginData } from '../interfaces/ILoginData'

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext)
  const { setItem, removeItem } = useLocalStorage()

  const addUser = (user: ILoginData) => {
    setUser(user)
    setItem('userInfo', JSON.stringify(user))
  }

  const removeUser = () => {
    setUser(null)
    removeItem('userInfo')
  }

  return { user, addUser, removeUser, setUser }
}
