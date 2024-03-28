import React from "react";
import CharacterItem from "./CharacterItem";
import "./character_list.css";

function CharactersList({ characters }) {
  const renderedList = characters.map((character) => {
    return <CharacterItem key={character.id} character={character} />;
  });

  return (
    <div className="characters-list">
      <div className="characters-list-container">
        <h1 className="title">Characters</h1>
        {renderedList}
      </div>
    </div>
  );
}

export default CharactersList;
