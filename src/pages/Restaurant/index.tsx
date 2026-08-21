import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import DishCard from '../../components/DishCard'
import DishModal from '../../components/DishModal'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { getRestaurantBySlug } from '../../data/restaurants'
import { useCart } from '../../contexts/useCart'
import type { Dish } from '../../types'

import * as S from './styles'

const Restaurant = () => {
  const { slug } = useParams()
  const restaurant = getRestaurantBySlug(slug)
  const { addToCart } = useCart()
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null)

  useEffect(() => {
    if (restaurant) {
      document.title = `efood - ${restaurant.title}`
    }
  }, [restaurant])

  if (!restaurant) {
    return <Navigate to="/404" replace />
  }

  const handleAddToCart = (dish: Dish) => {
    addToCart(dish)
    setSelectedDish(null)
  }

  return (
    <>
      <Header variant="inner" />
      <Banner restaurant={restaurant} />

      <S.Main>
        <S.List className="container">
          {restaurant.dishes.map((dish) => (
            <li key={dish.id}>
              <DishCard dish={dish} onOpenDetails={setSelectedDish} />
            </li>
          ))}
        </S.List>
      </S.Main>

      <DishModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onAddToCart={handleAddToCart}
      />

      <Footer />
    </>
  )
}

export default Restaurant
