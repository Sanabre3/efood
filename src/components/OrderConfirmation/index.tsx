import * as F from '../Form/styles'
import * as S from './styles'

type Props = {
  orderId: string
  onFinish: () => void
}

/** Tela de confirmação, preenchida com o pedido devolvido pela API. */
const OrderConfirmation = ({ orderId, onFinish }: Props) => (
  <div>
    <F.Title>Pedido realizado - {orderId}</F.Title>

    <S.Text>
      Estamos felizes em informar que seu pedido já está em processo de
      preparação e, em breve, será entregue no endereço fornecido.
    </S.Text>
    <S.Text>
      Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
      realizar cobranças extras.
    </S.Text>
    <S.Text>
      Lembre-se da importância de higienizar as mãos após o recebimento do
      pedido, garantindo assim sua segurança e bem-estar durante a refeição.
    </S.Text>
    <S.Text>
      Esperamos que desfrute de uma deliciosa e agradável experiência
      gastronômica. Bom apetite!
    </S.Text>

    <F.Actions>
      <F.Button type="button" onClick={onFinish}>
        Concluir
      </F.Button>
    </F.Actions>
  </div>
)

export default OrderConfirmation
