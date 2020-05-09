import React, { useState } from 'react';
import LandingPage from './components/pages/LandingPage';
import SearchResultsPage from './components/pages/SearchResults';
import {Route, Switch} from 'react-router-dom';

function App() {

  return (
    <Switch>
      <Route path="/SearchResults" component={SearchResultsPage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  );
}

export default App;
