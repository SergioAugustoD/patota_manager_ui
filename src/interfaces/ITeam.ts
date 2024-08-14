import { IUser } from './IUser'

export interface ITeam {
  teamId?: number
  name: string
  city: string
  uf: string
  address: string
  addressNumber: number
  skillLevel: string
  description: string
  createdBy: string
  user?: IUser
}
