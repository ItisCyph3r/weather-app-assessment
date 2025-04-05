import { setCache, getCache } from './cache'

describe('cache', () => {
  it('sets and retrieves cached data', () => {
    const key = 'testKey'
    const data = { value: 'testData' }

    setCache(key, data)
    const result = getCache(key)

    expect(result).toEqual(data)
  })

  it('removes expired cache', () => {
    const key = 'expiredKey'
    const data = { value: 'expiredData' }
    const mockDateNow = jest.spyOn(Date, 'now').mockReturnValue(0)

    setCache(key, data)
    mockDateNow.mockReturnValue(6 * 60 * 1000) // Simulate 6 minutes later

    const result = getCache(key)
    expect(result).toBeNull()
  })
})
