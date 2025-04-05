import { Container, Loader, Alert } from '@mantine/core'
import { useWeather } from './hooks/useWeather'
import WeatherCard from './conponents/WeatherCard'
import SearchBar from './conponents/SearchBar'
import { X } from 'lucide-react'

function App() {
  const { data, error, loading, getWeather } = useWeather()

  return (
    <Container size='sm' className="flex items-center justify-center h-screen">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md relative">
        {/* Header */}
        <div className="bg-gray-800 text-white p-4 rounded-t-lg flex justify-between items-center">
          <h1 className="text-xl font-semibold">Weather Forecast</h1>
          <button className="hover:bg-gray-700 p-1 rounded">
            <X size={20} />
          </button>
        </div>

        {/* Search Results */}
        <div className="p-4">
          <SearchBar onSearch={getWeather} className="w-full" />
          {loading && <Loader mt='md' color='#1f2937'/>}
          {error && <Alert color='red' mt='md'>{error}</Alert>}

          {data && <WeatherCard data={data} />}
        </div>
      </div>
    </Container>
  )
}

export default App
