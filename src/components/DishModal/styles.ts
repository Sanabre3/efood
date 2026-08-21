import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: ${colors.overlay};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  z-index: 10;
`

export const Content = styled.div`
  background-color: ${colors.salmon};
  color: ${colors.white};
  position: relative;
  display: flex;
  gap: 24px;
  padding: 32px;
  max-width: 1024px;
  width: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    max-height: 90vh;
    overflow-y: auto;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  line-height: 0;

  svg {
    width: 16px;
    height: 16px;
    fill: ${colors.white};
  }
`

export const Image = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  flex-shrink: 0;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    height: 200px;
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 16px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`

export const AddButton = styled.button`
  background-color: ${colors.cream};
  color: ${colors.salmon};
  font-weight: 700;
  padding: 4px 8px;
  margin-top: auto;
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(0.94);
  }
`
