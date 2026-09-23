import { useEffect, useId } from 'react'
import { createPortal } from 'react-dom'

import type { Dish } from '../../types'
import { formatPrice } from '../../utils'

import * as S from './styles'

type Props = {
  dish: Dish | null
  onClose: () => void
  onAddToCart: (dish: Dish) => void
}

/**
 * Modal aberta ao clicar em "Adicionar ao carrinho" no card do prato.
 * Mostra a foto, a descrição completa, a porção e o preço, e fecha no X,
 * no clique fora do conteúdo ou com a tecla Esc.
 */
const DishModal = ({ dish, onClose, onAddToCart }: Props) => {
  const titleId = useId()

  useEffect(() => {
    if (!dish) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [dish, onClose])

  if (!dish) return null

  return createPortal(
    <S.Overlay onClick={onClose} role="dialog" aria-modal="true" aria-labelledby={titleId}>
      <S.Content onClick={(event) => event.stopPropagation()}>
        <S.CloseButton type="button" onClick={onClose} aria-label="Fechar">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m19 6.4-1.4-1.4-5.6 5.6-5.6-5.6L5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6L19 6.4Z" />
          </svg>
        </S.CloseButton>

        <S.Image src={dish.foto} alt={dish.nome} />

        <S.Details>
          <S.Title id={titleId}>{dish.nome}</S.Title>
          <S.Description>
            {dish.descricao}
            <br />
            <br />
            Serve: {dish.porcao}
          </S.Description>
          <S.AddButton type="button" onClick={() => onAddToCart(dish)}>
            Adicionar ao carrinho - {formatPrice(dish.preco)}
          </S.AddButton>
        </S.Details>
      </S.Content>
    </S.Overlay>,
    document.body
  )
}

export default DishModal
