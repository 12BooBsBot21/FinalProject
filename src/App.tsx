import "./App.css";
import { useFetch } from "./hooks/useFetch";
import type { CharacterResponse } from "./types";
import CharacterList from "./components/CaractersList";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { useDebounce } from "./hooks/useDebouns";

function App() {
  const [search, setSearch] = useState<string>("");
  const debounce = useDebounce(search, 1100);
  const { data, isLoading, error } = useFetch<CharacterResponse>(
    `?name=${debounce}`,
  );

  if (isLoading) return <p>загрузка...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <h1>Rick and Morty</h1>
      <SearchBar valueSearching={search} setValueSearching={setSearch} />
      <CharacterList characters={data?.results ?? []} />
    </div>
  );
}

export default App;
