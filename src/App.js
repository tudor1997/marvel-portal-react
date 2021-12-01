import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import Nav from "./components/nav";
// Pages
import Home from './page/Home';
import Characters from './page/Characters';
import Comics from './page/Comics';
import Movies from './page/Movies';
import CharacterDetails from "./components/characters/CharacterDetails";

function App() {


  return (
    <Router>
      <Nav />
      <Switch>
      
        <Router exact path="/">
          <Home/>
        </Router>
        <Route exact path="/characters">
          <Characters/>
        </Route>
        <Route exact path="/characters/:id">
          <CharacterDetails/>
        </Route>
        <Route path="/comics">
          <Comics/>
        </Route>
        <Route path="/movies">
          <Movies/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
