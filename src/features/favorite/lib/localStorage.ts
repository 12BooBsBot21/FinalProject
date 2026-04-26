const keyLS: string = "favorites";
export function loadLocalStorage(): number[] {
  try {
    const dataLS = localStorage.getItem(keyLS);
    if (!dataLS) return [];
    const parseDataLS: unknown = JSON.parse(dataLS);
    if (!Array.isArray(parseDataLS)) return [];
    return parseDataLS
      .map((item) => {
        if (typeof item === "number") return item;
        if (
          typeof item === "object" &&
          item !== null &&
          "id" in item &&
          typeof item.id === "number"
        ) {
          return item.id;
        }
        return null;
      })
      .filter((id): id is number => id !== null);
  } catch (e) {
    console.error(e);
    return [];
  }
}
export function saveLocalStorage(characterArr: number[]): void {
  if (!characterArr) return;
  try {
    localStorage.setItem(keyLS, JSON.stringify(characterArr));
  } catch (e) {
    console.error(e);
  }
}
