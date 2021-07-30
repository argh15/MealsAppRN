import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './FavoritesSlice';
import filtersReducer from './FiltersSlice';

export default configureStore({
  reducer: {
    favoritesReducer: favoritesReducer,
    filtersReducer: filtersReducer,
  },
});
