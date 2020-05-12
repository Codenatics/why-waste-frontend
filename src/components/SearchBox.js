import React, { useState } from "react";
import '../assets/Searchbox.css';
import { Link, BrowserRouter, Redirect } from "react-router-dom";

function SearchBox(props) {

    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("")

    const updateSearch = (event) => {
        setSearch(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const validPostcode = /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/.test(search)
        if (!validPostcode) {
            console.log("Please enter a valid postcode")
        } else {
            console.log(search)
            setQuery(search);
        }
    }

    return (
        <form className="search-box" onSubmit={onSubmit}>
            <input type="text" placeholder="Enter your postcode" value={search} onChange={updateSearch}></input>
            <Link to="/SearchResults"><button type="submit" class="btn btn-search">Search</button></Link>
        </form>
    )
}

export default SearchBox;

