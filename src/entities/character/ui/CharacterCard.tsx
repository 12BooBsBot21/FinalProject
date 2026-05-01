import { Link } from 'react-router-dom'
import type { Character } from '@/entities/character'
import s from './allCharacterComponents.module.css'
import { toggleFavorite } from '../../../features/favorite/model/favoriteSlice'
import { useAppDispatch } from '@/app/store'
import { useIsFavorite } from '@/features/favorite'
interface CharacterCardProps {
  character: Character
}

export function CharacterCard({ character }: CharacterCardProps) {
  const dispatch = useAppDispatch()
  const favorite = useIsFavorite(character.id)
  return (
    <article className={s.card}>
      <Link to={`/characters/${character.id}`} className={s.cardLink}>
        <div className={s.cardImageWrapper}>
          <img
            src={character.image}
            alt={character.name}
            className={s.cardImage}
          />
        </div>
        <div className={s.cardContent}>
          <h3 className={s.cardTitle}>{character.name}</h3>
          <p className={s.cardStatus}>
            <span className={s.cardStatusLabel}>Status:</span>{' '}
            {character.status}
          </p>
        </div>
      </Link>
      <div className={s.cardAction}>
        <button
          type="button"
          onClick={() => dispatch(toggleFavorite(character.id))}
          className={`${s.button} 
            ${favorite ? s.buttonPrimary : s.buttonSecondary}`}
        >
          {favorite ? '♥ В избранном' : '♡ В избранное'}
        </button>
      </div>
    </article>
  )
}
