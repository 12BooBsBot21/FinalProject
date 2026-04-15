import { useOutletContext } from "react-router-dom";
import { useDebounce } from "../hooks/useDebounce";
import { useFetch } from "../hooks/useFetch";
import type { CharacterResponse } from "../types";

import CharacterList from "./character/CharactersList";
import s from "./character/allCharacterComponents.module.css";

export default function CharacterPage() {
  const search = useOutletContext<string>();
  const debounce = useDebounce(search, 1100);
  const { data, isLoading, error } = useFetch<CharacterResponse>(
    `?name=${debounce}`,
  );
  if (isLoading) {
    return (
      <div className={s.stateBoxWrapper}>
        <div className={s.stateBox}>
          <h2 className={s.stateTitle}>Loading...</h2>
          <p className={s.stateText}>Загружаем список персонажей.</p>
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className={s.stateBoxWrapper}>
        <div className={`${s.stateBox} ${s.stateBoxError}`}>
          <h2 className={`${s.stateTitle} ${s.stateTitleError}`}>Error</h2>
          <p className={s.stateText}>{error}</p>
        </div>
      </div>
    );
  }
  if (!data) {
    return (
      <div className={s.stateBoxWrapper}>
        <div className={s.stateBox}>
          <h2 className={s.stateTitle}>No data</h2>
          <p className={s.stateText}>Попробуй изменить запрос поиска.</p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <CharacterList characters={data.results} />
    </div>
  );
}
