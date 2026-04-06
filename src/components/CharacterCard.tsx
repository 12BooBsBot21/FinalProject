import { Link } from "react-router-dom";
import type { Character } from "../types";

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <Link to={`/characters/${character.id}`}>
      <div>
        <img src={character.image} alt={character.name} />
        <h3>{character.name}</h3>
        <p>Status: {character.status}</p>
      </div>
    </Link>
  );
}
