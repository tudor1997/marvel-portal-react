import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import Nav from "./components/nav";
// Pages
import Home from './page/Home';
import Characters from './page/Characters';
import Comics from './page/Comics';
import Series from './page/Series';
import CharacterDetails from "./components/characters/CharacterDetails";
import SeriesDetails from "./components/series/seriesDetails";
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
        <Route exact path="/series">
          <Series/>
        </Route>
        <Route path="/series/:id">
          <SeriesDetails/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
