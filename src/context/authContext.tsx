import { createContext } from 'react'
import { ILoginData } from '../interfaces/ILoginData'

interface AuthContext {
  user: ILoginData | null
  setUser: (user: ILoginData | null) => void
}

export const AuthContext = createContext<AuthContext>({
  user: null,
  setUser: () => {}
})
