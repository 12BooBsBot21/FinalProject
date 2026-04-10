import { Link } from "react-router-dom";
import type { Character } from "../../types";
import { useFavorite } from "../favorite/useFavorite";
import s from "./allCharacterComponents.module.css";
interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const { isFavorite, toggleFavorite } = useFavorite();

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
            <span className={s.cardStatusLabel}>Status:</span>{" "}
            {character.status}
          </p>
        </div>
      </Link>
      <div className={s.cardAction}>
        <button
          type="button"
          onClick={() => toggleFavorite(character)}
          className={`${s.button} 
            ${isFavorite(character.id) ? s.buttonPrimary : s.buttonSecondary}`}
        >
          {isFavorite(character.id) ? "♥ В избранном" : "♡ В избранное"}
        </button>
      </div>
    </article>
  );
}
