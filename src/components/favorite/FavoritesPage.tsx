import { useFavorite } from "./useFavorite";
import CharacterList from "../character/CharactersList";
import s from "./favoritePage.module.css";
import { useNavigate, useOutletContext } from "react-router-dom";
import listS from "../character/allCharacterComponents.module.css";
import { useFetch } from "../../hooks/useFetch";
import type { Character } from "../../types";

export default function FavoritePage() {
  const search = useOutletContext<string>();
  const { favorite } = useFavorite();
  const { data, isLoading, error } = useFetch<Character[]>(
    `/${favorite.join(",")}`,
  );

  const navigate = useNavigate();
  if (isLoading) {
    return (
      <div className={listS.stateBoxWrapper}>
        <div className={listS.stateBox}>
          <h2 className={listS.stateTitle}>Loading...</h2>
          <p className={listS.stateText}>Загружаем список персонажей.</p>
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className={listS.stateBoxWrapper}>
        <div className={`${listS.stateBox} ${listS.stateBoxError}`}>
          <h2 className={`${listS.stateTitle} ${listS.stateTitleError}`}>
            Error
          </h2>
          <p className={listS.stateText}>{error}</p>
        </div>
      </div>
    );
  }
  if (data?.length === 0 || !data)
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

  const filteredFavorites = data?.filter((x) =>
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
      <CharacterList characters={search ? filteredFavorites : data} />
    </section>
  );
}
