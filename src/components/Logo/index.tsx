import * as S from './styles'

type Props = {
  size?: 'small' | 'large'
}

const Logo = ({ size = 'small' }: Props) => (
  <S.Wrapper to="/" $size={size} aria-label="efood - página inicial">
    <S.Icon viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 2v7a3 3 0 0 0 2 2.83V22h2V11.83A3 3 0 0 0 10 9V2H8.5v6H7.75V2h-1.5v6H5.5V2H4Zm12.5 0C14.57 2 13 5.13 13 9c0 3.06.98 5.66 2.5 6.6V22h2V2h-1Z" />
    </S.Icon>
    <S.Text>efood</S.Text>
  </S.Wrapper>
)

export default Logo
