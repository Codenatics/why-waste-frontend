import React, { useState, useEffect } from "react";
import '../../assets/Searchbox.css';
import axios from "axios";
import Toolbar from "../Toolbar";
import SideDrawer from "../SideDrawer";
import SearchResults from '../SearchResults';
import Counter from "../Counter";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import ResultsHeader from "../ResultsHeader";

function SearchResultsPage(props) {
    const [meals, setMeals] = useState([]);

    const router = useLocation();
    console.log(router)

    useEffect(() => {
        const values = queryString.parse(props.location.search);
        const postcode = values.postcode
        axios.get(`https://z0akxs8ksh.execute-api.eu-west-1.amazonaws.com/dev/restaurant/${postcode}`)
            .then(response => {
                console.log("Success", response.data)
                setMeals(response.data);
            })
            .catch(err => {
                console.log("Error", err);
            });
    }, [])


    return (
        <main>
            <Toolbar />
            {/* <SideDrawer /> */}
            <Counter
                count={meals.length} />
                <ResultsHeader />
            <div className="container">
                {meals.map(meal => {
                    return (
                        <React.Fragment>
                            <SearchResults
                                key={meal.FoodID}
                                Foodtype={meal.FoodType}
                                Quantity={meal.Quantity}
                                UseByDate={meal.UseByDate}
                                Name={meal.Name}

                            />
                        </React.Fragment>

                    )
                    })}
                </div>
        </main>

    )
}

export default SearchResultsPage;