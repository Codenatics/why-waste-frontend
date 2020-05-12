import React from "react";
import "../../assets/Register.css";
import { Link } from "react-router-dom";

function RegisterForm() {
    return (
        <form className="register-form">
            <header>
                <h1>Register today!</h1>
            </header>

            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputCompanyName">Company</label>
                    <input type="company" class="form-control" id="inputCompanyName" />
                </div>
                <div class="form-group col-md-6">
                    <label for="inputEmail">Email</label>
                    <input type="email" class="form-control" id="inputEmail" />
                </div>
            </div>
            <div class="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
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
            <button type="submit" class="btn btn-primary">Register</button>
            <Link to="/"><button type="submit" class="btn btn-secondary">Back</button></Link>
        </form>
    )
}

export default RegisterForm;