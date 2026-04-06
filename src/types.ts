export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  gender: string;
}

export interface CharacterResponse {
  results: Character[];
}
export interface FavoriteCharacter extends Character {
  addedAt: number;
}
export interface FavoriteCharacterArr {
  favorites: FavoriteCharacter[];
}
