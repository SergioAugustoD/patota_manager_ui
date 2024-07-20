export interface IApiResponse<T> {
  success: boolean
  data: T
  errors: string[]
  message: string
}
