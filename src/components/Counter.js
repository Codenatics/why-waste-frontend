import React from "react";
import "../assets/Counter.css"

function Counter(props) {

    return (
        <div className="container-counter">
            {props.count === 0 ? <p>Sorry, we didn't find any meals available here</p>: <p>There are {props.count} meals available:</p>}
        </div>
    )
}
export default Counter;