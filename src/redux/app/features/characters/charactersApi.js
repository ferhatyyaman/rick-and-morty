// charactersApi.js
import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api/';

export const fetchCharacters = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}character?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
};

export const fetchCharacterById = async (characterId) => {
  try {
    const response = await axios.get(`${BASE_URL}character/${characterId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching character with ID ${characterId}:`, error);
    throw error;
  }
};
