import React, { useState } from 'react';
import LandingPage from './components/pages/LandingPage';
import SearchResultsPage from './components/pages/SearchResultsPage';
import {Route, Switch, Router} from 'react-router-dom';
import PostcodeLookup from 'react-postcode-lookup'
import Register from "../src/components/pages/Register";

function App() {

  return (
    <Switch>
      <Route path="/SearchResults" component={SearchResultsPage} />
      <Route path="/Register" component={Register} />
      <Route path="/" component={LandingPage} />
    </Switch>
  );
}

export default App;
