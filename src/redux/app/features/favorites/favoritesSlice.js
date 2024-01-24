import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
  error: null,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      if (state.favorites.length < 10) {
        state.favorites.push(action.payload);
        state.error = null;
      }
      else {
        state.error = 'Favori karakter ekleme sayısını aştınız. Başka bir karakteri favorilerden çıkarmalısınız.';
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter((character) => character.id !== action.payload.id);
      state.error = null;
    },
    removeError: (state) => {
      state.error = null;
    },
  },
});

export const { addFavorite, removeFavorite, removeError } = favoritesSlice.actions;

export default favoritesSlice.reducer;