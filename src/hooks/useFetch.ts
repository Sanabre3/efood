import { useEffect, useState } from 'react'

export class HttpError extends Error {
  status: number

  constructor(status: number) {
    super(`A requisição falhou com o status ${status}.`)
    this.name = 'HttpError'
    this.status = status
  }
}

type Result<T> = {
  url: string
  data: T | null
  error: Error | null
}

/**
 * Busca os dados da API por AJAX e devolve os três estados da requisição
 * (carregando, erro e conteúdo). A resposta guarda a url que a originou, de
 * modo que trocar de endpoint volta a "carregando" sem um render extra; a
 * requisição é cancelada se o componente sair da tela antes da resposta.
 */
export const useFetch = <T>(url: string) => {
  const [result, setResult] = useState<Result<T>>({
    url: '',
    data: null,
    error: null
  })

  useEffect(() => {
    const controller = new AbortController()

    fetch(url, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new HttpError(response.status)

        return response.json() as Promise<T>
      })
      .then((data) => setResult({ url, data, error: null }))
      .catch((reason: unknown) => {
        if (controller.signal.aborted) return

        setResult({
          url,
          data: null,
          error: reason instanceof Error ? reason : new Error('Erro inesperado.')
        })
      })

    return () => controller.abort()
  }, [url])

  const isLoading = result.url !== url

  return {
    data: isLoading ? null : result.data,
    error: isLoading ? null : result.error,
    isLoading
  }
}
