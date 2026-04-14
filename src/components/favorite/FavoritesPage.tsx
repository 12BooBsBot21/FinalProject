import { useFavorite } from "./useFavorite";
import CharacterList from "../character/CharactersList";
import s from "./favoritePage.module.css";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function FavoritePage() {
  const search = useOutletContext<string>();
  const { favorite } = useFavorite();
  const navigate = useNavigate();
  if (favorite.length === 0)
    return (
      <>
        <h1>NO FAVORITES</h1>
        <button onClick={() => navigate("/")}>Back to list</button>
      </>
    );
  const filterFavorites = favorite.filter((x) =>
    x.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <div>
        <h2>FAVORITE PAGE</h2>
        <button onClick={() => navigate("/")} className={s.buttonBack}>
          Back to list
        </button>
        <CharacterList characters={search ? filterFavorites : favorite} />
      </div>
    </>
  );
}
