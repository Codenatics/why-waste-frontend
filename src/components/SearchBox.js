import React, { useState } from "react";
import '../assets/Searchbox.css';
import { Link, BrowserRouter, Redirect } from "react-router-dom";

function SearchBox(props) {

    const [search, setSearch] = useState("")
    const [setQuery] = useState("")

    const updatedSearch = (event) => {
        setSearch(event.target.value)
    }

    const submitQuery = (event) => {
        event.preventDefault();
            setQuery(search);
            props.submitQueryFunc()
    }

    return (
        <form className="search-box" onSubmit={submitQuery}>
            <input type="text" placeholder="Enter your postcode" value={search} onChange={updatedSearch}></input>
            <Link to="/SearchResults"><button type="submit" class="btn btn-search">Search</button></Link>
        </form>
    )
}

export default SearchBox;