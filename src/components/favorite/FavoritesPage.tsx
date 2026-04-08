import { useFavorite } from "./useFavorite";
import CharacterList from "../CaractersList";
import { useNavigate } from "react-router-dom";
export default function FavoritePage() {
  const { favorite } = useFavorite();
  const navigate = useNavigate();
  return (
    <>
      <div>
        <button onClick={() => navigate("/")}>Back to list</button>
        <CharacterList characters={favorite ?? "not found page"} />
      </div>
    </>
  );
}
