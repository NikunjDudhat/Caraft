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
    productsData.map((p) => {
        cartProductsData.map((c) => {
            if(p.id === c.id){
                let Data = {
                    ...p,
                    quantity : c.quantity
            }
                cartData.push(Data)
            }
        })
    })

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
                                            <div className='productImg' style={{height: "112px", width: "112px", overflow: "hidden"}}>
                                                <img src={c.url} width="100%" height="auto"  />
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
                                <div className='addProduct'>
                                    <button className='addItem'>Add Item</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'>Hello</div>
                </div>
            </div>
        </div>

        // <div className='product_details'>
        //     <div className='container'>
        //         <div className="row">
        //             {
        //                 ProductDetail.map((p) => (
        //                     <>
        //                         <div className="col-lg-6 col-sm-12">
        //                             <div className='product_img mb-5'>
        //                                 <img src={p.url} />
        //                             </div>
        //                             <div className='addcart'>
        //                                 <button className='btn' onClick={hendleCart(p.id)}><ShoppingCartIcon /> Add to cart</button>
        //                                 <button className='btn'><BoltIcon /> Buy now</button>
        //                             </div>
        //                         </div>
        //                         <div className="col-lg-6 col-sm-12">
        //                             <h2>{p.product_name}</h2>
        //                             <p className='price'><span><b>Price :</b></span> ₹{p.product_price}</p>
        //                             <div className='d-flex descrption'>
        //                                 <p><b>Description </b></p>
        //                                  <span className='m-0'>{p.product_description}</span></div>
        //                         </div>
        //                     </>
        //                 ))
        //             }
        //         </div>
        //     </div>
        // </div>
    );
}

export default CartDetails;