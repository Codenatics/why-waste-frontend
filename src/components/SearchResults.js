import React from "react";
import '../../src/assets/SearchResults.css';

function SearchResults(props) {

    return (
        <div className="container-fluid container-sm container-md container-lg">
            <div className="results-list">
                <ul className="results-items">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </div>
        </div>
    )
}

export default SearchResults;