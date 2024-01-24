import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharactersAsync, selectCharacter } from '../../redux/app/features/characters/charactersSlice';
import { addFavorite, removeFavorite, removeError } from '../../redux/app/features/favorites/favoritesSlice';
import "./CharacterList.css"
import { useParams } from 'react-router-dom'
import Navbar from '../Nav/Navbar';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';
import FavoriteMessage from '../Message/FavoriteMessage';

export default function CharacterList() {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.characters);
  const favorites = useSelector((state) => state.favorites.favorites);
  const { id } = useParams()
  const error = useSelector((state) => state.favorites.error);

  useEffect(() => {
    dispatch(fetchCharactersAsync(id)); 
  }, [dispatch,id]);

  const isFavorite = (character) => {
    return favorites.some((fav) => fav.id === character.id);
  };

  const handleFavoriteToggle = (character) => {
    if (isFavorite(character)) {
      dispatch(removeFavorite(character));
    } else {
      dispatch(addFavorite(character));
    }
  };

  const handleCharacterClick = (character) => {
    dispatch(selectCharacter(character));
  };
  const handleCloseError = () => {
    dispatch(removeError());
  };
  return (
<div>
        <Navbar/>
        <Search/>
        {error && <FavoriteMessage type="error" text={error} onClose={handleCloseError} />}
    <div className="character-list-container">
      <ul className="character-list">
        {characters.map((character) => (
            
           <li key={character.id} className="character-card">
            <Link to={`/character/${character.id}`} key={character.id} className="character-link">
            <span onClick={() => handleCharacterClick(character)}>
            <img className="character-image" src={character.image} alt={character.name}/>
              <p className="character-name">{character.name}</p>
            </span>
          </Link>
            <button onClick={() => handleFavoriteToggle(character)}>
              {isFavorite(character) ? 'Favorileren Kaldır' : 'Favorilere Ekle'}
            </button>
           </li>
          
        ))}
      </ul>
    </div>
    </div>
  );
}
