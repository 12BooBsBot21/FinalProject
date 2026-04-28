import { ShowNotFound } from "../../../shared/ui/state-view/StateView";
import type { Character } from "../model/types";
import CharacterCard from "./CharacterCard";
import s from "./allCharacterComponents.module.css";

interface CharacterListProps {
  characters: Character[];
}

export default function CharacterList({ characters }: CharacterListProps) {
  if (characters.length === 0)
    return <ShowNotFound>Ничего не найдено по вашему запросу.</ShowNotFound>;
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
