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
          <div className="character-details-name">Name: {selectedCharacter.name}</div>
          <div className="character-details-name">Status: {selectedCharacter.status}</div>
          <div className="character-details-name">Species: {selectedCharacter.species}</div>
          <div className="character-details-name">Gender {selectedCharacter.gender}</div>
          <div className="character-details-name">Type: {selectedCharacter.type}</div>
          <div className="character-details-name">Origin: {selectedCharacter.origin.name}</div>
        </div>
      </div>
        </div>
    </div>
  )
}
