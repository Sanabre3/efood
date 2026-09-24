import styled from 'styled-components'

import { colors } from '../../styles'
import { Row } from '../Form/styles'

/** O número do cartão ocupa o dobro da largura do CVV, como no layout. */
export const CardRow = styled(Row)`
  gap: 30px;

  > div:first-child {
    flex: 2;
  }

  > div:last-child {
    flex: 1;
  }
`

export const SubmitError = styled.p`
  background-color: ${colors.cream};
  color: ${colors.error};
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  padding: 8px;
  margin-top: 16px;
`
