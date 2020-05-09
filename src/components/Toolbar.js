import React from "react";
import "../assets/Toolbar.css";
import DrawerToggleButton from "./DrawerToggleButton";
import Logo from "./Logo";

function Toolbar(props) {
    return (
        <header className="toolbar">
            <nav className="toolbar_navigation">
                <div>
                    <DrawerToggleButton />
                </div>
                <div className="toolbar-logo">
                    <a href="/"><Logo /></a>
                </div>
                <div className="spacer" />
                <div className="toolbar_navigation-items">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Donors</a></li>
                        <li><a href="/">Contact us</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )

}

export default Toolbar;