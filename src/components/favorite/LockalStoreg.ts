import type { FavoriteCharacter } from "../../types";

export function loadLockStor(): string {
  return JSON.stringify([]);
}
export function saveLockStor(character: FavoriteCharacter): void {
  if (!character) return;
  try {
    const keyLS: string = "favorites";
    const loadFavorites = JSON.parse(loadLockStor());
    loadFavorites.push(character);
    const allCharacter = loadFavorites;
    localStorage.setItem(keyLS, JSON.stringify(allCharacter));
  } catch (e) {
    console.log(e);
  }
}
