import { Link } from 'react-router-dom'
import type { Character } from '@/entities/character'
import s from './allCharacterComponents.module.css'
import { toggleFavorite } from '../../../features/favorite/model/favoriteSlice'
import { useAppDispatch } from '@/app'
import { useIsFavorite } from '@/features/favorite'
import { Button, Card } from '@mantine/core'
interface CharacterCardProps {
  character: Character
}

export function CharacterCard({ character }: CharacterCardProps) {
  const dispatch = useAppDispatch()
  const isFavorite = useIsFavorite(character.id)
  return (
    <Card className={s.card}>
      <Link to={`/characters/${character.id}`} className={s.cardLink}>
        <Card.Section>
          <img
            src={character.image}
            alt={character.name}
            className={s.cardImage}
          />
        </Card.Section>
        <div className={s.cardContent}>
          <h3 className={s.cardTitle}>{character.name}</h3>
          <p className={s.cardStatus}>
            <span className={s.cardStatusLabel}>Status:</span>{' '}
            {character.status}
          </p>
        </div>
      </Link>
      <div className={s.cardAction}>
        <Button
          fullWidth
          variant={isFavorite ? 'filled' : 'light'}
          color="brand"
          onClick={() => dispatch(toggleFavorite(character.id))}
        >
          {isFavorite ? '♥ В избранном' : '♡ В избранное'}
        </Button>
      </div>
    </Card>
  )
}
