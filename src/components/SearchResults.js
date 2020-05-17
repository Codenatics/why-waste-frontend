import React, { useState } from "react";
import '../../src/assets/SearchResults.css';
import moment from "moment";
import "../../src/assets/Modal.css"
import { Modal } from 'react-responsive-modal';

import 'react-responsive-modal/styles.css';
import "../assets/Modal.css"


function SearchResults(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const isOpen = () => {
        setModalIsOpen(true)
    }

    const isClosed = () => {
        setModalIsOpen(false)
    }

    return (
        <React.Fragment>
            <div className="container-fluid container-sm container-md container-lg">
                <div className="row results-items" onClick={isOpen}>
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
            <Modal open={modalIsOpen} onClose={isClosed}>
                <div className="container-modal">
                <h1>Please collect your meal at :</h1>
                <br></br>
                <h5>The Market Place</h5>
                <h5>Bolton</h5>
                <h5>BL1 2AL</h5>
                <h5>01204 937 335</h5>
                <h5>some_one@prezzo.com</h5>
                </div>
            </Modal>
            
        </React.Fragment>
    )
}

export default SearchResults;