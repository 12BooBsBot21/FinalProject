import { useAppSelector } from "../../../app/store/hooks";

export default function useIsFavorite(id: number) {
  const favoriteStore = useAppSelector((state) => state.favorite.ids);
  return favoriteStore.includes(id);
}
