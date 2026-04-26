import { NavLink, Outlet } from "react-router-dom";
import SearchBar from "../../../shared/ui/search-bar/SearchBar";
import { useState } from "react";

export default function Layout() {
  const [search, setSearch] = useState<string>("");
  return (
    <div className="appShell">
      <header className="appHeader">
        <div className="appTitleBox">
          <h1 className="appTitle">Rick and Morty Explorer</h1>
          <p className="appSubtitle">Поиск персонажей и управление избранным</p>
        </div>
        <nav className="appNav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `buttonGhost ${isActive ? "buttonFavorite" : ""}`
            }
          >
            Главная
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `buttonGhost ${isActive ? "buttonFavorite" : ""}`
            }
          >
            Избранное
          </NavLink>
        </nav>
      </header>
      <SearchBar valueSearching={search} setValueSearching={setSearch} />
      <main className="appContent">
        <Outlet context={search} />
      </main>
    </div>
  );
}
