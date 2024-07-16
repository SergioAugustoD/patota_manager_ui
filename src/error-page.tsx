import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">Oops!</h1>
        <p className="text-xl text-gray-700 mb-2">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-lg text-gray-500">
          <i>{error.statusText || error.message}</i>
        </p>
        <a
          href="/"
          className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Go to Home
        </a>
      </div>
    </div>
  )
}
