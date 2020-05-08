import React, { useState } from 'react';
import "./assets/base.css";
import Toolbar from "./components/Toolbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";

function App() {

  return (
    <div style={{height:'100%'}}>
      <Toolbar />
      <SideDrawer />
      <Backdrop />
      <main style={{marginTop:'56px'}}>
        <p>This is the page content!</p>
      </main>
    </div>
  );
}

export default App;
