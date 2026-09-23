import { useDispatch, useSelector } from 'react-redux'

import type { AppDispatch, RootState } from '.'

/** Versões tipadas dos hooks do react-redux. */
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

/** Soma o preço dos pratos que estão no carrinho. */
export const selectCartTotal = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.preco, 0)
