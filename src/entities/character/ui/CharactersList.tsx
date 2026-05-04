import { ShowNotFound } from '@/shared/index'
import type { Character } from '@/entities/character'
import { CharacterCard } from '@/entities/character'
import s from './allCharacterComponents.module.css'

interface CharacterListProps {
  characters: Character[]
}

export function CharacterList({ characters }: CharacterListProps) {
  if (characters.length === 0)
    return <ShowNotFound>Ничего не найдено по вашему запросу.</ShowNotFound>
  return (
    <section className={s.listWrapper}>
      <div className={s.listGrid}>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </section>
  )
}
