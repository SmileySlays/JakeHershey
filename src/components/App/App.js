import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/:section?" component={Home}/>
      </Switch>
    );
}
}

export default App;
