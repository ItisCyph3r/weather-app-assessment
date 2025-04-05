import axios from 'axios';
import { fetchWeather } from './api';

jest.mock('axios');

describe('fetchWeather', () => {
  it('fetches weather data from the API', async () => {
    const mockData = {
      name: 'Helsinki',
      main: { temp: 1.24 },
      weather: [{ description: 'clear sky', icon: '01d' }],
    };
    jest.spyOn(axios, 'get').mockResolvedValue({ data: mockData });

    const result = await fetchWeather('Helsinki');

    expect(axios.get).toHaveBeenCalledWith('https://api.openweathermap.org/data/2.5/weather', {
      params: { q: 'Helsinki', appid: import.meta.env.VITE_API_KEY, units: 'metric' },
    });
    expect(result).toEqual(mockData);
  });
});
