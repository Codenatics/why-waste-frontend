import React, { useState } from 'react';
import LandingPage from './components/pages/LandingPage';
import SearchResultsPage from './components/pages/SearchResults';
import {Route, Switch} from 'react-router-dom';
import PostcodeLookup from 'react-postcode-lookup'

function App() {

  return (
    <Switch>
      <Route path="/SearchResults" component={SearchResultsPage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  );
}

export default App;
