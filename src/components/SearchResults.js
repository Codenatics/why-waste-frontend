import React, { useEffect } from "react";
import '../../src/assets/SearchResults.css';
import * as ReactBootStrap from "react-bootstrap"
import moment from "moment";

function SearchResults(props) {
    return (
        <div className="container-fluid container-sm container-md container-lg">
            <div className="row results-items">
                <div className="col-5 col-sm-5 col-md-5 col-lg-6">
                    {props.Foodtype}
                </div>
                <div className="col-1 col-sm-1 col-md-1 col-lg-1">
                    {props.Quantity}
                </div>
                <div className="col-3 col-sm-3 col-md-3 col-lg-2">
                    {moment(props.UseByDate).format("ddd, MMM Do")}
                </div>
                <div className="col-3 col-sm-3 col-md-3 col-lg-3">
                    {props.Name}
                </div>
            </div>
        </div>
    )
}

export default SearchResults;