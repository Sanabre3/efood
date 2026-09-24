import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import DeliveryForm from '../DeliveryForm'
import OrderConfirmation from '../OrderConfirmation'
import PaymentForm from '../PaymentForm'
import * as F from '../Form/styles'
import { checkout } from '../../services/api'
import { close, confirmOrder, goTo, remove, setDelivery } from '../../store/reducers/cart'
import { selectCartTotal, useAppDispatch, useAppSelector } from '../../store/hooks'
import { formatPrice } from '../../utils'
import type { Payment } from '../../types'

import * as S from './styles'

/**
 * Painel lateral do pedido. Passa pelas etapas carrinho → entrega →
 * pagamento → confirmação; o estado vem do Redux (slice `cart`) e o pedido é
 * enviado por POST para a API no fim da etapa de pagamento.
 */
const Cart = () => {
  const dispatch = useAppDispatch()
  const { items, isOpen, step, delivery, orderId } = useAppSelector(
    (state) => state.cart
  )
  const total = useAppSelector(selectCartTotal)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

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

  const handlePayment = async (payment: Payment) => {
    if (!delivery) return

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const { orderId: id } = await checkout({
        products: items.map((item) => ({ id: item.id, price: item.preco })),
        delivery,
        payment
      })

      dispatch(confirmOrder(id))
    } catch (reason) {
      setSubmitError(
        reason instanceof Error
          ? reason.message
          : 'Não foi possível concluir o pedido.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStep = () => {
    if (step === 'confirmation' && orderId) {
      return (
        <OrderConfirmation orderId={orderId} onFinish={() => dispatch(close())} />
      )
    }

    if (step === 'payment') {
      return (
        <PaymentForm
          total={total}
          isSubmitting={isSubmitting}
          error={submitError}
          onSubmit={handlePayment}
          onBack={() => dispatch(goTo('delivery'))}
        />
      )
    }

    if (step === 'delivery') {
      return (
        <DeliveryForm
          onSubmit={(data) => dispatch(setDelivery(data))}
          onBack={() => dispatch(goTo('cart'))}
        />
      )
    }

    if (items.length === 0) {
      return (
        <S.Empty>
          O carrinho está vazio.
          <br />
          Adicione um prato para continuar com a compra.
        </S.Empty>
      )
    }

    return (
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

        <F.Button type="button" onClick={() => dispatch(goTo('delivery'))}>
          Continuar com a entrega
        </F.Button>
      </>
    )
  }

  return createPortal(
    <S.Overlay onClick={() => dispatch(close())}>
      <S.Sidebar
        onClick={(event) => event.stopPropagation()}
        aria-label="Carrinho de compras"
      >
        {renderStep()}
      </S.Sidebar>
    </S.Overlay>,
    document.body
  )
}

export default Cart
