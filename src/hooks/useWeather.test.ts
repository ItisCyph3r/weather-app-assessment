// import { renderHook, act } from '@testing-library/react-hooks';
import { renderHook, act } from '@testing-library/react';
import { useWeather } from './useWeather';
import * as cache from '../utils/cache';
import * as api from '../utils/api';

jest.mock('../utils/cache');
jest.mock('../utils/api');

describe('useWeather', () => {
  const mockData = {
    name: 'Helsinki',
    main: { temp: 1.24 },
    weather: [{ description: 'clear sky', icon: '01d' }],
    dt: 1743859202,
    sys: { country: 'FI' }
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('uses cached data if available', async () => {
    // mock getCache to return data
    (cache.getCache as jest.Mock).mockReturnValue(mockData);

    const { result } = renderHook(() => useWeather());

    await act(async () => {
      await result.current.getWeather('Helsinki');
    });

    expect(cache.getCache).toHaveBeenCalledWith('helsinki');
    expect(api.fetchWeather).not.toHaveBeenCalled();
    expect(result.current.data).toEqual(mockData);
  });

  it('handles API errors', async () => {
    (cache.getCache as jest.Mock).mockReturnValue(null);
    (api.fetchWeather as jest.Mock).mockRejectedValue({ response: { status: 404 } });

    const { result } = renderHook(() => useWeather());

    await act(async () => {
      await result.current.getWeather('InvalidCity');
    });

    expect(result.current.error).toBe('City not found.');
  });
});
