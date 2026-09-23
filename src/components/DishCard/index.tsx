import Button from '../Button'
import type { Dish } from '../../types'
import { getDescription } from '../../utils'

import * as S from './styles'

type Props = {
  dish: Dish
  onOpenDetails: (dish: Dish) => void
}

const DishCard = ({ dish, onOpenDetails }: Props) => (
  <S.Card>
    <img src={dish.foto} alt={dish.nome} loading="lazy" />
    <S.Title>{dish.nome}</S.Title>
    <S.Description>{getDescription(dish.descricao, 130)}</S.Description>
    <Button
      variant="secondary"
      title={`Clique para comprar ${dish.nome}`}
      onClick={() => onOpenDetails(dish)}
    >
      Adicionar ao carrinho
    </Button>
  </S.Card>
)

export default DishCard
