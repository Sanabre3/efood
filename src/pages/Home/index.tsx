import { useEffect } from 'react'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import RestaurantCard from '../../components/RestaurantCard'
import { useFetch } from '../../hooks/useFetch'
import { endpoints } from '../../services/api'
import type { Restaurant } from '../../types'

import * as S from './styles'

const Home = () => {
  const {
    data: restaurants,
    isLoading,
    error
  } = useFetch<Restaurant[]>(endpoints.restaurants)

  useEffect(() => {
    document.title = 'efood - restaurantes'
  }, [])

  return (
    <>
      <Header />

      <S.Main>
        {isLoading && <Loader>Carregando restaurantes...</Loader>}

        {error && (
          <Message title="Não foi possível carregar os restaurantes">
            Verifique sua conexão e tente novamente em alguns instantes.
          </Message>
        )}

        {restaurants && (
          <S.List className="container">
            {restaurants.map((restaurant) => (
              <li key={restaurant.id}>
                <RestaurantCard restaurant={restaurant} />
              </li>
            ))}
          </S.List>
        )}
      </S.Main>

      <Footer />
    </>
  )
}

export default Home
