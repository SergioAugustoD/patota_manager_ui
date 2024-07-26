import { IUser } from './IUser'

export interface IAuthContext {
  isAuthenticated: boolean
  login: (token: string) => void
  logout: () => void
  token: string | null
  user: IUser | null
}
