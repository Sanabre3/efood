import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: ${colors.overlay};
  display: flex;
  justify-content: flex-end;
  z-index: 20;
`

export const Sidebar = styled.aside`
  background-color: ${colors.salmon};
  width: 360px;
  max-width: 100%;
  padding: 32px 8px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  @media (max-width: ${breakpoints.phone}) {
    width: 100%;
  }
`

export const List = styled.ul`
  margin-bottom: 40px;
`

export const Item = styled.li`
  background-color: ${colors.cream};
  color: ${colors.salmon};
  display: flex;
  gap: 8px;
  padding: 8px;
  position: relative;

  & + & {
    margin-top: 16px;
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    flex-shrink: 0;
  }
`

export const ItemTitle = styled.h4`
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 16px;
`

export const ItemPrice = styled.p`
  font-size: 14px;
  line-height: 22px;
`

export const RemoveButton = styled.button`
  position: absolute;
  right: 8px;
  bottom: 8px;
  background: none;
  line-height: 0;

  svg {
    width: 16px;
    height: 16px;
    fill: ${colors.salmon};
  }

  &:hover svg {
    fill: ${colors.overlay};
  }
`

export const Total = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.cream};
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 16px;
`

export const CheckoutButton = styled.button`
  background-color: ${colors.cream};
  color: ${colors.salmon};
  font-size: 14px;
  font-weight: 700;
  width: 100%;
  padding: 4px 0;
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(0.94);
  }
`

export const Empty = styled.p`
  color: ${colors.cream};
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  margin: auto 0;
`
