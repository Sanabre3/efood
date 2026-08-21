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
    <img src={dish.image} alt={dish.name} />
    <S.Title>{dish.name}</S.Title>
    <S.Description>{getDescription(dish.description, 130)}</S.Description>
    <Button
      variant="secondary"
      title={`Ver mais detalhes de ${dish.name}`}
      onClick={() => onOpenDetails(dish)}
    >
      Mais detalhes
    </Button>
  </S.Card>
)

export default DishCard
