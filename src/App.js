import React, {useState} from 'react';
import LandingPage from './components/pages/LandingPage';
import SearchResultsPage from './components/pages/SearchResultsPage';
import {Route, Switch} from 'react-router-dom';
import Register from "../src/components/pages/Register";

function App() {

  return (
    <Switch>
      <Route path="/SearchResults" component={SearchResultsPage}/>
      <Route exact path="/Register" component={Register} />
      <Route exact path="/" component={LandingPage} />
    </Switch>
  );
}

export default App;
