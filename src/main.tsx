import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { routes } from "./routes.tsx";
import { Provider } from "react-redux";
import { setUpStore } from "./components/RTK/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={setUpStore()}>
      <RouterProvider router={routes} />
    </Provider>
  </StrictMode>,
);
