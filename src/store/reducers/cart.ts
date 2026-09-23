import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { Dish } from '../../types'

type CartState = {
  items: Dish[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    /** Adiciona o prato e abre o carrinho, como no layout. */
    add: (state, action: PayloadAction<Dish>) => {
      state.items.push(action.payload)
      state.isOpen = true
    },
    /** Remove pela posição: o mesmo prato pode estar repetido no carrinho. */
    remove: (state, action: PayloadAction<number>) => {
      state.items.splice(action.payload, 1)
    },
    clear: (state) => {
      state.items = []
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, clear, open, close } = cartSlice.actions

export default cartSlice.reducer
