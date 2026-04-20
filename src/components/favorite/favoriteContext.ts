import { createContext } from "react";

interface FavoritesContextType {
  favorite: number[];
  isFavorite: (id: number) => boolean;
  toggleFavorite: (characterId: number) => void;
}
export const favoriteContext = createContext<FavoritesContextType | undefined>(
  undefined,
);
