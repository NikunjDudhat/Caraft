import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddcartAction, BuyEmptyAction, Decrement, DeletecartAction, EmptyAction, Increment } from '../../Redux/Action/cart.action';
import { getproduct } from '../../Redux/Action/product.action';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import * as yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { Button, Form } from 'reactstrap';
import { Formik, useFormik } from 'formik';
import { DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { postOrder } from '../../Redux/Action/order.action';
import { toast } from 'react-toastify';


function CartDetails(props) {

    const dispatch = useDispatch();
    let history = useHistory();
    const products = useSelector(state => state.product);
    const cartProducts = useSelector(state => state.cart);
    const productsData = products.product;
    const cartProductsData = cartProducts.cart;
    const [placeOrder, setPlaceOrder] = useState(false);
    const cartData = [];
    const BuyData = [];
    let Total;
    let BTotal;
    const auth = useSelector(state => state.auth);
    // props.location.state.search

    let schema = yup.object().shape({
        email: yup.string().required("Please Enter Email"),
        name: yup.string().required("Please Enter Name").matches(/[abcdefghijklmnopqrstuvwxyz]+/, 'Is not in correct format'),
        phone: yup.string().required("Please Enter phone").max(10, 'please enter maximum 10 numbers '),
        address: yup.string().required("Please Enter addres"),
    });

    useEffect(() => {
        if(props?.location?.state?.search === "Buy"){
            auth.user !== null ? setPlaceOrder(true) : history.push('/login');
        }
    },[props?.location?.state?.search])

    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            phone: '',
            address: '',
        },
        validationSchema: schema,
        onSubmit: (values, { resetForm }) => {
            if(props?.location?.state?.search === "Buy"){
                let data = {
                    values, cartData
                }
                dispatch(postOrder(data));
                history.push("/");
                resetForm();
                toast.success("Your Order Successfully submit.")
                dispatch(BuyEmptyAction());   
            }else{
                let data = {
                    values, cartData
                }
                dispatch(postOrder(data));
                history.push("/");
                resetForm();
                toast.success("Your Order Successfully submit.")
                dispatch(EmptyAction());            
            }
        },
    });

    productsData.map((p) => {
        if (p.id === props?.location?.state?.id) {
            let DataBuy = {
                ...p,
                quantity: props.location.state.quantity
            }
            BuyData.push(DataBuy);
        }
    })

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
    let TotalBAmount = 0;
    cartData.map((c) => {
        Total = c.product_price * c.quantity;
        TotalAmount = TotalAmount + Total;
    })

    BuyData.map((c) => {
        BTotal = c.product_price * c.quantity;
        TotalBAmount = TotalBAmount + BTotal;
    })

    const Discount = Math.round(TotalAmount * 0.05);
    const FinalAmount = TotalAmount - Discount;

    const BDiscount = Math.round(TotalBAmount * 0.05);
    const BFinalAmount = TotalBAmount - BDiscount;

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

    const handelOrder = () => {
        auth.user !== null ? setPlaceOrder(true) : history.push('/login');
    }

    const cartProductsDD = useSelector(state => state.cart);

   

    return (
        <div className='product_details Cart_Details'>
            <div className='container'>
                <div className="row">
                    <div className='col-lg-9'>
                        {placeOrder ?
                            <Formik value={formik}>
                                <Form key={formik} onSubmit={formik.handleSubmit}>
                                    <DialogTitle>Place Order</DialogTitle>
                                    <DialogContent>
                                        <TextField
                                            autoFocus={true}
                                            margin="dense"
                                            name='email'
                                            id="email"
                                            label="Email"
                                            type="text"
                                            value={formik.values.email}
                                            fullWidth
                                            variant="standard"
                                            onChange={formik.handleChange}
                                        />
                                        {
                                            formik.errors.email ?
                                                <p className='error'>{formik.errors.email}</p> : null
                                        }
                                        <TextField
                                            margin="dense"
                                            id="product_price"
                                            label="Name"
                                            name='name'
                                            type="text"
                                            value={formik.values.name}
                                            fullWidth
                                            variant="standard"
                                            onChange={formik.handleChange}
                                        />
                                        {
                                            formik.errors.name ?
                                                <p className='error'>{formik.errors.name}</p> : null
                                        }
                                        <TextField
                                            margin="dense"
                                            id="phone"
                                            label="Phone"
                                            name='phone'
                                            type="number"
                                            value={formik.values.phone}
                                            fullWidth
                                            variant="standard"
                                            onChange={formik.handleChange}
                                        />
                                        {
                                            formik.errors.phone ?
                                                <p className='error'>{formik.errors.phone}</p> : null
                                        }
                                        <TextField
                                            margin="dense"
                                            id="Address"
                                            label="Address"
                                            name='address'
                                            type="text"
                                            value={formik.values.address}
                                            fullWidth
                                            variant="standard"
                                            onChange={formik.handleChange}
                                        />
                                        {
                                            formik.errors.address ?
                                                <p className='error'>{formik.errors.address}</p> : null
                                        }
                                    </DialogContent>
                                    <DialogActions>
                                        <Button type='submit'>Submit</Button>
                                    </DialogActions>
                                </Form>
                            </Formik> :
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
                                    <Link to={"/Category"} className='addItem'>Add Item</Link>
                                    <button className='addItem PlaceOrder' onClick={handelOrder}>Place Order</button>
                                </div>
                            </div>
                        }
                    </div>
                    {props?.location?.state?.search === "Buy" ? 
                        <div className='col-lg-3'>
                            <div className='Price_Details'>
                                <h2 className="title">Price Details</h2>
                                <div className='details'>
                                    <p>Price ({BuyData.length} item) <span>₹{TotalBAmount}</span></p>
                                    <p>Discount<span>- ₹{BDiscount}</span></p>
                                </div>
                                <div className='amount'>
                                    <p>Total Amount <b><span>₹{BFinalAmount}</span></b></p>
                                </div>
                                <p className='save'>You will save ₹{BDiscount} on this order</p>
                            </div>
                        </div> :
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
                    }
                </div>
            </div>
        </div>
    );
}

export default CartDetails;