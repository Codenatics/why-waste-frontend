import React, { useState, useEffect } from "react";
import axios from "axios";
import Toolbar from "../Toolbar";
import SideDrawer from "../SideDrawer";
import SearchResults from '../SearchResults';
import Counter from "../Counter";

function SearchResultsPage(props) {
    const [meals, setMeals] = useState([]) 
   
    useEffect((submitQuery) => { 
        axios.get(`https://z0akxs8ksh.execute-api.eu-west-1.amazonaws.com/dev/restaurant/${submitQuery}`)
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
            <div className="container">
                {meals.map(meal => {
                        return (
                            <SearchResults
                                key={meal.FoodID}
                                Foodtype={meal.FoodType}
                                Quantity={meal.Quantity}
                                UseByDate={meal.UseByDate}
                                Name={meal.Name}
                                
                            />
                        )
                    })}
                   
            </div>
        </main>
    )

}

export default SearchResultsPage;