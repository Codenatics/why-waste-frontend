import React, { useState } from "react";
import "../../assets/forms.css";
import Toolbar from "../Toolbar";
import { Link } from "react-router-dom";

function Donate(props) {

    const [dishName, setDishName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [consumeBy, setConsumeBy] = useState("");
    const [newDish, setNewDish] = useState("");
    const [formView, setFormView] = useState(true)
    const [thanksMessage, setThanksMessage] = useState(false)


    const handleDishNameChange = event => {
        setDishName(event.target.value)
    }

    const handleQuantityChange = event => {
        setQuantity(event.target.value)
    }

    const handleConsumeByChange = event => {
        setConsumeBy(event.target.value)
    }
    const handleSaveClick = (event) => {
        event.preventDefault()
        console.log(dishName, quantity, consumeBy)
        setFormView(false)
        setThanksMessage(true)
    }

    return (
        <React.Fragment>
            <Toolbar />
            {formView === false && thanksMessage === true? <h3 className="thanks-message" value={thanksMessage}>Your dish has been added. Thank you for your contribution.</h3> : 
            <form className="donate-form" value={formView}>
                <header>
                    <h1>Donate today!</h1>
                    <h4>Thank you for your contribution</h4>
                </header>

                <div class="form-row">
                    <div class="form-group col-md-12">
                        <label for="dishName">Dish name</label>
                        <input type="dish" class="form-control" id="dishName" value={dishName} onChange={handleDishNameChange} />
                    </div>
                    <div class="form-group col-md-12">
                        <label for="quantity">Quantity</label>
                        <input type="quantity" class="form-control" id="quantity" value={quantity} onChange={handleQuantityChange} />
                    </div>
                </div>
                <div class="form-group">
                    <label for="consumeBy">Consume By</label>
                    <input type="date" class="form-control" id="consumeBy" value={consumeBy} onChange={handleConsumeByChange} />
                </div>

                <button type="text" class="btn btn-primary" onClick={handleSaveClick}>Donate</button>
            </form>}

        </React.Fragment>
    )
}

export default Donate;