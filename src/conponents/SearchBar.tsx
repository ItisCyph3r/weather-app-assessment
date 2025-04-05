import { TextInput, Button } from '@mantine/core'
import { useState } from 'react'

interface Props {
  onSearch: (city: string) => void
  className: string
}

const SearchBar = ({ onSearch, className }: Props) => {
  const [city, setCity] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (city.trim()) onSearch(city)
  }

  return (
    <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
      <TextInput
        value={city}
        onChange={(e) => setCity(e.currentTarget.value)}
        placeholder='Enter city name'
        className='flex-1 w-full'
      />
      <Button type='submit' color='#1f2937'>Search</Button>
    </form>
  )
}

export default SearchBar


