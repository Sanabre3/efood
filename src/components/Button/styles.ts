import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

type Props = {
  $variant: 'primary' | 'secondary'
}

const base = css<Props>`
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  text-align: center;
  transition: filter 0.2s ease;

  ${(props) =>
    props.$variant === 'primary'
      ? css`
          background-color: ${colors.salmon};
          color: ${colors.cream};
        `
      : css`
          background-color: ${colors.cream};
          color: ${colors.salmon};
        `}

  &:hover {
    filter: brightness(0.94);
  }
`

export const ButtonContainer = styled.button<Props>`
  ${base}
`

export const ButtonLink = styled(Link)<Props>`
  ${base}
`
