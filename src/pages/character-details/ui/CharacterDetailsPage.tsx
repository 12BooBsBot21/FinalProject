import { useNavigate, useParams } from "react-router-dom";

import { useFetch } from "../../../shared/api/useFetch";
import type { Character } from "../../../entities/character/model/types";
import DetailsMainPage from "./DetailsMainPage";
import { toggleFavorite } from "../../../features/favorite/model/favoriteSlice";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks";
import {
  NotCorrectIndicate,
  ShowError,
  ShowLoading,
  ShowNoData,
  ShowNotFound,
} from "../../../shared/ui/state-view/StateView";

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
    return (
      <NotCorrectIndicate button="back to lit">
        не коректный id
      </NotCorrectIndicate>
    );
  }

  if (isLoading) {
    return <ShowLoading>Загрузка</ShowLoading>;
  }

  if (statusResponse === 404) {
    return <ShowNotFound>Персонаж с таким id не найден.</ShowNotFound>;
  }

  if (error) {
    return <ShowError button="back to list">{error}</ShowError>;
  }

  if (!data) {
    return <ShowNoData button="back to list">non data</ShowNoData>;
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
