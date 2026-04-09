import { useFavorite } from "./useFavorite";
import CharacterList from "../character/CharactersList";
import { useNavigate } from "react-router-dom";
export default function FavoritePage() {
  const { favorite } = useFavorite();
  const navigate = useNavigate();
  if (favorite.length === 0)
    return (
      <>
        <h1>NO FAVORITES</h1>
        <button onClick={() => navigate("/")}>Back to list</button>
      </>
    );

  return (
    <>
      <div>
        <button onClick={() => navigate("/")}>Back to list</button>
        <CharacterList characters={favorite} />
      </div>
    </>
  );
}
