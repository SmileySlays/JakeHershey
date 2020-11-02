import React, { Component } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import ErrorPage from "../ErrorPage/ErrorPage";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/contact" component={Contact}/>
        <Route path="*" component={ErrorPage}/>
      </Switch>
      </HashRouter>
    );
}
}

export default App;
