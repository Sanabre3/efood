import Button from '../Button'
import Tag from '../Tag'
import type { Restaurant } from '../../types'
import { getDescription } from '../../utils'

import * as S from './styles'

type Props = {
  restaurant: Restaurant
}

const RestaurantCard = ({ restaurant }: Props) => (
  <S.Card>
    <S.ImageArea>
      <img src={restaurant.thumb} alt={restaurant.title} />
      <S.Tags>
        {restaurant.highlighted && <Tag>Destaque da semana</Tag>}
        <Tag>{restaurant.category}</Tag>
      </S.Tags>
    </S.ImageArea>

    <S.Content>
      <S.TitleRow>
        <S.Title>{restaurant.title}</S.Title>
        <S.Rating>
          {restaurant.rating.toFixed(1).replace('.', ',')}
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3 1.2-6.8-5-4.9 6.9-1L12 2Z" />
          </svg>
        </S.Rating>
      </S.TitleRow>

      <S.Description>{getDescription(restaurant.description)}</S.Description>

      <Button type="link" to={`/restaurantes/${restaurant.slug}`}>
        Saiba mais
      </Button>
    </S.Content>
  </S.Card>
)

export default RestaurantCard
