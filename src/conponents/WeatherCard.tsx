import { Image } from '@mantine/core'
import { Clock, Droplets, Wind } from 'lucide-react'

interface Props {
  data: {
    name: string
    main: {
      temp: string
      feels_like: string
    },
    weather: {
      icon: string
      description: string
    }[],
    dt: number
    sys: {
      country: string
    }
  }
}

const WeatherCard = ({ data }: Props) => {
  const { name, main, weather, dt, sys } = data
  const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`

  return (
    <>
      <div className="py-4 grid grid-cols-1 md:grid-cols-1 gap-6">
        {/* Main Weather Display */}
        <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-center">
          <div className="text-gray-600 mb-4">
            <Image src={icon} alt='weather icon' width={2} height={2} />
          </div>
          <div className="text-4xl font-light mb-2">{main.temp}°C</div>
          <div className="text-gray-500">{weather[0].description}</div>
        </div>

        {/* Weather Details */}
        <div className="space-y-4">
        
          <div className="text-3xl font-medium mb-4">
            {name},<span className="text-gray-500 ml-"> {sys.country}</span> 
          </div>
          

          {/* Weather Metrics */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="text-gray-600">Feels Like</div>
              <div className="flex items-center gap-2">
                {/* <Sun className="text-orange-500" size={20} /> */}
                <span> {main.feels_like	}°C </span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="text-gray-600">Wind</div>
              <div className="flex items-center gap-2">
                <Wind className="text-blue-500" size={20} />
                <span>1.87 m/s</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="text-gray-600">Humidity</div>
              <div className="flex items-center gap-2">
                <Droplets className="text-blue-500" size={20} />
                <span>89%</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="text-gray-600">Last Updated</div>
              <div className="flex items-center gap-2">
                <Clock className="text-blue-500" size={20} />
                <span> {new Date(dt * 1000).toLocaleTimeString()} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WeatherCard
