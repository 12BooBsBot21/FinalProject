// import "./App.css";
// import { useFetch } from "./hooks/useFetch";
// import type { CharacterResponse } from "./types";
// import CharacterList from "./components/character/CharactersList";
// import { useState } from "react";
// import SearchBar from "./components/searchBar/SearchBar";
// import { useDebounce } from "./hooks/useDebounce";
// import { Link } from "react-router-dom";

// function App() {
//   const [search, setSearch] = useState<string>("");
//   const debounce = useDebounce(search, 1100);
//   const { isLoading, error } = useFetch<CharacterResponse>(`?name=${debounce}`);

//   if (isLoading) return <p>загрузка...</p>;
//   if (error) return <p>{error}</p>;
//   return (
//     <div>
//       <h1>Rick and Morty</h1>
//       <Link to={"/favorites"} className="buttonFavorite">
//         избранное
//       </Link>
//       <SearchBar valueSearching={search} setValueSearching={setSearch} />
//       <CharacterList />
//     </div>
//   );
// }

// export default App;
