import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

type WrapperProps = {
  $size: 'small' | 'large'
}

export const Text = styled.span`
  font-weight: 900;
  letter-spacing: -0.5px;
  line-height: 1;
`

export const Icon = styled.svg`
  fill: currentColor;
  width: 0.8em;
  height: 0.8em;
`

export const Wrapper = styled(Link)<WrapperProps>`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: ${colors.salmon};
  font-size: ${(props) => (props.$size === 'large' ? '48px' : '32px')};
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`
