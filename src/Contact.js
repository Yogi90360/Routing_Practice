import React from "react";
import { NavLink } from "react-router-dom";

const Contact = () =>{
    return(
        <>
        <header>
            <nav>
                <ul>
                    <li>
                    <NavLink to = "/">Home</NavLink>
                    </li>
                    <li>
                    <NavLink to = "/About">About Us</NavLink>
                    </li>
                    <li>
                    <NavLink to = "/Contact">Contact Us</NavLink>
                    </li>

                </ul>
            </nav>
            <br />
            <h1>This is Contact Page</h1>
        </header>
    </>
    )
}

export default Contact;
