import { createSlice } from '@reduxjs/toolkit';
import * as charactersApi from './charactersApi';

const initialState = {
  characters: [],
  selectedCharacter: null,
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action.payload;
    },
    selectCharacter: (state, action) => {
      state.selectedCharacter = action.payload;
    },
  },
});

export const { setCharacters, selectCharacter } = charactersSlice.actions;

export const fetchCharactersAsync = (page,searchQuery) => async (dispatch) => {
  try {
    const data = await charactersApi.fetchCharacters(page,searchQuery);
    dispatch(setCharacters(data.results));
  } catch (error) {
    console.error('Error fetching characters:', error);
  }
};

export const fetchCharacterByIdAsync = (characterId) => async (dispatch) => {
  try {
    const data = await charactersApi.fetchCharacterById(characterId);
    dispatch(selectCharacter(data));
  } catch (error) {
    console.error(`Error fetching character with ID ${characterId}:`, error);
  }
};

export default charactersSlice.reducer;
