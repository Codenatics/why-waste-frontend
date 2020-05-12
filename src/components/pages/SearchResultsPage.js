import React, { useState } from "react";
import Toolbar from "../Toolbar";
import SideDrawer from "../SideDrawer";
import SearchResults from '../SearchResults';
import Counter from "../Counter";

function SearchResultsPage(props) {
    const [meals, setMeals] = useState([
        { FoodType: "SEA BASS with vegetables and basil pesto sauce", Quantity: 1, UseByDate: "2020-05-23", RestaurantID: 7, Name: "Restaurant 1", Postcode: "M4 1BE" },
        { FoodType: "SPAGHETTI BOLOGNESE", Quantity: 2, UseByDate: "2020-05-23", RestaurantID: 7, Name: "Restaurant 2", Postcode: "M14 1BE" },
        { FoodType: "Vegetable Ramen Soup", Quantity: 2, UseByDate: "2020-05-23", RestaurantID: 11, Name: "Restaurant 3", Postcode: "M40 1BE" },
        { FoodType: "Vegetable Ramen Soup", Quantity: 2, UseByDate: "2020-05-23", RestaurantID: 11, Name: "Restaurant 3", Postcode: "M2 4BE" },
        { FoodType: "Vegetable Ramen Soup", Quantity: 2, UseByDate: "2020-05-23", RestaurantID: 11, Name: "Restaurant 3", Postcode: "M1 4BE" },
    ])

    return (
        <main>
            <Toolbar />
            {/* <SideDrawer /> */}
            <Counter count={meals.length} />
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