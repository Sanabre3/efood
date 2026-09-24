import { createGlobalStyle } from 'styled-components'

export const colors = {
  salmon: '#E66767',
  cream: '#FFEBD9',
  background: '#FFF8F2',
  white: '#FFFFFF',
  overlay: 'rgba(0, 0, 0, 0.73)',
  text: '#4B4B4B',
  error: '#7A1414',
  shadow: 'rgba(0, 0, 0, 0.16)'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  phone: '480px'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', -apple-system, 'Segoe UI', sans-serif;
  }

  body {
    background-color: ${colors.background};
    color: ${colors.salmon};
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button {
    cursor: pointer;
    border: none;
    font-size: 14px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      padding: 0 16px;
    }
  }
`
