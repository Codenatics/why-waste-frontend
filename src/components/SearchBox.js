
import React, { useState } from "react";
import '../assets/Searchbox.css';
import { Link, BrowserRouter } from "react-router-dom";

function SearchBox(props) {

    const [search, setSearch] = useState("")
    const validPostcode = /^([A-Za-z][A-Ha-hJ-Yj-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$/.test(search)
        
    const updatedSearch = (event) => {
        setSearch(event.target.value)
    }

    return (
        <React.Fragment>
            <form className="search-box">
                <input type="text" placeholder="Enter your postcode: e.g. M1 3ER" value={search} onChange={updatedSearch} aria-required="true"></input>
                {!validPostcode? <button className="btn btn-search" disabled>Search</button>:
                <Link to={`/SearchResults?postcode=${search}`}><button class="btn btn-search">Search</button></Link>}
                {search.length > 5 && !validPostcode ? <h5 className="validation">We couldn't recognise that postcode – check and try again.</h5> : ""}
            </form>
        </React.Fragment>
    )
}

export default SearchBox;