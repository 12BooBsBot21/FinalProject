import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ContextFavoriteProvider } from "./components/favorite/favoriteContextProvaider.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterDetailsPage from "./components/CharacterDetailsPage.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContextFavoriteProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/characters/:id" element={<CharacterDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </ContextFavoriteProvider>
  </StrictMode>,
);
