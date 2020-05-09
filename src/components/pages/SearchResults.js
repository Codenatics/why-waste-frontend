import React from "react";
import Toolbar from "../Toolbar"
import SearchResults from '../../components/SearchResults';
import Counter from "../../components/Counter"

function SearchResultsPage(props) {
    return (
        <main>
            <Toolbar />
            <Counter />
            <SearchResults />
        </main>
    )

}

export default SearchResultsPage;