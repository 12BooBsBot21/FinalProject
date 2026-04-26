import type { Character } from "../model/types";
import CharacterCard from "./CharacterCard";
import s from "./allCharacterComponents.module.css";

interface CharacterListProps {
  characters: Character[];
}

export default function CharacterList({ characters }: CharacterListProps) {
  if (characters.length === 0)
    return (
      <div className={s.stateBoxWrapper}>
        <div className={s.stateBox}>
          <h1 className={s.stateTitle}>Nothing found</h1>
          <p className={s.stateText}>Ничего не найдено по вашему запросу.</p>
        </div>
      </div>
    );
  return (
    <section className={s.listWrapper}>
      <div className={s.listGrid}>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </section>
  );
}
