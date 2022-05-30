import React from 'react';

function Products(props) {
    return (
        <div className="product_section layout_padding">
            <div className="container">
                <h1 className="feature_taital">FEATURED PRODUCTS</h1>
                <p className="feature_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking</p>
                <div className="product_section_2">
                    <div className="row">
                        <div className="col-sm-5">
                            <div className="feature_box">
                                <h1 className="readable_text">Readable content of</h1>
                                <div><img src="images/img-7.png" className="image_7" /></div>
                            </div>
                            <div className="feature_box_1">
                                <h1 className="readable_text">Readable content of</h1>
                                <div><img src="images/img-7.png" className="image_7" /></div>
                            </div>
                        </div>
                        <div className="col-sm-7">
                            <div className="feature_box_2">
                                <h1 className="readable_text">Readable content of</h1>
                                <div><img src="images/img-8.png" className="image_8" /></div>
                                <div className="seemore_bt"><a href="#">see More</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Products;