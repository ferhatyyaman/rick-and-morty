import { configureStore } from "@reduxjs/toolkit";
import episodesReducer from "./features/episodes/episodesSlice";
import charactersReducer from "./features/characters/charactersSlice";
import favoritesReducer from "./features/favorites/favoritesSlice";

export const store = configureStore({
    
    reducer: {
        episodes: episodesReducer,
        characters: charactersReducer,
        favorites: favoritesReducer,
      },
})