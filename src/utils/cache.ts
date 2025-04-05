export const setCache = (key: string, data: any) => {
    const expiry = Date.now() + 5 * 60 * 1000
    localStorage.setItem(key, JSON.stringify({ data, expiry }))
}
  
export const getCache = (key: string) => {
    const cached = localStorage.getItem(key)
    if (!cached) return null

    const { data, expiry } = JSON.parse(cached)
    if (Date.now() > expiry) {
        localStorage.removeItem(key)
        return null
    }
    return data
}
