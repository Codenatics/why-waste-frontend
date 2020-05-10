import React, { useState } from "react";
import Toolbar from "../Toolbar";
import SideDrawer from "../SideDrawer";
import SearchResults from '../../components/SearchResults';
import Counter from "../../components/Counter"

function SearchResultsPage(props) {
    const [meals, setMeals] = useState([
        { FoodType: "SEA BASS with vegetables and basil pesto sauce", Quantity: 1, UseByDate: "2020-05-23", RestaurantID: 7 , Name: "Restaurant 1"},
        { FoodType: "SPAGHETTI BOLOGNESE", Quantity: 2, UseByDate: "2020-05-23", RestaurantID: 7 , Name: "Restaurant 2"},
        { FoodType: "Vegetable Ramen Soup", Quantity: 2, UseByDate: "2020-05-23", RestaurantID: 11, Name: "Restaurant 3" },
        { FoodType: "Vegetable Ramen Soup", Quantity: 2, UseByDate: "2020-05-23", RestaurantID: 11, Name: "Restaurant 3" },
        { FoodType: "Vegetable Ramen Soup", Quantity: 2, UseByDate: "2020-05-23", RestaurantID: 11, Name: "Restaurant 3" }


    ])

    return (
        <main>
            <Toolbar />
            {/* <SideDrawer /> */}
            <Counter count={meals.length} postcode={"M14"}/>
            <div className="container">
                {meals.map(function(meal){
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