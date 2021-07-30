import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isGlutenFree: false,
  isVegetarian: false,
  isLactoseFree: false,
  isVegan: false,
};

export const filtersSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    saveFilters: (state, action) => {
      state.isGlutenFree = action.payload.isGlutenFree;
      state.isVegetarian = action.payload.isVegetarian;
      state.isLactoseFree = action.payload.isLactoseFree;
      state.isVegan = action.payload.isVegan;
    },
  },
});

export const { saveFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
