import { useAppSelector } from '@/app'

export function useIsFavorite(id: number) {
  const favoriteStore = useAppSelector(
    (state) => state.FavoriteSliceReducer.ids,
  )
  return favoriteStore.includes(id)
}
