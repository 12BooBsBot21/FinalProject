import { Link } from "react-router-dom";
import type { Character } from "../types";
import { useFavorite } from "./favorite/useFavorite";

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const { isFavorite, toggleFavorite } = useFavorite();
  const favorite = isFavorite(character.id);

  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <Link
        to={`/characters/${character.id}`}
        className="block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <div className="aspect-[4/4] w-full overflow-hidden bg-gray-100">
          <img
            src={character.image}
            alt={character.name}
            className="h-full w-full object-cover transition duration-300 hover:scale-105"
          />
        </div>

        <div className="space-y-2 p-4">
          <h3 className="line-clamp-1 text-lg font-semibold text-gray-900">
            {character.name}
          </h3>

          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-800">Status:</span>{" "}
            {character.status}
          </p>
        </div>
      </Link>

      <div className="px-4 pb-4">
        <button
          type="button"
          onClick={() => toggleFavorite(character)}
          className={`w-full rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            favorite
              ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-400"
          }`}
        >
          {favorite ? "♥ В избранном" : "♡ В избранное"}
        </button>
      </div>
    </article>
  );
}
