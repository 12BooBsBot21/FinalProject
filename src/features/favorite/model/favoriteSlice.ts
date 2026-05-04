import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { FavoriteIdSlice } from '@/entities/character'
import { loadLocalStorage } from '../lib/localStorage'
const dataLocalStorage = loadLocalStorage()
const initialState: FavoriteIdSlice = {
  ids: dataLocalStorage,
}
export const FavoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<number>) {
      if (state.ids.includes(action.payload)) {
        state.ids = state.ids.filter((id) => id !== action.payload)
      } else {
        state.ids = [action.payload, ...state.ids]
      }
    },
  },
})
export default FavoriteSlice.reducer
export const toggleFavorite = FavoriteSlice.actions.toggleFavorite
