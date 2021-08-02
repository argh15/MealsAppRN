import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: {
    isGlutenFree: false,
    isVegetarian: false,
    isLactoseFree: false,
    isVegan: false,
  },
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    saveFilters: (state, action) => {
      state.filters.isGlutenFree = action.payload.isGlutenFree;
      state.filters.isVegetarian = action.payload.isVegetarian;
      state.filters.isLactoseFree = action.payload.isLactoseFree;
      state.filters.isVegan = action.payload.isVegan;
    },
  },
});

export const { saveFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
