import React, { useState } from "react";
import type { FavoriteCharacter } from "../../types";
import { favoriteContext } from "./favoriteContext";
import { loadLockStor, saveLockStor } from "./LockalStoreg";

export function ContextFavoriteProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const LockStorArr = loadLockStor();
  const [favorite, setFavorite] = useState<FavoriteCharacter[]>(LockStorArr);
  function isFavorite(id: number) {
    const resultSearchingId = favorite.filter((x) => x.id === id);
    if (resultSearchingId.length <= 0) return false;
    return true;
  }
  function toggleFavorite(character: FavoriteCharacter): void {
    const resultSearchChar = favorite.filter((x) => x.id === character.id);
    let newFavoriteArr: FavoriteCharacter[] = [];
    if (resultSearchChar.length === 0) {
      newFavoriteArr = [{ ...character, addedAt: Date.now() }, ...favorite];
    } else if (resultSearchChar.length > 0) {
      newFavoriteArr = favorite.filter((x) => x.id !== character.id);
    } else {
      console.error("we have a problem with this character");
      return;
    }
    setFavorite(newFavoriteArr);
    saveLockStor(newFavoriteArr);
  }
  return (
    <favoriteContext.Provider value={{ favorite, isFavorite, toggleFavorite }}>
      {children}
    </favoriteContext.Provider>
  );
}
