import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchEpisodesAsync } from '../../redux/app/features/episodes/episodesSlice';
import { fetchCharactersAsync } from '../../redux/app/features/characters/charactersSlice';

import './Search.css';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    // Burada arama yapılacak işlemleri ekleyebilirsiniz.
    // Örneğin, karakter veya bölüm araması yapabilir ve ilgili API'yi çağırabilirsiniz.
    // Aşağıda sadece konsola bir mesaj bastırılmıştır.
    console.log('Searching for:', searchQuery);

    // Bu örnekte, her iki sayfa için de arama yapılmasını sağlayan kod:
    dispatch(fetchEpisodesAsync(1, searchQuery));
    dispatch(fetchCharactersAsync(1, searchQuery));
  };
  return (
    <div className="search-container">
    <input
      type="text"
      placeholder="Search..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <button onClick={handleSearch}>Search</button>
  </div>
  )
}
