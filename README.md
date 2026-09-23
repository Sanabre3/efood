# efood

Projeto de restaurantes e delivery construído em React a partir do layout
[efood no Figma](https://www.figma.com/file/JjduV2Tg713TzYUUsees8b/efood?type=design&node-id=0-1&mode=design),
com o conteúdo carregado por AJAX a partir da
[API do efood](https://api-ebac.vercel.app/api/efood/restaurantes).

## Funcionalidades

- **Home** (`/`) — cabeçalho com a chamada da marca e a lista de restaurantes
  vinda da API, em cards com tags de destaque/categoria, nota de avaliação e
  link para o perfil.
- **Perfil do restaurante** (`/restaurantes/:id`) — busca o restaurante pelo id
  na API e exibe o banner e a grade de pratos do cardápio.
- **Modal do prato** — abre ao clicar em "Adicionar ao carrinho" no card, com
  foto, descrição completa, porção e o botão de compra com o preço formatado
  (fecha no X, no clique fora ou com `Esc`).
- **Carrinho** — painel lateral com os pratos adicionados, valor total (soma
  do preço dos itens), remoção item a item e botão de entrega; abre ao
  adicionar um prato ou ao clicar no contador do cabeçalho, e o estado é
  controlado por Redux.
- **Estados da requisição** — indicador de carregamento e mensagem de erro em
  cada página; um id inexistente cai na página 404.
- **404** — qualquer rota inexistente cai em uma página de erro com retorno à home.
- Layout responsivo (desktop, tablet e mobile).

## Tecnologias

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Styled Components](https://styled-components.com/) para toda a estilização
- [React Router](https://reactrouter.com/) para a navegação entre páginas
- [Redux Toolkit](https://redux-toolkit.js.org/) para o estado do carrinho
- `fetch` + hook próprio (`useFetch`) para o consumo da API

## Consumo da API

`src/services/api.ts` concentra os endpoints e `src/hooks/useFetch.ts` faz a
requisição devolvendo os três estados (`isLoading`, `error` e `data`),
cancelando a chamada se o componente sair da tela.

| Tela | Endpoint |
| --- | --- |
| Home | `GET /api/efood/restaurantes` |
| Perfil | `GET /api/efood/restaurantes/:id` |

## Carrinho (Redux)

O estado fica no slice `cart` (`src/store/reducers/cart.ts`), com as ações
`add`, `remove`, `clear`, `open` e `close`. Adicionar um prato empilha o item
e abre o painel; a remoção é feita pela posição na lista, para que pratos
repetidos sejam tratados de forma independente. O valor da compra é a soma
do preço dos itens, calculada pelo seletor `selectCartTotal`.

## Estrutura

```
src/
├── components/      # Header, Footer, Banner, Button, Tag, RestaurantCard, DishCard, DishModal, Cart, Loader, Message, Logo
├── data/            # massa de exemplo no formato da API (referência offline)
├── hooks/           # useFetch
├── pages/           # Home, Restaurant, NotFound
├── services/        # endpoints da API
├── store/           # store do Redux e slice do carrinho
├── styles/          # estilos globais, cores e breakpoints
├── utils/           # formatação de preço/descrição e textura do cabeçalho
├── routes.tsx       # rotas da aplicação
└── App.tsx
```

Cada componente segue o padrão `index.tsx` (marcação) + `styles.ts`
(styled-components).

## Rodando localmente

```bash
npm install
npm run dev
```

A aplicação sobe em `http://localhost:5173/`.

## Build e publicação

```bash
npm run build   # gera dist/
```

O deploy é feito na **Vercel** a partir deste repositório: o `vercel.json`
reescreve todas as rotas para o `index.html`, para que URLs como
`/restaurantes/1` funcionem ao serem acessadas diretamente.
