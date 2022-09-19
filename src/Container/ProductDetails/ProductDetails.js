import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getproduct } from '../../Redux/Action/product.action';
import { useDispatch } from 'react-redux';

function ProductDetails(props) {

    const ProductDetail = [props.location.state]
    console.log(ProductDetail);
    return (
        <div className='product_details'>
            <div className='container'>
                <div className="row">
                    {
                        ProductDetail.map((p) => (
                            <>
                                <div className="col-lg-6 col-sm-12">
                                    <div className='product_img'>
                                        <img src={p.url} />
                                    </div>
                                    <div className='addcart'>
                                        <button className='btn'>Add to cart</button>
                                        <button className='btn'>Buy now</button>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12">
                                    <h2>{p.product_name}</h2>
                                    <p>₹{p.product_price}</p>
                                    <p className='d-flex'><span className='mr-5'>Description :</span> {p.product_description}</p>
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