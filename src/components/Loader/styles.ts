import styled, { keyframes } from 'styled-components'

import { colors } from '../../styles'

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 64px 16px;
  color: ${colors.salmon};
  font-size: 18px;
  font-weight: 700;
`

export const Spinner = styled.span`
  width: 40px;
  height: 40px;
  border: 4px solid ${colors.cream};
  border-top-color: ${colors.salmon};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`
