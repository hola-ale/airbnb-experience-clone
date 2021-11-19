import React from "react";
import "./Navbar.css"
import logo from "../../images/AirbnbExperiences.png"

export default function Navbar() {
    return(
        <nav>
            <img src={ logo } className="nav--logo " alt="" />
        </nav>
    )
}