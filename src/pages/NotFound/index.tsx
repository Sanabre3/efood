import Button from '../../components/Button'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

import * as S from './styles'

const NotFound = () => (
  <>
    <Header variant="inner" />

    <S.Main className="container">
      <S.Title>404</S.Title>
      <S.Text>
        Não encontramos esta página. Que tal escolher um restaurante da nossa
        lista?
      </S.Text>
      <Button type="link" to="/">
        Ver restaurantes
      </Button>
    </S.Main>

    <Footer />
  </>
)

export default NotFound
