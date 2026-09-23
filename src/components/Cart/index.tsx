import { useEffect } from 'react'
import { createPortal } from 'react-dom'

import { close, remove } from '../../store/reducers/cart'
import { selectCartTotal, useAppDispatch, useAppSelector } from '../../store/hooks'
import { formatPrice } from '../../utils'

import * as S from './styles'

/**
 * Carrinho lateral: lista os pratos adicionados, soma o valor da compra e
 * permite remover itens. O estado vem do Redux (slice `cart`).
 */
const Cart = () => {
  const dispatch = useAppDispatch()
  const { items, isOpen } = useAppSelector((state) => state.cart)
  const total = useAppSelector(selectCartTotal)

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') dispatch(close())
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, dispatch])

  if (!isOpen) return null

  return createPortal(
    <S.Overlay onClick={() => dispatch(close())}>
      <S.Sidebar
        onClick={(event) => event.stopPropagation()}
        aria-label="Carrinho de compras"
      >
        {items.length === 0 ? (
          <S.Empty>
            O carrinho está vazio.
            <br />
            Adicione um prato para continuar com a compra.
          </S.Empty>
        ) : (
          <>
            <S.List>
              {items.map((item, index) => (
                <S.Item key={`${item.id}-${index}`}>
                  <img src={item.foto} alt={item.nome} />

                  <div>
                    <S.ItemTitle>{item.nome}</S.ItemTitle>
                    <S.ItemPrice>{formatPrice(item.preco)}</S.ItemPrice>
                  </div>

                  <S.RemoveButton
                    type="button"
                    onClick={() => dispatch(remove(index))}
                    aria-label={`Remover ${item.nome} do carrinho`}
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M7 21q-.825 0-1.412-.587Q5 19.825 5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413Q17.825 21 17 21Zm2-4h2V8H9Zm4 0h2V8h-2Z" />
                    </svg>
                  </S.RemoveButton>
                </S.Item>
              ))}
            </S.List>

            <S.Total>
              <span>Valor total</span>
              <span>{formatPrice(total)}</span>
            </S.Total>

            <S.CheckoutButton type="button">
              Continuar com a entrega
            </S.CheckoutButton>
          </>
        )}
      </S.Sidebar>
    </S.Overlay>,
    document.body
  )
}

export default Cart
