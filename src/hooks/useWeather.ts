import { useState } from 'react'
import { getCache, setCache } from '../utils/cache'
import { fetchWeather } from '../utils/api'

export const useWeather = () => {
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const getWeather = async (city: string) => {
    setLoading(true)
    setError(null)

    const cached = getCache(city.toLowerCase())
    if (cached) {
      setData(cached)
      setLoading(false)
      return
    }

    try {
      const result = await fetchWeather(city)
      setData(result)
      setCache(city.toLowerCase(), result)
    } catch (err: any) {
      if (err.response?.status === 404) {
        setError('City not found.')
      } else {
        setError('An error occurred while fetching data.')
      }
    } finally {
      setLoading(false)
    }
  }

  return { data, error, loading, getWeather }
}
