export const formatPrice = (price: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)

export const getDescription = (description: string, limit = 190) =>
  description.length > limit ? `${description.slice(0, limit - 3)}...` : description
