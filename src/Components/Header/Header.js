import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { LogoutUser } from '../../Redux/Action/auth.action';
import Alert from '../Alert/Alert';

function Header(props) {
    const cartProducts = useSelector(state => state.cart);
    const cartItem = cartProducts.cart.length;
    const [userLogin, setuserLogin] = useState(false);
    const authUser = useSelector(state => state.auth)
    const dispatch = useDispatch();


    const handleLogout = () => {
        dispatch(LogoutUser());
    }

    useEffect(
        () => {
            if (sessionStorage.getItem("user")) {
                setuserLogin(true)
            } else {
                setuserLogin(false)
            }
        }, []
    )

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
                            {authUser.user === null ?
                                <li>
                                    <NavLink to={"/Login"} className="appointment-btn scrollto">
                                        <span className="d-none d-md-inline">Login/ Signup</span>
                                    </NavLink>
                                </li> :
                                <li>
                                    <NavLink onClick={() => handleLogout()} to={"/Login"} className="appointment-btn scrollto">
                                        <span className="d-none d-md-inline">Logout</span>
                                    </NavLink>
                                </li>}
                            <li><NavLink to={"/CartDetails"}><img src="assets/images/shopping-bag.png" /><sup className='cartItem'>{cartItem}</sup></NavLink></li>
                            <li><a href="#"><img src="assets/images/search-icon.png" /></a></li>
                        </ul>
                    </div>
                    <Alert />
                </nav>
            </div>
        </div>

    );
}

export default Header;