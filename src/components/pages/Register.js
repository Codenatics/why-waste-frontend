import React from "react";
import "../../assets/forms.css";
import Toolbar from "../Toolbar"
import { Link } from "react-router-dom";

function Register() {
    return (
        <React.Fragment>
            <Toolbar />
            <form className="donate-form">
                <header>
                    <h1>Register today!</h1>
                </header>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="companyName">Company name</label>
                        <input type="text" class="form-control" id="companyName" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="email">E-mail</label>
                        <input type="text" class="form-control" id="e-mail" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="address">Address</label>
                    <input type="text" class="form-control" id="address" />
                </div>
                <div class="form-group">
                    <label for="inputAddress2">Address 2</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" class="form-control" id="inputCity" />
                    </div>

                    <div class="form-group col-md-2">
                        <label for="inputPostcode">Postcode</label>
                        <input type="text" class="form-control" id="inputPostcode" />
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Save</button>
            </form>
        </React.Fragment>
    )
}

export default Register;