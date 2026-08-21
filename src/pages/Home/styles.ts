import styled from 'styled-components'

import { breakpoints } from '../../styles'

export const Main = styled.main`
  padding: 80px 0 0;

  @media (max-width: ${breakpoints.tablet}) {
    padding-top: 40px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px 80px;

  li {
    display: flex;
  }

  article {
    flex: 1;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`
