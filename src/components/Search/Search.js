import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchEpisodesAsync } from '../../redux/app/features/episodes/episodesSlice';
import { fetchCharactersAsync } from '../../redux/app/features/characters/charactersSlice';

import './Search.css';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    const cleanedQuery = searchQuery.trim();
    console.log('Searching for:', cleanedQuery);

    if (!cleanedQuery) {
      console.log('Empty search query, fetching all data');
      dispatch(fetchEpisodesAsync(1));
      dispatch(fetchCharactersAsync(1));
    } else {
      console.log('Non-empty search query, fetching data with search query');
      dispatch(fetchEpisodesAsync(1, cleanedQuery));
      dispatch(fetchCharactersAsync(1, cleanedQuery));
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress}

      />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}
