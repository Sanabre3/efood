import { createContext } from 'react'

import type { Dish } from '../types'

export type CartContextData = {
  items: Dish[]
  totalItems: number
  totalPrice: number
  addToCart: (dish: Dish) => void
  removeFromCart: (id: number) => void
}

export const CartContext = createContext<CartContextData | undefined>(undefined)
