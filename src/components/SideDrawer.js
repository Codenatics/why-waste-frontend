import React from 'react';
import '../assets/SideDrawer.css';

function SideDrawer(){
    return(
        <nav className="side-drawer">
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>Partners</a></li>
                <li><a href='/'>Contact us</a></li>
            </ul>
        </nav>
    )
}
export default SideDrawer