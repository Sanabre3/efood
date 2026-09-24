import type { FormEvent } from 'react'

import Field from '../Form'
import * as F from '../Form/styles'
import { compose, digits, minLength, required, useForm } from '../../hooks/useForm'
import type { Delivery } from '../../types'

type Props = {
  onSubmit: (delivery: Delivery) => void
  onBack: () => void
}

const validators = {
  receiver: compose(required('quem irá receber'), minLength('O nome', 5)),
  description: compose(required('o endereço'), minLength('O endereço', 5)),
  city: compose(required('a cidade'), minLength('A cidade', 3)),
  zipCode: compose(required('o CEP'), digits('O CEP', 8)),
  number: (value: string) =>
    /^\d+$/.test(value.trim()) ? undefined : 'Informe o número (apenas dígitos).'
}

/** Etapa de entrega: endereço para onde o pedido será enviado. */
const DeliveryForm = ({ onSubmit, onBack }: Props) => {
  const { values, errors, handleChange, validate } = useForm(
    {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: ''
    },
    validators
  )

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (!validate()) return

    onSubmit({
      receiver: values.receiver.trim(),
      address: {
        description: values.description.trim(),
        city: values.city.trim(),
        zipCode: values.zipCode.trim(),
        number: Number(values.number),
        complement: values.complement.trim() || undefined
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <F.Title>Entrega</F.Title>

      <Field
        label="Quem irá receber"
        name="receiver"
        value={values.receiver}
        error={errors.receiver}
        onChange={handleChange}
      />
      <Field
        label="Endereço"
        name="description"
        value={values.description}
        error={errors.description}
        onChange={handleChange}
      />
      <Field
        label="Cidade"
        name="city"
        value={values.city}
        error={errors.city}
        onChange={handleChange}
      />

      <F.Row>
        <Field
          label="CEP"
          name="zipCode"
          inputMode="numeric"
          placeholder="00000-000"
          value={values.zipCode}
          error={errors.zipCode}
          onChange={handleChange}
        />
        <Field
          label="Número"
          name="number"
          inputMode="numeric"
          value={values.number}
          error={errors.number}
          onChange={handleChange}
        />
      </F.Row>

      <Field
        label="Complemento (opcional)"
        name="complement"
        value={values.complement}
        onChange={handleChange}
      />

      <F.Actions>
        <F.Button type="submit">Continuar com o pagamento</F.Button>
        <F.Button type="button" onClick={onBack}>
          Voltar para o carrinho
        </F.Button>
      </F.Actions>
    </form>
  )
}

export default DeliveryForm
