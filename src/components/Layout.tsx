import { Link, Outlet } from "react-router-dom";
import SearchBar from "./searchBar/SearchBar";
import { useState } from "react";

export default function Layout() {
  const [search, setSearch] = useState<string>("");
  return (
    <div>
      <h1>Rick and Morty</h1>
      <Link to={"/favorites"} className="buttonFavorite">
        избранное
      </Link>
      <SearchBar valueSearching={search} setValueSearching={setSearch} />
      <Outlet context={search} />
    </div>
  );
}
