import styled from 'styled-components'

import { colors } from '../../styles'

export const Wrapper = styled.footer`
  background-color: ${colors.cream};
  padding: 40px 0;
  margin-top: 120px;
  text-align: center;

  .container > a {
    margin-bottom: 32px;
  }
`

export const Socials = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 80px;

  svg {
    width: 24px;
    height: 24px;
    fill: ${colors.salmon};
    transition: transform 0.2s ease;
  }

  a:hover svg {
    transform: scale(1.15);
  }
`

export const Disclaimer = styled.p`
  font-size: 10px;
  line-height: 1.2;
  color: ${colors.salmon};
  max-width: 480px;
  margin: 0 auto;
`
