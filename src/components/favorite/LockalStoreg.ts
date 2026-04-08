import type { FavoriteCharacter } from "../../types";
const keyLS: string = "favorites";
export function loadLockStor(): FavoriteCharacter[] {
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
export function saveLockStor(characterArr: FavoriteCharacter[]): void {
  if (!characterArr) return;
  try {
    const allCharacter = characterArr;
    localStorage.setItem(keyLS, JSON.stringify(allCharacter));
  } catch (e) {
    console.error(e);
  }
}
