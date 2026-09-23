import { useCallback, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

import type { Dish } from '../types'
import { CartContext } from './cartContext'
import type { CartContextData } from './cartContext'

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<Dish[]>([])

  const addToCart = useCallback((dish: Dish) => {
    setItems((current) => [...current, dish])
  }, [])

  const removeFromCart = useCallback((id: number) => {
    setItems((current) => {
      const index = current.findIndex((item) => item.id === id)

      if (index < 0) return current

      return [...current.slice(0, index), ...current.slice(index + 1)]
    })
  }, [])

  const value = useMemo<CartContextData>(
    () => ({
      items,
      totalItems: items.length,
      totalPrice: items.reduce((total, item) => total + item.preco, 0),
      addToCart,
      removeFromCart
    }),
    [items, addToCart, removeFromCart]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartProvider
