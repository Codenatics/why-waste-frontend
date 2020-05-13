
import React, { useState } from "react";
import '../assets/Searchbox.css';
import { Link, BrowserRouter } from "react-router-dom";

function SearchBox(props) {

    const [search, setSearch] = useState("")

    const updatedSearch = (event) => {
        setSearch(event.target.value)
    }

    return (
        <form className="search-box">
            <input type="text" placeholder="Enter your postcode" value={search} onChange={updatedSearch}></input>
            <Link to={`/SearchResults?postcode=${search}`}><button class="btn btn-search">Search</button></Link>
        </form>
    )
}

export default SearchBox;