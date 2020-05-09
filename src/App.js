import React, { useState } from 'react';
import "./assets/base.css";
import Toolbar from "./components/Toolbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";
import SearchBox from './components/SearchBox';
import SearchResults from './components/pages/SearchResults';

function App() {

  return (
    <div style={{height:'100%'}}>
      <Toolbar />
      {/* <SideDrawer /> */}
      {/* <Backdrop /> */}
      <main style={{marginTop:'56px'}}>
        {/* <SearchBox /> */}
        <SearchResults />
        <a href="/" id="main-link">I want to donate food</a>
      </main>
    </div>
  );
}

export default App;
