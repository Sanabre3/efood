import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'

export const Wrapper = styled.div`
  height: 280px;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: stretch;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 24px;
  padding-bottom: 32px;
  color: ${colors.white};
`

export const Category = styled.p`
  font-size: 32px;
  font-weight: 300;
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 900;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 26px;
  }
`
