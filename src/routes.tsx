import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Restaurant from './pages/Restaurant'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes/:id" element={<Restaurant />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default AppRoutes
