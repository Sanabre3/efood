import { useEffect } from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import RestaurantCard from '../../components/RestaurantCard'
import restaurants from '../../data/restaurants'

import * as S from './styles'

const Home = () => {
  useEffect(() => {
    document.title = 'efood - restaurantes'
  }, [])

  return (
    <>
      <Header />

      <S.Main>
        <S.List className="container">
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <RestaurantCard restaurant={restaurant} />
            </li>
          ))}
        </S.List>
      </S.Main>

      <Footer />
    </>
  )
}

export default Home
