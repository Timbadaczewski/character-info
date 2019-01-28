import React from "react";

const Character = props => {
  return (
    <div className="character">
      <p>Name: {props.name}</p>
      <p>Health: {props.health}</p>
      <p>Level: {props.level}</p>
      <div>
        <button name={props.name} onClick={props.removeCharacter}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default Character;
