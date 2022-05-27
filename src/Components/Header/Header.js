import React from 'react';
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <div className="header_section">
            <div className="container">
                <nav className="navbar navbar-dark bg-dark">
                    <a className="logo" href="index.html"><img src="assets/images/logo.png" /></a>
                    <div className="search_section">
                        <ul>
                            <li><a href="#">Log In</a></li>
                            <li><a href="#"><img src="assets/images/shopping-bag.png" /></a></li>
                            <li><a href="#"><img src="assets/images/search-icon.png" /></a></li>
                        </ul>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExample01">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <NavLink className="nav-link" exact to={"/"}>Home</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="category.html">Category</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="products.html">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="clients.html">Client</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact.html">Contact Us</a>
                            </li> */}
                        </ul>
                    </div>
                </nav>
            </div>
        </div>

    );
}

export default Header;