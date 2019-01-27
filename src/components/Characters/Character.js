import React from "react";

const Character = props => {
  return (
    <div className="character">
      <p>{props.image}</p>
      <p>{props.name}</p>
    </div>
  );
};

export default Character;
