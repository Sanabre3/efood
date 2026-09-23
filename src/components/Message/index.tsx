import * as S from './styles'

type Props = {
  title: string
  children?: string
}

const Message = ({ title, children }: Props) => (
  <S.Wrapper role="alert">
    <S.Title>{title}</S.Title>
    {children && <S.Text>{children}</S.Text>}
  </S.Wrapper>
)

export default Message
