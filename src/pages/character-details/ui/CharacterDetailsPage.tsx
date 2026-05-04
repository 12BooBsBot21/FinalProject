import { useNavigate, useParams } from 'react-router-dom'

import { useFetch } from '@/shared/index'
import type { Character } from '@/entities/character'
import DetailsMainPage from './DetailsMainPage'
import { toggleFavorite } from '@/features/favorite'
import { useAppDispatch, useAppSelector } from '@/app'
import {
  NotCorrectIndicate,
  ShowError,
  ShowLoading,
  ShowNoData,
  ShowNotFound,
} from '@/shared/index'

export function CharacterDetailsPage() {
  const dispatch = useAppDispatch()
  const { id } = useParams()
  const numericId = Number(id)

  const isValidId = Number.isInteger(numericId) && numericId > 0

  const endUrl = isValidId ? id : ''
  const navigate = useNavigate()

  const { data, isLoading, error, statusResponse } = useFetch<Character>(
    endUrl ? `/${endUrl}` : '',
  )
  const favoritesIds = useAppSelector((state) => state.FavoriteSliceReducer.ids)
  const favorite = data ? favoritesIds.includes(data.id) : false
  const handleToggleFavorite = (id: number) => {
    dispatch(toggleFavorite(id))
  }

  if (!isValidId) {
    return (
      <NotCorrectIndicate buttonHome={true}>не коректный id</NotCorrectIndicate>
    )
  }

  if (isLoading) {
    return <ShowLoading>Загрузка</ShowLoading>
  }

  if (statusResponse === 404) {
    return <ShowNotFound>Персонаж с таким id не найден.</ShowNotFound>
  }

  if (error) {
    return <ShowError buttonHome={true}>{error}</ShowError>
  }

  if (!data) {
    return <ShowNoData buttonHome={true}>non data</ShowNoData>
  }

  return (
    <DetailsMainPage
      data={data}
      navigate={navigate}
      onToggleFavorite={handleToggleFavorite}
      favorite={favorite}
    />
  )
}
