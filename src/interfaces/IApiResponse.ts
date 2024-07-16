export interface IApiResponse<T> {
  success: boolean
  data: T
  errors: []
  message: string
}
