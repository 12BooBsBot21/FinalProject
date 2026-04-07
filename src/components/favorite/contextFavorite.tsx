import React, { createContext, useState } from "react";
import type { FavoriteCharacter } from "../../types";

interface FavoritesContextType {
  favorite: FavoriteCharacter[];
  isFavorite: (id: number) => boolean;
  toggleFavorite: (character: FavoriteCharacter) => void;
}
const favoriteContext = createContext<FavoritesContextType | undefined>(
  undefined,
);
export function ContextFavoriteProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [favorite, setFavorite] = useState<FavoriteCharacter[]>([]);
  function isFavorite(id: number) {
    if (typeof id === "number") {
      return true;
    } else {
      return false;
    }
  }
  function toggleFavorite(character: FavoriteCharacter) {
    const result = favorite;
    result.push(character);
    setFavorite(result);
  }
  return (
    <favoriteContext.Provider value={{ favorite, isFavorite, toggleFavorite }}>
      {children}
    </favoriteContext.Provider>
  );
}
