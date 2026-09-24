import type { InputHTMLAttributes } from 'react'

import * as S from './styles'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  name: string
  error?: string
}

/** Campo do formulário: rótulo, input e a mensagem de validação. */
const Field = ({ label, name, error, ...rest }: Props) => (
  <S.Group>
    <S.Label htmlFor={name}>{label}</S.Label>
    <S.Input
      id={name}
      name={name}
      $invalid={Boolean(error)}
      aria-invalid={Boolean(error)}
      aria-describedby={error ? `${name}-error` : undefined}
      {...rest}
    />
    {error && <S.ErrorText id={`${name}-error`}>{error}</S.ErrorText>}
  </S.Group>
)

export default Field
