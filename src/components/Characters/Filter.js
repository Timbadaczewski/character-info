import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <div id="filter" className="col-3">
        <nav>
          <h3>Filter Options</h3>
          <ul>
            <li>
              <a href="/characters">By Universe</a>
            </li>
            <br />
            <li>
              <a href="/characters">By Name</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Filter;
