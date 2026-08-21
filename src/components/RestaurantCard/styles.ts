import styled from 'styled-components'

import { colors } from '../../styles'

export const Card = styled.article`
  background-color: ${colors.white};
  border: 1px solid ${colors.salmon};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

export const ImageArea = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 217px;
    object-fit: cover;
    display: block;
  }
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Content = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  flex: 1;

  > a {
    align-self: flex-start;
  }
`

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 16px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.salmon};
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 700;
  color: ${colors.salmon};

  svg {
    width: 21px;
    height: 21px;
    fill: #e66767;
  }
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${colors.salmon};
  margin-bottom: 16px;
  flex: 1;
`
