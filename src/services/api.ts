import type { CheckoutPayload, CheckoutResponse } from '../types'

const BASE_URL = 'https://api-ebac.vercel.app/api/efood'

/** Endpoints consumidos por AJAX (`useFetch`). */
export const endpoints = {
  restaurants: `${BASE_URL}/restaurantes`,
  restaurant: (id: string | number) => `${BASE_URL}/restaurantes/${id}`,
  checkout: `${BASE_URL}/checkout`
}

/** Envia o pedido e devolve o identificador gerado pela API. */
export const checkout = async (
  payload: CheckoutPayload
): Promise<CheckoutResponse> => {
  const response = await fetch(endpoints.checkout, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })

  const data = await response.json().catch(() => null)

  if (!response.ok) {
    throw new Error(
      (data as { message?: string } | null)?.message ??
        'Não foi possível concluir o pedido.'
    )
  }

  return data as CheckoutResponse
}
