import React from 'react';
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <div className="header_section">
            <div className="container">
                <nav className="navbar navbar-dark bg-dark">
                    <a className="logo" href="/">Logo</a>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to={"/"}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to={"/Category"}>Category</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to={"/Products"}>Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to={"/Client"}>Client</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" exact to={"/Contact"}>Contact Us</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" exact to={"/Login"}>Login</NavLink>
                        </li>
                    </ul>
                    <div className="search_section">
                        <ul>
                            <li><NavLink to={"/Login"}>Log In</NavLink></li>
                            <li><NavLink to={"/CartDetails"}><img src="assets/images/shopping-bag.png" /></NavLink></li>
                            <li><a href="#"><img src="assets/images/search-icon.png" /></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>

    );
}

export default Header;