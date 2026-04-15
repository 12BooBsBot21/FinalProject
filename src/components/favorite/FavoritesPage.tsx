import { useFavorite } from "./useFavorite";
import CharacterList from "../character/CharactersList";
import s from "./favoritePage.module.css";
import { useNavigate, useOutletContext } from "react-router-dom";
import listS from "../character/allCharacterComponents.module.css";

export default function FavoritePage() {
  const search = useOutletContext<string>();
  const { favorite } = useFavorite();
  const navigate = useNavigate();
  if (favorite.length === 0)
    return (
      <div className={listS.stateBoxWrapper}>
        <div className={listS.stateBox}>
          <h2 className={listS.stateTitle}>No favorites yet</h2>
          <p className={listS.stateText}>
            Добавь персонажей в избранное на главной странице.
          </p>
          <button
            type="button"
            onClick={() => navigate("/")}
            className={s.buttonBack}
          >
            Back to list
          </button>
        </div>
      </div>
    );
  const filterFavorites = favorite.filter((x) =>
    x.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className={s.pageWrapper}>
      <div className={s.pageHeader}>
        <h2 className={s.pageTitle}>Favorites</h2>
        <button onClick={() => navigate("/")} className={s.buttonBack}>
          Back to list
        </button>
      </div>
      <CharacterList characters={search ? filterFavorites : favorite} />
    </section>
  );
}
