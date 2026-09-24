import styled from 'styled-components'

import { colors } from '../../styles'

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.cream};
  margin-bottom: 16px;
`

export const Group = styled.div`
  margin-bottom: 8px;
`

export const Row = styled.div`
  display: flex;
  gap: 34px;

  > div {
    flex: 1;
  }
`

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.cream};
  margin-bottom: 8px;
`

export const Input = styled.input<{ $invalid?: boolean }>`
  width: 100%;
  height: 32px;
  background-color: ${colors.cream};
  border: 2px solid ${({ $invalid }) => ($invalid ? colors.error : colors.cream)};
  padding: 0 8px;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.text};

  &:focus {
    outline: 2px solid ${colors.text};
    outline-offset: 1px;
  }
`

export const ErrorText = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 700;
  color: ${colors.error};
  margin-top: 4px;
`

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;
`

export const Button = styled.button`
  background-color: ${colors.cream};
  color: ${colors.salmon};
  font-size: 14px;
  font-weight: 700;
  width: 100%;
  padding: 4px 0;
  transition: filter 0.2s ease;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  &:not(:disabled):hover {
    filter: brightness(0.94);
  }
`
