import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {


    return(
        <>
        <div className="navbar p-3 px-xl-5" >
            <NavLink className="active" to={"/"}>Home</NavLink>
            <NavLink className="active" to={"/Contact"}>Contact</NavLink>
            <NavLink className="active" to={"/Search"}>Search</NavLink>
            <NavLink className="active" to={"/Services"}>Services</NavLink>
        </div>
        
        </>
    )
;
}

export default Navbar;