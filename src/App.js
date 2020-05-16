import React from 'react';
import LandingPage from './components/pages/LandingPage';
import SearchResultsPage from './components/pages/SearchResultsPage';
import Register from './components/pages/Register'
import {Route, Switch} from 'react-router-dom';
import Donate from "../src/components/pages/Donate";

function App() {

  return (
    <Switch>
      <Route path="/SearchResults" component={SearchResultsPage}/>
      <Route exact path="/Donate" component={Donate} />
      <Route exact path="/Register" component={Register} />
      <Route exact path="/" component={LandingPage} />
    </Switch>
  );
}

export default App;
