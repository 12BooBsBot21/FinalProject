import type { Character } from "../types";
import CharacterCard from "./CharacterCard";

interface CharacterListProps {
  characters: Character[];
}

export default function CharacterList({ characters }: CharacterListProps) {
  if (characters.length === 0) return <p>ничего не найдено</p>;
  return (
    <div className="characters-list">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}
