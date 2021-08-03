import { createSlice } from '@reduxjs/toolkit';
import { MEALS } from '../data/dataDump';
const initialState = {
  filters: {
    isGlutenFree: false,
    isVegetarian: false,
    isLactoseFree: false,
    isVegan: false,
  },
  mealsList: MEALS,
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    saveFilters: (state, action) => {
      if (action.payload.isGlutenFree) {
        state.mealsList = state.mealsList.filter((meal) => meal.isGlutenFree);
      } else if (action.payload.isVegetarian) {
        state.mealsList = state.mealsList.filter((meal) => meal.isVegetarian);
      } else if (action.payload.isLactoseFree) {
        state.mealsList = state.mealsList.filter((meal) => meal.isLactoseFree);
      } else if (action.payload.isVegan) {
        state.mealsList = state.mealsList.filter((meal) => meal.isVegan);
      } else {
        state.mealsList = MEALS;
      }
    },
  },
});

export const { saveFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
