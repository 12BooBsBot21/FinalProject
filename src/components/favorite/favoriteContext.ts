import { createContext } from "react";
import type { FavoriteCharacter } from "../../types";

interface FavoritesContextType {
  favorite: FavoriteCharacter[];
  isFavorite: (id: number) => boolean;
  toggleFavorite: (character: FavoriteCharacter) => void;
}
export const favoriteContext = createContext<FavoritesContextType | undefined>(
  undefined,
);
