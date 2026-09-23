import Button from '../Button'
import Tag from '../Tag'
import type { Restaurant } from '../../types'
import { capitalize, getDescription } from '../../utils'

import * as S from './styles'

type Props = {
  restaurant: Restaurant
}

const RestaurantCard = ({ restaurant }: Props) => (
  <S.Card>
    <S.ImageArea>
      <img src={restaurant.capa} alt={restaurant.titulo} loading="lazy" />
      <S.Tags>
        {restaurant.destacado && <Tag>Destaque da semana</Tag>}
        <Tag>{capitalize(restaurant.tipo)}</Tag>
      </S.Tags>
    </S.ImageArea>

    <S.Content>
      <S.TitleRow>
        <S.Title>{restaurant.titulo}</S.Title>
        <S.Rating>
          {restaurant.avaliacao.toFixed(1).replace('.', ',')}
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3 1.2-6.8-5-4.9 6.9-1L12 2Z" />
          </svg>
        </S.Rating>
      </S.TitleRow>

      <S.Description>{getDescription(restaurant.descricao)}</S.Description>

      <Button type="link" to={`/restaurantes/${restaurant.id}`}>
        Saiba mais
      </Button>
    </S.Content>
  </S.Card>
)

export default RestaurantCard
