import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoritesList: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favoritesList = [...state.favoritesList, action.payload];
    },
    removeFromFavorites: (state, action) => {
      state.favoritesList = state.favoritesList.filter(
        (item) => item !== action.payload
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
