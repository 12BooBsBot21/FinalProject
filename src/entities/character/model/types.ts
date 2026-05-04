export interface Character {
  id: number
  name: string
  status: string
  species: string
  image: string
  gender: string
}

export interface CharacterResponse {
  results: Character[]
}

//favorite types
export interface FavoriteCharacter extends Character {
  addedAt?: number
}
export interface FavoriteCharacters {
  favorites: FavoriteCharacter[]
}
export interface FavoriteIdSlice {
  ids: number[]
}
