import React from 'react'
import {useDispatch, useSelector } from 'react-redux';
import Navbar from '../Nav/Navbar';
import { removeFavorite} from '../../redux/app/features/favorites/favoritesSlice';
import "./Favorite.css";

export default function Favorite() {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites.favorites);

    const handleRemoveFavorite = (character) => {
        dispatch(removeFavorite(character));
      };


  return (
    <div>
    <Navbar />

    <div className="favorites-container">
      <ul className="favorites-list">
        {favorites.map((character) => (
          <li key={character.id} className="favorite-card">
            <img className="favorite-image" src={character.image} alt={character.name} />
            <span>{character.name}</span>
            <button onClick={() => handleRemoveFavorite(character)}>Favorileren Kaldır</button>
          </li>
        ))}
      </ul>
    </div>
  </div>
  )
}
