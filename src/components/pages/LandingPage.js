import React, { useState } from "react";
import "../../assets/base.css";
import Toolbar from "../Toolbar";
import SideDrawer from "../../components/SideDrawer";
import Backdrop from "../../components/Backdrop";
// import SearchBox from '../../components/SearchBox';
import { Link } from "react-router-dom";

function LandingPage(props) {

  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("")

  const updatedSearch = (event) => {
    setSearch(event.target.value)
  }

  const submitQuery = (event) => {
    setQuery(search)
    props.submitQueryFunc(search)
}

  return (
    <div style={{ height: '100%' }}>
      <main style={{ marginTop: '56px' }}>
        <Toolbar />
        {/* <SideDrawer /> */}
        {/* <Backdrop /> */}

        {/* <SearchBox /> */}

        <form className="search-box" onSubmit={submitQuery}>
          <input type="text" placeholder="Enter your postcode" value={search} onChange={updatedSearch}></input>
          <Link to="/SearchResults"><button type="submit" class="btn btn-search">Search</button></Link>
        </form>

        <Link to="/Register" id="main-link">I want to donate food</Link>
      </main>
    </div>
  );
}

export default LandingPage;