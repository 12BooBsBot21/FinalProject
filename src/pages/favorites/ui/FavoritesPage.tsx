import CharacterList from "../../../entities/character/ui/CharactersList";
import s from "./favoritePage.module.css";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useFetch } from "../../../shared/api/useFetch";
import type { Character } from "../../../entities/character/model/types";
import { useAppSelector } from "../../../app/store/hooks";
import {
  ShowError,
  ShowLoading,
  ShowNotFound,
} from "../../../shared/ui/search-bar/state-view/StateView";

export default function FavoritePage() {
  const search = useOutletContext<string>();
  const favoriteIds = useAppSelector((state) => state.favorite.ids);
  const endUrl = favoriteIds.length > 0 ? `/${favoriteIds.join(",")}` : "";
  const { data, isLoading, error } = useFetch<Character | Character[]>(endUrl);
  const favorites = data ? (Array.isArray(data) ? data : [data]) : [];

  const navigate = useNavigate();
  if (favoriteIds.length === 0)
    return (
      <>
        <ShowNotFound>
          Добавь персонажей в избранное на главной странице.
        </ShowNotFound>
        <button
          type="button"
          onClick={() => navigate("/")}
          className={s.buttonBack}
        >
          Back to list
        </button>
      </>
    );

  if (isLoading) {
    return <ShowLoading>Загружаем список персонажей.</ShowLoading>;
  }
  if (error) {
    return <ShowError>{error}</ShowError>;
  }

  const filteredFavorites = favorites.filter((x) =>
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
      <CharacterList characters={search ? filteredFavorites : favorites} />
    </section>
  );
}
