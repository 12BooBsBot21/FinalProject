import { useNavigate, useParams } from "react-router-dom";

import { useFetch } from "../../../hooks/useFetch";
import type { Character } from "../../../types";
import DetailsBadId from "./DetailsBadId";
import DetailsLoading from "./DetailsLoading";
import DetailsResponseNotFound from "./DetailsResponseNotFound";
import DetailsErrorsPage from "./DetailsErrorsPage";
import DetailsBadData from "./DetailsBadData";
import DetailsMainPage from "./DetailsMainPage";
import { toggleFavorite } from "../../RTK/userSlise";
import { useAppDispatch, useAppSelector } from "../../RTK/hookForRtk";

export default function CharacterDetailsPage() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const numericId = Number(id);

  const isValidId = Number.isInteger(numericId) && numericId > 0;

  const endUrl = isValidId ? id : "";
  const navigate = useNavigate();

  const { data, isLoading, error, statusResponse } = useFetch<Character>(
    endUrl ? `/${endUrl}` : "",
  );
  const favoritesIds = useAppSelector((state) => state.favorite.ids);
  const favorite = data ? favoritesIds.includes(data.id) : false;
  const handleToggleFavorite = (id: number) => {
    dispatch(toggleFavorite(id));
  };

  if (!isValidId) {
    return <DetailsBadId navigate={navigate} />;
  }

  if (isLoading) {
    return <DetailsLoading />;
  }

  if (statusResponse === 404) {
    return <DetailsResponseNotFound navigate={navigate} />;
  }

  if (error) {
    return <DetailsErrorsPage navigate={navigate} error={error} />;
  }

  if (!data) {
    return <DetailsBadData navigate={navigate} />;
  }

  return (
    <DetailsMainPage
      data={data}
      navigate={navigate}
      onToggleFavorite={handleToggleFavorite}
      favorite={favorite}
    />
  );
}
