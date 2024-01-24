import React from 'react';
import "./FavoriteMessage.css"

export default function FavoriteMessage({ type, text, onClose }) {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };
  
  return (
    <div className="message-overlay">
      <div className={`message ${type}`}>
      <span className="close-button" onClick={handleClose}>&times;</span>
        {text}
      </div>
    </div>
  );
}
