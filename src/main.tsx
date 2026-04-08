import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ContextFavoriteProvider } from "./components/favorite/favoriteContextProvider.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterDetailsPage from "./components/CharacterDetailsPage.tsx";
import FavoritePage from "./components/favorite/FavoritesPage.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContextFavoriteProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/characters/:id" element={<CharacterDetailsPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
        </Routes>
      </BrowserRouter>
    </ContextFavoriteProvider>
  </StrictMode>,
);
