import "./App.css";
import { useFetch } from "./hooks/useFetch";
import type { CharacterResponse } from "./types";
import CharacterList from "./components/CharactersList";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { useDebounce } from "./hooks/useDebounce";
import { Link } from "react-router-dom";

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
      <Link to={"/favorites"}>избранное</Link>
      <SearchBar valueSearching={search} setValueSearching={setSearch} />
      <CharacterList characters={data?.results ?? []} />
    </div>
  );
}

export default App;
