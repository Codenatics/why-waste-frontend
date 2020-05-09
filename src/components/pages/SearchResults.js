import React from "react";
import Toolbar from "../Toolbar";
import SideDrawer from "../SideDrawer";
import SearchResults from '../../components/SearchResults';
import Counter from "../../components/Counter"

function SearchResultsPage(props) {
    return (
        <main>
            <Toolbar />
            <SideDrawer />
            <Counter />
            <SearchResults />
        </main>
    )

}

export default SearchResultsPage;