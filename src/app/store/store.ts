import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favorite from "../../features/favorite/model/favoriteSlice";
import { saveLocalStorage } from "../../features/favorite/lib/localStorage";

const rootReducer = combineReducers({
  favorite,
});
export const setUpStore = () => {
  const store = configureStore({
    reducer: rootReducer,
  });
  store.subscribe(() => {
    const state = store.getState();
    saveLocalStorage(state.favorite.ids);
  });
  return store;
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setUpStore>;
export type AppDispatch = AppStore["dispatch"];
