import { Link } from "react-router-dom";
import type { Character } from "../types";
import { useFavorite } from "./favorite/useFavorite";

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const { isFavorite, toggleFavorite } = useFavorite();
  const iconFavorite = isFavorite(character.id) ? "♥" : "♡";
  return (
    <div>
      <Link to={`/characters/${character.id}`}>
        <img src={character.image} alt={character.name} />
        <h3>{character.name}</h3>
        <p>Status: {character.status}</p>
      </Link>
      <button onClick={() => toggleFavorite(character)}>{iconFavorite}</button>
    </div>
  );
}
