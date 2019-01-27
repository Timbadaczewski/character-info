import React, { Component } from "react";
import Filter from "./Filter";
import Character from "./Character";

const characters = [
  { name: "char1", image: "image1" },
  { name: "char2", image: "image2" },
  { name: "char3", image: "image3" }
];

class Characters extends Component {
  render() {
    return (
      <div>
        <h1>Characters</h1>
        <p>A page to display some sort of character information</p>
        <div className="row">
          <div className="col-1">
            <Filter />
          </div>

          <div id="character-grid" className="col-11">
            {characters.map(char => {
              return <Character name={char.name} image={char.image} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Characters;
