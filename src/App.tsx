import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import AppRoutes from './routes'
import Cart from './components/Cart'
import { store } from './store'
import { GlobalStyle } from './styles'

const App = () => (
  <Provider store={store}>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <GlobalStyle />
      <AppRoutes />
      <Cart />
    </BrowserRouter>
  </Provider>
)

export default App
