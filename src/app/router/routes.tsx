import { createBrowserRouter } from "react-router-dom";
import Layout from "../../widgets/layout/ui/Layout";
import CharacterPage from "../../pages/characters/ui/CharactersPage";
import FavoritePage from "../../pages/favorites/ui/FavoritesPage";
import CharacterDetailsPage from "../../pages/character-details/ui/CharacterDetailsPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <CharacterPage /> },
      { path: "/favorites", element: <FavoritePage /> },
    ],
  },
  {
    path: "/characters/:id",
    element: <CharacterDetailsPage />,
  },
]);
