import React from 'react';
import { NavLink } from 'react-router-dom';

function Tabs(props) {
    return (
        <div className="product_tab">
            <NavLink className="tab_item" to={'/AddProduct'}>Add Product</NavLink>
            <NavLink className="tab_item" to={'/ListProduct'}>List Product</NavLink>
        </div>
    );
}

export default Tabs;