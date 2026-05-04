import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { FavoriteSliceReducer, saveLocalStorage } from '@/features/favorite'

const rootReducer = combineReducers({
  FavoriteSliceReducer,
})
export const setUpStore = () => {
  const store = configureStore({
    reducer: rootReducer,
  })
  store.subscribe(() => {
    const state = store.getState()
    saveLocalStorage(state.FavoriteSliceReducer.ids)
  })
  return store
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setUpStore>
export type AppDispatch = AppStore['dispatch']
