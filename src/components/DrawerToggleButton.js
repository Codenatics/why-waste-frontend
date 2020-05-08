import React from "react";
import '../assets/DrawerToggleButton.css'

function DrawerToggleButton(props) {
    return (
        <button className="toggle-button">
            <div className="toggle-button_line"></div>
            <div className="toggle-button_line"></div>
            <div className="toggle-button_line"></div>
        </button>
    )
};

export default DrawerToggleButton;