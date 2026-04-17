import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import CharacterPage from "./components/CharacterPage";
import FavoritePage from "./components/favorite/FavoritesPage";
import CharacterDetailsPage from "./components/character/detailPages/CharacterDetailsPage";

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
