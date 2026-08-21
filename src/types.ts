export type Dish = {
  id: number
  name: string
  description: string
  price: number
  portion: string
  image: string
}

export type Restaurant = {
  id: number
  slug: string
  title: string
  category: string
  highlighted: boolean
  rating: number
  description: string
  thumb: string
  cover: string
  dishes: Dish[]
}
