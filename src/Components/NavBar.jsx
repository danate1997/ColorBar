import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return(
    <div>
        <nav id="nav">
            <Link to={"/home"}>Home</Link>
            <Link to={"/blue"}>Blue</Link>
            <Link to={"/red"}>Red</Link>
            <Link to={"/ContactUs"}>ContactUs</Link>
            <Link to={"/Daniel"}>Daniel</Link>
        </nav>
    </div>
    )
}

export default NavBar;