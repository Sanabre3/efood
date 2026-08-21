import Logo from '../Logo'
import { useCart } from '../../contexts/useCart'

import * as S from './styles'

type Props = {
  variant?: 'home' | 'inner'
}

const Header = ({ variant = 'home' }: Props) => {
  const { totalItems } = useCart()

  if (variant === 'home') {
    return (
      <S.HomeHeader>
        <div className="container">
          <Logo size="large" />
          <S.Tagline>
            Viva experiências gastronômicas
            <br />
            no conforto da sua casa
          </S.Tagline>
        </div>
      </S.HomeHeader>
    )
  }

  return (
    <S.InnerHeader>
      <S.InnerContent className="container">
        <S.NavLink to="/">Restaurantes</S.NavLink>
        <Logo />
        <S.CartLink type="button">
          {totalItems} produto(s) no carrinho
        </S.CartLink>
      </S.InnerContent>
    </S.InnerHeader>
  )
}

export default Header
