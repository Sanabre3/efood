import type { Restaurant } from '../../types'
import { capitalize } from '../../utils'

import * as S from './styles'

type Props = {
  restaurant: Restaurant
}

const Banner = ({ restaurant }: Props) => (
  <S.Wrapper style={{ backgroundImage: `url('${restaurant.capa}')` }}>
    <S.Content className="container">
      <S.Category>{capitalize(restaurant.tipo)}</S.Category>
      <S.Title>{restaurant.titulo}</S.Title>
    </S.Content>
  </S.Wrapper>
)

export default Banner
