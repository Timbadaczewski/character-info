import React, { Component } from "react";
import Filter from "../components/Filter";
import Character from "../components/Character";

class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [
        {
          id: 15727,
          name: "C'Thun",
          urlSlug: "cthun",
          zoneId: 3428,
          availableInNormalMode: true,
          availableInHeroicMode: false,
          health: 395864,
          heroicHealth: 0,
          level: 63,
          heroicLevel: 0,
          npcs: [
            {
              id: 15727,
              name: "C'Thun",
              urlSlug: "cthun",
              creatureDisplayId: 15787
            }
          ],
          encounterFaction: -1
        },
        {
          id: 11502,
          name: "Ragnaros",
          urlSlug: "ragnaros",
          zoneId: 2717,
          availableInNormalMode: true,
          availableInHeroicMode: false,
          health: 435451,
          heroicHealth: 0,
          level: 63,
          heroicLevel: 0,
          npcs: [
            {
              id: 11502,
              name: "Ragnaros",
              urlSlug: "ragnaros",
              creatureDisplayId: 11121
            }
          ],
          encounterFaction: -1
        },
        {
          id: 11583,
          name: "Nefarian",
          urlSlug: "nefarian",
          zoneId: 2677,
          availableInNormalMode: true,
          availableInHeroicMode: false,
          health: 857706,
          heroicHealth: 0,
          level: 63,
          heroicLevel: 0,
          npcs: [
            {
              id: 11583,
              name: "Nefarian",
              urlSlug: "nefarian",
              creatureDisplayId: 11380
            }
          ],
          encounterFaction: -1
        }
      ]
    };

    this.removeCharacterHandler = this.removeCharacterHandler.bind(this);
  }

  removeCharacterHandler(e) {
    const name = e.target.name;
    let oldCharList = [...this.state.characters];
    oldCharList.map((char, index) => {
      if (char.name === name) {
        console.log(name);
      }
    });
    // console.log(updatedCharList);
    // return updatedCharList;
    // this.setState({ characters: updatedCharList });
    console.log(name);
  }

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
            {this.state.characters.map(char => {
              return (
                <Character
                  name={char.name}
                  health={char.health}
                  level={char.level}
                  removeCharacter={this.removeCharacterHandler}
                  key={char.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Characters;
