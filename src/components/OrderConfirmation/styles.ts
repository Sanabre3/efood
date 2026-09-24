import styled from 'styled-components'

import { colors } from '../../styles'

export const Text = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${colors.cream};

  & + & {
    margin-top: 24px;
  }
`
