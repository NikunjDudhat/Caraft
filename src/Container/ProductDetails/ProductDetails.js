import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BoltIcon from '@mui/icons-material/Bolt';
import { useDispatch, useSelector } from 'react-redux';
import { AddcartAction } from '../../Redux/Action/cart.action';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function ProductDetails(props) {

    const ProductDetail = [props.location.state];
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const history = useHistory();

    const hendleCart = (e) => {
        const CartData = {
            id:e,
            quantity:quantity
        }
        dispatch(AddcartAction(CartData))
        history.push(`/CartDetails`)
    }





    return (
        <div className='product_details'>
            <div className='container'>
                <div className="row">
                    {
                        ProductDetail.map((p) => (
                            <>
                                <div className="col-lg-6 col-sm-12">
                                    <div className='product_img mb-5'>
                                        <img src={p.url} />
                                    </div>
                                    <div className='addcart'>
                                        <button className='btn' onClick={() => hendleCart(p.id)}><ShoppingCartIcon /> Add to cart</button>
                                        <button className='btn'><BoltIcon /> Buy now</button>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12">
                                    <h2>{p.product_name}</h2>
                                    <p className='price'><span><b>Price :</b></span> ₹{p.product_price}</p>
                                    <div className='d-flex descrption'>
                                        <p><b>Description </b></p>
                                         <span className='m-0'>{p.product_description}</span></div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;