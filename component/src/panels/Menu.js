import React from "react";
import {NavLink} from "react-router-dom";
function Menu(){
    return (
        <>
            <NavLink exact activeClassName="active_class" to="/">About Us</NavLink>
            <NavLink activeClassName="active_class" to="/contact">Contact US</NavLink>
        </>
    );
}


export default Menu;