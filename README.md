# efood

Projeto de restaurantes e delivery construído em React a partir do layout
[efood no Figma](https://www.figma.com/file/JjduV2Tg713TzYUUsees8b/efood?type=design&node-id=0-1&mode=design).

🔗 **Projeto publicado:** https://sanabre3.github.io/efood/

## Funcionalidades

- **Home** (`/`) — cabeçalho com a chamada da marca e lista de restaurantes em
  cards, com tags de destaque/categoria, nota de avaliação e link para o perfil.
- **Perfil do restaurante** (`/restaurantes/:slug`) — cabeçalho interno com
  contador do carrinho, banner do restaurante e grade de pratos.
- **Modal de prato** — abre ao clicar em "Mais detalhes", com foto, descrição,
  porção e botão para adicionar ao carrinho (fecha no X, no overlay ou com `Esc`).
- **404** — qualquer rota inexistente cai em uma página de erro com retorno à home.
- Layout responsivo (desktop, tablet e mobile).

## Tecnologias

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Styled Components](https://styled-components.com/) para toda a estilização
- [React Router](https://reactrouter.com/) para a navegação entre páginas
- [gh-pages](https://github.com/tschaub/gh-pages) para a publicação

## Estrutura

```
src/
├── components/      # Header, Footer, Banner, Button, Tag, RestaurantCard, DishCard, DishModal, Logo
├── contexts/        # CartContext (contador do carrinho)
├── data/            # restaurantes e pratos
├── pages/           # Home, Restaurant, NotFound
├── styles/          # estilos globais, cores e breakpoints
├── utils/           # formatação de preço/descrição e geração das imagens
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

A aplicação sobe em `http://localhost:5173/efood/`.

## Build e publicação

```bash
npm run build   # gera dist/ (inclui 404.html para as rotas do SPA)
npm run deploy  # publica dist/ na branch gh-pages
```

## Observação sobre as imagens

As fotos dos restaurantes e pratos são geradas em SVG por
`src/utils/images.ts`, mantendo o projeto sem dependência de assets externos.
Para usar as imagens exportadas do Figma, basta importá-las e substituir os
campos `thumb`, `cover` e `image` em `src/data/restaurants.ts`.
