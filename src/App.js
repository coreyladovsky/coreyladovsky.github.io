import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/nav";
import { About } from "./components/about";
import Projects from "./components/project";

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <div className="App">
          <Route path="/" component={NavBar} />
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
