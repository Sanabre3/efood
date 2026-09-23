import styled from 'styled-components'

import { colors } from '../../styles'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 64px 16px;
  text-align: center;
  color: ${colors.salmon};
`

export const Title = styled.p`
  font-size: 18px;
  font-weight: 900;
`

export const Text = styled.p`
  font-size: 14px;
  line-height: 22px;
  max-width: 480px;
`
