import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import DishCard from '../../components/DishCard'
import DishModal from '../../components/DishModal'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import { HttpError, useFetch } from '../../hooks/useFetch'
import { endpoints } from '../../services/api'
import { add } from '../../store/reducers/cart'
import { useAppDispatch } from '../../store/hooks'
import type { Dish, Restaurant as RestaurantType } from '../../types'

import * as S from './styles'

const Restaurant = () => {
  const { id } = useParams()
  const {
    data: restaurant,
    isLoading,
    error
  } = useFetch<RestaurantType>(endpoints.restaurant(id ?? ''))
  const dispatch = useAppDispatch()
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null)

  useEffect(() => {
    document.title = restaurant ? `efood - ${restaurant.titulo}` : 'efood'
  }, [restaurant])

  if (error instanceof HttpError && error.status === 404) {
    return <Navigate to="/404" replace />
  }

  const handleAddToCart = (dish: Dish) => {
    dispatch(add(dish))
    setSelectedDish(null)
  }

  return (
    <>
      <Header variant="inner" />

      {restaurant && <Banner restaurant={restaurant} />}

      <S.Main>
        {isLoading && <Loader>Carregando cardápio...</Loader>}

        {error && (
          <Message title="Não foi possível carregar este restaurante">
            Verifique sua conexão e tente novamente em alguns instantes.
          </Message>
        )}

        {restaurant && (
          <S.List className="container">
            {restaurant.cardapio.map((dish) => (
              <li key={dish.id}>
                <DishCard dish={dish} onOpenDetails={setSelectedDish} />
              </li>
            ))}
          </S.List>
        )}
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
