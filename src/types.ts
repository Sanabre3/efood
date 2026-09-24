/** Formato devolvido pela API: https://api-ebac.vercel.app/api/efood/restaurantes */
export type Dish = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Dish[]
}

/** Payload e resposta de POST /api/efood/checkout */
export type Delivery = {
  receiver: string
  address: {
    description: string
    city: string
    zipCode: string
    number: number
    complement?: string
  }
}

export type Payment = {
  card: {
    name: string
    number: string
    code: number
    expires: {
      month: number
      year: number
    }
  }
}

export type CheckoutPayload = {
  products: { id: number; price: number }[]
  delivery: Delivery
  payment: Payment
}

export type CheckoutResponse = {
  orderId: string
}
