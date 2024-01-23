import React from 'react'
import { useSelector } from 'react-redux';
import Navbar from '../Nav/Navbar';

import './CharacterDetails.css';

export default function CharacterDetails() {
    const selectedCharacter = useSelector((state) => state.characters.selectedCharacter);

  if (!selectedCharacter) {
    return <div>No character selected.</div>;
  }

  return (
    <div>
        <Navbar/>
        <div className="character-details-container">
      <div className="character-details">
        <img className="character-details-image" src={selectedCharacter.image} alt={selectedCharacter.name} />
        <div className='character-details-content'>
          <p>Name: {selectedCharacter.name}</p>
          <p>Status: {selectedCharacter.status}</p>
          <p>Species: {selectedCharacter.species}</p>
          <p>Gender {selectedCharacter.gender}</p>
          <p>Type: {selectedCharacter.type}</p>
          <p>Origin: {selectedCharacter.origin.name}</p>
        </div>
      </div>
        </div>
    </div>
  )
}
