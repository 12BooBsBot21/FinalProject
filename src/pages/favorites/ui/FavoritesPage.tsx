import { CharacterList } from '@/entities/character'
import s from './favoritePage.module.css'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { useFetch } from '@/shared/index'
import type { Character } from '@/entities/character'
import { useAppSelector } from '@/app'
import { ShowError, ShowLoading, ShowNotFound } from '@/shared/index'

export function FavoritePage() {
  const search = useOutletContext<string>()
  const favoriteIds = useAppSelector((state) => state.FavoriteSliceReducer.ids)
  const endUrl = favoriteIds.length > 0 ? `/${favoriteIds.join(',')}` : ''
  const { data, isLoading, error } = useFetch<Character | Character[]>(endUrl)
  const favorites = data ? (Array.isArray(data) ? data : [data]) : []

  const navigate = useNavigate()
  if (favoriteIds.length === 0)
    return (
      <ShowNotFound buttonHome={true} buttonBack={true}>
        Добавь персонажей в избранное на главной странице.
      </ShowNotFound>
    )

  if (isLoading) {
    return <ShowLoading>Загружаем список персонажей.</ShowLoading>
  }
  if (error) {
    return <ShowError>{error}</ShowError>
  }

  const filteredFavorites = favorites.filter((x) =>
    x.name.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <section className={s.pageWrapper}>
      <div className={s.pageHeader}>
        <h2 className={s.pageTitle}>Favorites</h2>
        <button onClick={() => navigate('/')} className={s.buttonBack}>
          Back to list
        </button>
      </div>
      <CharacterList characters={search ? filteredFavorites : favorites} />
    </section>
  )
}
