import React, { useEffect } from "react";
import { loadCharacters } from "./action/charactersAction";
import { loadComics } from "./action/comicsAction";
import { useDispatch} from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import Nav from "./components/nav";
// Pages
import Home from './page/Home';
import Characters from './page/Characters';
import Comics from './page/Comics';
import Movies from './page/Movies';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCharacters());
    dispatch(loadComics());
  }, [dispatch]);

  return (
    <Router>
      <Nav />
      <Switch>
      
        <Router exact path="/">
          <Home/>
        </Router>
        <Route path="/characters">
          <Characters/>
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
