import React from "react";
import "./character_item.css";

function Character({ character }) {
  return (
    <div className="character-container">
      <div className="character-image-container">
        <img src={character.image} alt="" className="character-image" />
      </div>
      <div className="character-data-container">
        <h2 className="character-name">{character.name}</h2>
        <div className="character-data">
          <div className="character-data-tile">
            <p className="character-data-description">Species</p>
            <p className="character-data-value">{character.species}</p>
          </div>
          <div className="character-data-tile">
            <p className="character-data-description">Origin</p>
            <p className="character-data-value">{character.origin.name}</p>
          </div>
          <div className="character-data-tile">
            <p className="character-data-description">Location</p>
            <p className="character-data-value">{character.location.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Character;
