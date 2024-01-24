import { createSlice } from '@reduxjs/toolkit';
import * as episodesApi from './episodesApi';

const initialState = {
  episodes: [],
  selectedEpisode: null,
};

const episodesSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {
    setEpisodes: (state, action) => {
      state.episodes = action.payload;
    },
    selectEpisode: (state, action) => {
      state.selectedEpisode = action.payload;
    },
  },
});

export const { setEpisodes, selectEpisode } = episodesSlice.actions;

export const fetchEpisodesAsync = (page, searchQuery) => async (dispatch) => {
  try {
    const data = await episodesApi.fetchEpisodes(page, searchQuery);
    dispatch(setEpisodes(data.results));
  } catch (error) {
    console.error('Error fetching episodes:', error);
  }
};

export const fetchEpisodeByIdAsync = (episodeId) => async (dispatch) => {
  try {
    const data = await episodesApi.fetchEpisodeById(episodeId);
    dispatch(selectEpisode(data));
  } catch (error) {
    console.error(`Error fetching episode with ID ${episodeId}:`, error);
  }
};

export default episodesSlice.reducer;
