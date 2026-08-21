import styled from 'styled-components'

import { colors } from '../../styles'

export const Card = styled.article`
  background-color: ${colors.salmon};
  color: ${colors.cream};
  padding: 8px;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
    margin-bottom: 8px;
  }

  button {
    width: 100%;
    padding: 4px 0;
  }
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
  flex: 1;
`
