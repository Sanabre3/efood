import * as S from './styles'

type Props = {
  children: string
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'link'
  to?: string
  title?: string
  onClick?: () => void
}

const Button = ({
  children,
  variant = 'primary',
  type = 'button',
  to,
  title,
  onClick
}: Props) => {
  if (type === 'link' && to) {
    return (
      <S.ButtonLink to={to} title={title} $variant={variant}>
        {children}
      </S.ButtonLink>
    )
  }

  return (
    <S.ButtonContainer
      type="button"
      title={title}
      onClick={onClick}
      $variant={variant}
    >
      {children}
    </S.ButtonContainer>
  )
}

export default Button
