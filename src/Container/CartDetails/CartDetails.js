import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddcartAction, Decrement, DeletecartAction, Increment } from '../../Redux/Action/cart.action';
import { getproduct } from '../../Redux/Action/product.action';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function CartDetails(props) {

    const dispatch = useDispatch();
    const products = useSelector(state => state.product);
    const cartProducts = useSelector(state => state.cart);
    const productsData = products.product;
    const cartProductsData = cartProducts.cart;

    const cartData = [];
    let Total;

    productsData.map((p) => {
        cartProductsData.map((c) => {
            if (p.id === c.id) {
                let Data = {
                    ...p,
                    quantity: c.quantity
                }
                cartData.push(Data);
            }
        })
    })

    let TotalAmount = 0;
    cartData.map((c) => {
        Total = c.product_price * c.quantity;
        TotalAmount = TotalAmount + Total;
    })

    const Discount = Math.round(TotalAmount * 0.05);
    const FinalAmount = TotalAmount - Discount;

    const handleIncrement = (id) => {
        dispatch(Increment(id))
    }

    const handleDecrement = (id) => {
        dispatch(Decrement(id))
    }


    useEffect(() => {
        dispatch(getproduct());
    }, [])

    const handleDelete = (id) => {
        dispatch(DeletecartAction(id));
    }

    return (

        <div className='product_details Cart_Details'>
            <div className='container'>
                <div className="row">
                    <div className='col-lg-9'>
                        <div className='cartBox'>
                            <h2>Add to Cart Items</h2>
                            <div className='AddCartBox'>
                                {
                                    cartData.map((c) => (
                                        <div className='CartProductDetails'>
                                            <div className='productImg' style={{ height: "112px", width: "112px", overflow: "hidden" }}>
                                                <img src={c.url} width="100%" height="auto" />
                                            </div>
                                            <div className='ProductItem'>
                                                <h3>{c.product_name}</h3>
                                                <p className='mb-3'>₹{c.product_price * c.quantity}</p>
                                                <div className='items'>
                                                    <button disabled={c.quantity === 1 && true} onClick={() => handleDecrement(c.id)}>-</button>
                                                    <div className='input'>
                                                        <input type="text" value={c.quantity} />
                                                    </div>
                                                    <button onClick={() => handleIncrement(c.id)}>+</button>
                                                </div>
                                            </div>
                                            <div className='deleteItem' onClick={() => handleDelete(c.id)}>REMOVE</div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='addProduct'>
                                <button className='addItem'>Place Order</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='Price_Details'>
                        <h2 className="title">Price Details</h2>
                        <div className='details'>
                            <p>Price ({cartData.length} item) <span>₹{TotalAmount}</span></p>
                            <p>Discount<span>- ₹{Discount}</span></p>
                        </div>
                        <div className='amount'>
                            <p>Total Amount <b><span>₹{FinalAmount}</span></b></p>
                        </div>
                        <p className='save'>You will save ₹{Discount} on this order</p>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CartDetails;