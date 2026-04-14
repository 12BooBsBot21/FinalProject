import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { ContextFavoriteProvider } from "./components/favorite/FavoriteContextProvider.tsx";
import { routes } from "./routes.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContextFavoriteProvider>
      <RouterProvider router={routes} />
    </ContextFavoriteProvider>
  </StrictMode>,
);
