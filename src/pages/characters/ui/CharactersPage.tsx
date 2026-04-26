import { useOutletContext } from "react-router-dom";
import { useDebounce } from "../../../shared/lib/useDebounce";
import { useFetch } from "../../../shared/api/useFetch";
import type { CharacterResponse } from "../../../entities/character/model/types";

import CharacterList from "../../../entities/character/ui/CharactersList";
import s from "../../../entities/character/ui/allCharacterComponents.module.css";

export default function CharacterPage() {
  const search = useOutletContext<string>();
  const nameAfterDebounce = useDebounce(search, 1100);
  const { data, isLoading, error } = useFetch<CharacterResponse>(
    `?name=${nameAfterDebounce}`,
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
