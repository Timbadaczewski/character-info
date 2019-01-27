import React, { Component } from "react";
import Filter from "./Filter";

class Characters extends Component {
  render() {
    return (
      <div>
        <h1>Characters</h1>
        <p>A page to display some sort of character information</p>
        <div className="row">
          <Filter />
          <div id="character-grid" className="col-9">
            <p>Character Images</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Characters;
