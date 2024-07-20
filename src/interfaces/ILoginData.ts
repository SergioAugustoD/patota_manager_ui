export interface LoginData {
  token: string
  user: User
}

type User = {
  userId: number
  name: string
  username: string
  email: string
  role: string
}
