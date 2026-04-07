import React, { useState } from "react";
import type { FavoriteCharacter } from "../../types";
import { favoriteContext } from "./favoriteContext";

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
