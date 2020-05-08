import React from "react";
import '../assets/Searchbox.css';

function SearchBox(props) {
    return (
            <div className="search-box">
                <input type="text" placeholder="Enter your postcode"></input>
                <button type="submit" class="btn btn-search">Search</button>
            </div>
    )
}

export default SearchBox;