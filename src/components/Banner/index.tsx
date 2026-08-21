import type { Restaurant } from '../../types'

import * as S from './styles'

type Props = {
  restaurant: Restaurant
}

const Banner = ({ restaurant }: Props) => (
  <S.Wrapper style={{ backgroundImage: `url('${restaurant.cover}')` }}>
    <S.Content className="container">
      <S.Category>{restaurant.category}</S.Category>
      <S.Title>{restaurant.title}</S.Title>
    </S.Content>
  </S.Wrapper>
)

export default Banner
