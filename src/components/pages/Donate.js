import React from "react";
import "../../assets/forms.css";
import Toolbar from "../Toolbar";
import { Link } from "react-router-dom";

function Donate() {
    return (
        <React.Fragment>
            <Toolbar />
            <form className="donate-form">
                <header>
                    <h1>Donate today!</h1>
                    <h4>Thank you for your contribution</h4>
                </header>

                <div class="form-row">
                    <div class="form-group col-md-12">
                        <label for="dishName">Dish name</label>
                        <input type="dish" class="form-control" id="dishName" />
                    </div>
                    <div class="form-group col-md-12">
                        <label for="quantity">Quantity</label>
                        <input type="quantity" class="form-control" id="quantity" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="consumeBy">Consume By</label>
                    <input type="date" class="form-control" id="consumeBy" />
                </div>

                <button type="submit" class="btn btn-primary">Save</button>
                <Link to="/Register"><button type="submit" class="btn btn-secondary">Register</button></Link>
            </form>
        </React.Fragment>
    )
}

export default Donate;