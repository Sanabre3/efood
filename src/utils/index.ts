export const formatPrice = (price: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)

export const getDescription = (description: string, limit = 190) =>
  description.length > limit ? `${description.slice(0, limit - 3)}...` : description

/** A API devolve o tipo em minúsculas ("italiana"); o layout exibe capitalizado. */
export const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1)
