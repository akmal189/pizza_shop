import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    { id: 0, title: "Все пиццы" },
    { id: 1, title: "Мясные"},
    { id: 2, title: "Вегетарианские"},
    { id: 3, title: "Гриль"},
    { id: 4, title: "Острые"},
    { id: 5, title: "Закрытые"},
  ],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});

export default categoriesSlice.reducer;
