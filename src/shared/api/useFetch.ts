import { useEffect, useState } from 'react'

export function useFetch<T>(urlEnd: string) {
  const [data, setData] = useState<T>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [statusResponse, setStatusResponse] = useState<number | null>()
  const urlBase: string = import.meta.env.VITE_API_BASE_URL
  useEffect(() => {
    const fetchData = async () => {
      if (!urlEnd) {
        setIsLoading(false)
        return
      }
      try {
        setIsLoading(true)
        const response = await fetch(`${urlBase}${urlEnd}`)
        if (response.status === 404) {
          setStatusResponse(response.status)
          setData(undefined)
          return
        }
        if (!response.ok) {
          throw new Error(`error:${response.status}`)
        }
        const result = await response.json()
        setData(result)
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') return
        setError(err instanceof Error ? err.message : 'unknown error')
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [urlEnd, urlBase])
  return { data, isLoading, error, statusResponse }
}
