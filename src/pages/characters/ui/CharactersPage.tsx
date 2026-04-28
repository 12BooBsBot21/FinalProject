import { useOutletContext } from "react-router-dom";
import { useDebounce } from "../../../shared/lib/useDebounce";
import { useFetch } from "../../../shared/api/useFetch";
import type { CharacterResponse } from "../../../entities/character/model/types";
import CharacterList from "../../../entities/character/ui/CharactersList";
import {
  ShowError,
  ShowLoading,
  ShowNoData,
} from "../../../shared/ui/state-view/StateView";

export default function CharacterPage() {
  const search = useOutletContext<string>();
  const nameAfterDebounce = useDebounce(search, 1100);
  const { data, isLoading, error } = useFetch<CharacterResponse>(
    `?name=${nameAfterDebounce}`,
  );
  if (isLoading) {
    return <ShowLoading>Загружаем список персонажей.</ShowLoading>;
  }
  if (error) {
    return <ShowError>{error}</ShowError>;
  }
  if (!data) {
    return <ShowNoData>non data</ShowNoData>;
  }
  return (
    <div>
      <CharacterList characters={data.results} />
    </div>
  );
}
