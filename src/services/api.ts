const BASE_URL = 'https://api-ebac.vercel.app/api/efood'

/** Endpoints consumidos por AJAX (`useFetch`). */
export const endpoints = {
  restaurants: `${BASE_URL}/restaurantes`,
  restaurant: (id: string | number) => `${BASE_URL}/restaurantes/${id}`
}
