import { useOutletContext } from "react-router-dom";
import { useDebounce } from "../hooks/useDebounce";
import { useFetch } from "../hooks/useFetch";
import type { CharacterResponse } from "../types";

import CharacterList from "./character/CharactersList";

export default function CharacterPage() {
  const search = useOutletContext<string>();
  const debounce = useDebounce(search, 1100);
  const { data, isLoading, error } = useFetch<CharacterResponse>(
    `?name=${debounce}`,
  );
  if (isLoading) return <p>загрузка...</p>;
  if (error) return <p>{error}</p>;
  if (!data) return <p>data error</p>;
  return (
    <div>
      <CharacterList characters={data.results} />
    </div>
  );
}
