import React from "react";
import "../assets/Counter.css"

function Counter(props){
    return(
        <p>There are {props.count} meals available in {props.postcode}:</p>
    )
}
export default Counter;