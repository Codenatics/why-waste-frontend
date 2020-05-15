import React, { useState } from "react";
import "../../assets/base.css";
import Toolbar from "../Toolbar";
import SideDrawer from "../../components/SideDrawer";
import Backdrop from "../../components/Backdrop";
import SearchBox from '../../components/SearchBox';
import { Link } from "react-router-dom";

function LandingPage(props) {

  return (
    <div style={{ height: '100%' }}>
      <main style={{ marginTop: '56px' }}>
        <Toolbar />
        {/* <SideDrawer /> */}
        {/* <Backdrop /> */}
        <SearchBox />

        <Link to="/Register" id="main-link">I want to donate food</Link>
      </main>
    </div>
  );
}

export default LandingPage;