import { BrowserRouter } from 'react-router-dom'

import AppRoutes from './routes'
import CartProvider from './contexts/CartProvider'
import { GlobalStyle } from './styles'

const App = () => (
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <CartProvider>
      <GlobalStyle />
      <AppRoutes />
    </CartProvider>
  </BrowserRouter>
)

export default App
