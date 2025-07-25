import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from '../components/Products/productsSlice';
import categoriesReducer from '../components/Categories/categoriesSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productReducer,
  },
});
