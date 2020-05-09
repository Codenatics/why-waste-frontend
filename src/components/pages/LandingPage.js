import React from "react";
import "../../assets/base.css";
import SideDrawer from "../../components/SideDrawer";
import Backdrop from "../../components/Backdrop";
import SearchBox from '../../components/SearchBox';

function LandingPage() {

    return (
      <div style={{height:'100%'}}>
        <main style={{marginTop:'56px'}}>
          <SearchBox />
          <a href="/" id="main-link">I want to donate food</a>
        </main>
      </div>
    );
  }

  export default LandingPage;