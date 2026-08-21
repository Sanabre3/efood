import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { breakpoints, colors } from '../../styles'
import { headerPattern } from '../../utils/images'

const pattern = headerPattern()

export const HomeHeader = styled.header`
  background-color: ${colors.cream};
  background-image: url('${pattern}');
  background-size: 240px 240px;
  padding: 40px 0 64px;
  text-align: center;

  .container > a {
    margin-bottom: 138px;

    @media (max-width: ${breakpoints.tablet}) {
      margin-bottom: 56px;
    }
  }
`

export const Tagline = styled.h1`
  font-size: 36px;
  font-weight: 900;
  line-height: 1.2;
  color: ${colors.salmon};

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 26px;
  }
`

export const InnerHeader = styled.header`
  background-color: ${colors.cream};
  background-image: url('${pattern}');
  background-size: 240px 240px;
  padding: 40px 0;
`

export const InnerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`

export const NavLink = styled(Link)`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.salmon};
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`

export const CartLink = styled.button`
  background: none;
  font-size: 18px;
  font-weight: 900;
  color: ${colors.salmon};
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`
