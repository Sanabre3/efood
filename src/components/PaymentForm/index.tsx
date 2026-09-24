import type { FormEvent } from 'react'

import Field from '../Form'
import * as F from '../Form/styles'
import * as S from './styles'
import { compose, digits, minLength, required, useForm } from '../../hooks/useForm'
import { formatPrice } from '../../utils'
import type { Payment } from '../../types'

type Props = {
  total: number
  isSubmitting: boolean
  error: string | null
  onSubmit: (payment: Payment) => void
  onBack: () => void
}

const currentYear = new Date().getFullYear()

const validators = {
  name: compose(required('o nome no cartão'), minLength('O nome', 5)),
  number: compose(required('o número do cartão'), digits('O cartão', 16)),
  code: compose(required('o CVV'), digits('O CVV', 3)),
  month: (value: string) => {
    const month = Number(value)

    return Number.isInteger(month) && month >= 1 && month <= 12
      ? undefined
      : 'Informe um mês entre 1 e 12.'
  },
  year: (value: string) => {
    const year = Number(value)

    return Number.isInteger(year) && year >= currentYear
      ? undefined
      : `Informe um ano a partir de ${currentYear}.`
  }
}

/** Etapa de pagamento: dados do cartão e envio do pedido. */
const PaymentForm = ({ total, isSubmitting, error, onSubmit, onBack }: Props) => {
  const { values, errors, handleChange, validate } = useForm(
    { name: '', number: '', code: '', month: '', year: '' },
    validators
  )

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (!validate()) return

    onSubmit({
      card: {
        name: values.name.trim(),
        number: values.number.replace(/\D/g, ''),
        code: Number(values.code.replace(/\D/g, '')),
        expires: {
          month: Number(values.month),
          year: Number(values.year)
        }
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <F.Title>Pagamento - Valor a pagar {formatPrice(total)}</F.Title>

      <Field
        label="Nome no cartão"
        name="name"
        value={values.name}
        error={errors.name}
        onChange={handleChange}
      />

      <S.CardRow>
        <Field
          label="Número do cartão"
          name="number"
          inputMode="numeric"
          value={values.number}
          error={errors.number}
          onChange={handleChange}
        />
        <Field
          label="CVV"
          name="code"
          inputMode="numeric"
          value={values.code}
          error={errors.code}
          onChange={handleChange}
        />
      </S.CardRow>

      <F.Row>
        <Field
          label="Mês de vencimento"
          name="month"
          inputMode="numeric"
          value={values.month}
          error={errors.month}
          onChange={handleChange}
        />
        <Field
          label="Ano de vencimento"
          name="year"
          inputMode="numeric"
          value={values.year}
          error={errors.year}
          onChange={handleChange}
        />
      </F.Row>

      {error && <S.SubmitError role="alert">{error}</S.SubmitError>}

      <F.Actions>
        <F.Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Finalizando pagamento...' : 'Finalizar pagamento'}
        </F.Button>
        <F.Button type="button" onClick={onBack} disabled={isSubmitting}>
          Voltar para a edição de endereço
        </F.Button>
      </F.Actions>
    </form>
  )
}

export default PaymentForm
