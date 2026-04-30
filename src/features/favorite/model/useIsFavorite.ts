import { useAppSelector } from '../../../app/store/hooks'

export function useIsFavorite(id: number) {
  const favoriteStore = useAppSelector((state) => state.favorite.ids)
  return favoriteStore.includes(id)
}
