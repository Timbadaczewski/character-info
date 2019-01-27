import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Characters from "./components/Characters/Characters";
import Races from "./components/Races";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="body">
          <Route path="/" exact component={Home} />
          <Route path="/characters" component={Characters} />
          <Route path="/races" component={Races} />
        </div>
      </>
    );
  }
}

export default App;
