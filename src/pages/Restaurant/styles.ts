import styled from 'styled-components'

import { breakpoints } from '../../styles'

export const Main = styled.main`
  padding: 56px 0 0;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px 32px;

  li {
    display: flex;
  }

  article {
    flex: 1;
  }

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.phone}) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`
