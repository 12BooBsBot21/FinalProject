import type { Character } from "../types";
import CharacterCard from "./CharacterCard";

interface CharacterListProps {
  characters: Character[];
}

export default function CharacterList({ characters }: CharacterListProps) {
  if (characters.length === 0)
    return (
      <p className="text-center text-gray-500 text-lg mt-10">
        ничего не найдено
      </p>
    );
  return (
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}
