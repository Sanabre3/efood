import { useCallback, useState } from 'react'
import type { ChangeEvent } from 'react'

type Values = Record<string, string>

type Validators<T extends Values> = {
  [K in keyof T]?: (value: string, values: T) => string | undefined
}

type Errors<T extends Values> = Partial<Record<keyof T, string>>

/**
 * Formulário controlado com validação por campo. As mensagens aparecem ao
 * enviar e somem assim que o campo é corrigido.
 */
export const useForm = <T extends Values>(
  initialValues: T,
  validators: Validators<T>
) => {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<Errors<T>>({})

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target

      setValues((current) => ({ ...current, [name]: value }))
      setErrors((current) => ({ ...current, [name]: undefined }))
    },
    []
  )

  const validate = useCallback(() => {
    const found: Errors<T> = {}

    for (const field of Object.keys(validators) as (keyof T)[]) {
      const message = validators[field]?.(values[field], values)

      if (message) found[field] = message
    }

    setErrors(found)

    return Object.keys(found).length === 0
  }, [validators, values])

  return { values, errors, handleChange, validate }
}

export const required = (label: string) => (value: string) =>
  value.trim() ? undefined : `Informe ${label}.`

export const minLength = (label: string, length: number) => (value: string) =>
  value.trim().length >= length
    ? undefined
    : `${label} deve ter ao menos ${length} caracteres.`

export const digits = (label: string, length: number) => (value: string) =>
  value.replace(/\D/g, '').length === length
    ? undefined
    : `${label} deve ter ${length} dígitos.`

/** Aplica as regras na ordem e devolve a primeira mensagem encontrada. */
export const compose =
  <T extends Values>(...rules: ((value: string, values: T) => string | undefined)[]) =>
  (value: string, values: T) => {
    for (const rule of rules) {
      const message = rule(value, values)

      if (message) return message
    }

    return undefined
  }
