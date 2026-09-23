import * as S from './styles'

type Props = {
  children?: string
}

const Loader = ({ children = 'Carregando...' }: Props) => (
  <S.Wrapper role="status" aria-live="polite">
    <S.Spinner aria-hidden="true" />
    {children}
  </S.Wrapper>
)

export default Loader
