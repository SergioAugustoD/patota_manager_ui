import { toast, TypeOptions } from 'react-toastify'

interface ToastParams {
  type: TypeOptions
  message: string
}

function showToast({ type, message }: ToastParams) {
  toast(message, { type })
}

const CustomToast = {
  showToast
}

export default CustomToast
