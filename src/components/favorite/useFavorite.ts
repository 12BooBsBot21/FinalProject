import { useContext } from "react";
import { favoriteContext } from "./favoriteContext";

export function useFavorite() {
  const contextFromReact = useContext(favoriteContext);
  if (!contextFromReact) {
    throw new Error("error: cant use context here");
  }
  return contextFromReact;
}
