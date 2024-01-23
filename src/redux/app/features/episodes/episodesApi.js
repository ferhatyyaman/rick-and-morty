import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api/';

export const fetchEpisodes = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}episode?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching episodes:', error);
    throw error;
  }
};

export const fetchEpisodeById = async (episodeId) => {
  try {
    const response = await axios.get(`${BASE_URL}episode/${episodeId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching episode with ID ${episodeId}:`, error);
    throw error;
  }
};
