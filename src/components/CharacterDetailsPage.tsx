import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import type { Character } from "../types";
import { useFavorite } from "./favorite/useFavorite";

export default function CharacterDetailsPage() {
  const { id } = useParams();
  const numericId = Number(id);
  const validId: boolean =
    id !== undefined &&
    id !== "" &&
    Number.isInteger(numericId) &&
    numericId > 0;
  const endUrl = validId ? id : "";
  const navigate = useNavigate();
  const { data, isLoading, error, statusResponse } = useFetch<Character>(
    endUrl ? `/${endUrl}` : "",
  );
  const { isFavorite, toggleFavorite } = useFavorite();

  const iconFavorite = data ? (isFavorite(data.id) ? "♥" : "♡") : false;

  if (!validId) {
    return (
      <div>
        <h1>NOT VALID ID</h1>
        <button onClick={() => navigate("/")}>Back to list</button>
      </div>
    );
  }
  if (isLoading) {
    return <h1>LOADING...</h1>;
  }
  if (statusResponse === 404) {
    return <h1>NOT FOUND CHARACTER</h1>;
  }
  if (error) {
    return <h1>ERROR:{error}</h1>;
  }
  if (!data) {
    return <h1>PAGE NOT FOUND</h1>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <img src={data.image} alt={data.name} />
      <p>status:{data.status}</p>
      <p>gender:{data.gender}</p>
      <p>species:{data.species}</p>
      <button onClick={() => navigate("/")}>Back to list</button>
      <button onClick={() => toggleFavorite(data)}>{iconFavorite}</button>
    </div>
  );
}
