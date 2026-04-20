import React, { useState } from "react";
import { favoriteContext } from "./FavoriteContext";
import { loadLocalStorage, saveLocalStorage } from "./LocalStorage";

export function ContextFavoriteProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const LockStorArr = loadLocalStorage();
  const [favorite, setFavorite] = useState<number[]>(LockStorArr);
  function isFavorite(id: number) {
    const resultSearchingId = favorite.filter((x) => x === id);
    if (resultSearchingId.length <= 0) return false;
    return true;
  }
  function toggleFavorite(characterId: number): void {
    const resultSearchChar = isFavorite(characterId);
    const newFavoriteArr: number[] = [];
    if (!resultSearchChar) {
      newFavoriteArr.push(...favorite, characterId);
    } else if (resultSearchChar) {
      const deletedCharacterFromFavorite = favorite.filter(
        (x) => x !== characterId,
      );
      newFavoriteArr.splice(
        0,
        newFavoriteArr.length,
        ...deletedCharacterFromFavorite,
      );
    } else {
      console.error("we have a problem with this character");
      return;
    }
    setFavorite(newFavoriteArr);
    saveLocalStorage(newFavoriteArr);
  }
  return (
    <favoriteContext.Provider value={{ favorite, isFavorite, toggleFavorite }}>
      {children}
    </favoriteContext.Provider>
  );
}
