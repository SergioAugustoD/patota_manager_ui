import { IUser } from './IUser'

export interface ITeam {
  teamId?: string
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
