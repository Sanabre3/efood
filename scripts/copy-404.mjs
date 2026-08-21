import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

/**
 * O GitHub Pages não conhece as rotas do React Router: ao acessar
 * /efood/restaurantes/hioki-sushi diretamente ele procura um arquivo.
 * Duplicar o index.html como 404.html faz o Pages devolver a SPA e o
 * router resolve a rota no cliente.
 */
const dist = resolve(process.cwd(), 'dist')
const index = resolve(dist, 'index.html')

if (!existsSync(index)) {
  console.error('dist/index.html não encontrado. Rode o build antes.')
  process.exit(1)
}

copyFileSync(index, resolve(dist, '404.html'))
console.log('dist/404.html gerado.')
