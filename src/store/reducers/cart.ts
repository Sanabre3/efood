import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { Delivery, Dish } from '../../types'

/** Etapas do painel lateral: carrinho, entrega, pagamento e confirmação. */
export type CheckoutStep = 'cart' | 'delivery' | 'payment' | 'confirmation'

type CartState = {
  items: Dish[]
  isOpen: boolean
  step: CheckoutStep
  delivery: Delivery | null
  orderId: string | null
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  step: 'cart',
  delivery: null,
  orderId: null
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    /** Adiciona o prato e abre o carrinho, como no layout. */
    add: (state, action: PayloadAction<Dish>) => {
      state.items.push(action.payload)
      state.isOpen = true
      state.step = 'cart'
    },
    /** Remove pela posição: o mesmo prato pode estar repetido no carrinho. */
    remove: (state, action: PayloadAction<number>) => {
      state.items.splice(action.payload, 1)

      if (state.items.length === 0) {
        state.step = 'cart'
      }
    },
    clear: (state) => {
      state.items = []
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false

      // Pedido concluído: reabrir o painel deve começar um carrinho novo.
      if (state.step === 'confirmation') {
        state.step = 'cart'
        state.delivery = null
        state.orderId = null
      }
    },
    goTo: (state, action: PayloadAction<CheckoutStep>) => {
      state.step = action.payload
    },
    /** Guarda a entrega para enviar junto com o pagamento no POST. */
    setDelivery: (state, action: PayloadAction<Delivery>) => {
      state.delivery = action.payload
      state.step = 'payment'
    },
    /** Pedido aceito pela API: esvazia o carrinho e mostra a confirmação. */
    confirmOrder: (state, action: PayloadAction<string>) => {
      state.orderId = action.payload
      state.items = []
      state.delivery = null
      state.step = 'confirmation'
    }
  }
})

export const {
  add,
  remove,
  clear,
  open,
  close,
  goTo,
  setDelivery,
  confirmOrder
} = cartSlice.actions

export default cartSlice.reducer
