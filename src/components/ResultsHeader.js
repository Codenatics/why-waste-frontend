import React from "react";
import "../assets/ResultsHeader.css";


function ResultsHeader() {
    return (
            <div className="container-fluid container-sm container-md container-lg header-results">
                <div className="row header-items">
                    <div className="item col-4 col-sm-5 col-md-5 col-lg-6">Dish</div>
                    <div className="item col-1 col-sm-1 col-md-1 col-lg-1">Qty.</div>
                    <div className="item col-3 col-sm-3 col-md-3 col-lg-2">Consume by</div>
                    <div className="item col-3 col-sm-3 col-md-3 col-lg-3">From</div>
                </div>
        </div>
    )
}

export default ResultsHeader;