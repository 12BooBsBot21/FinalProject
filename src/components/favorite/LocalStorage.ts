import type { FavoriteCharacter } from "../../types";
const keyLS: string = "favorites";
export function loadLocalStorage(): FavoriteCharacter[] {
  try {
    const dataLS = localStorage.getItem(keyLS);
    if (!dataLS) return [];
    const parseDataLS: FavoriteCharacter[] = JSON.parse(dataLS);
    if (!Array.isArray(parseDataLS)) return [];
    return parseDataLS;
  } catch (e) {
    console.error(e);
    return [];
  }
}
export function saveLocalStorage(characterArr: FavoriteCharacter[]): void {
  if (!characterArr) return;
  try {
    localStorage.setItem(keyLS, JSON.stringify(characterArr));
  } catch (e) {
    console.error(e);
  }
}
