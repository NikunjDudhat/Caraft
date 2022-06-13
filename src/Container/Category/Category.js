import React from 'react';

function Category(props) {
    return (
        <div className="container">
            <div className="category_section">
                <div className="row">
                    <div className="col-lg-2 col-sm-12">
                        <h1 className="category_text">Category</h1>
                    </div>
                    <div className="col-lg-10 col-sm-12 main">
                        <div className="col">
                            <div className="box_main">
                                <div className="icon_1" />
                                <h4 className="fashion_text active">New Fashion</h4>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box_main">
                                <div className="icon_2" />
                                <h4 className="fashion_text">Clothing</h4>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box_main">
                                <div className="icon_3" />
                                <h4 className="fashion_text">Watches</h4>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box_main">
                                <div className="icon_4" />
                                <h4 className="fashion_text">Accessories</h4>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box_main">
                                <div className="icon_5" />
                                <h4 className="fashion_text">Sweaters &amp; Jackets</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="category_section_2">
                <div className="row">
                    <div className="col-lg-4 col-sm-12">
                        <div className="beds_section active">
                            <h1 className="bed_text">Up to 50% off | Beds</h1>
                            <div><img src="assets/images/img-2.png" className="image_2" /></div>
                            <div className="seemore_bt"><a href="#">see More</a></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <div className="beds_section">
                            <h1 className="bed_text">organized in style</h1>
                            <div><img src="assets/images/img-3.png" className="image_2" /></div>
                            <div className="seemore_bt"><a href="#">see More</a></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <div className="beds_section">
                            <h1 className="bed_text">Refurbished mixer</h1>
                            <div><img src="assets/images/img-4.png" className="image_2" /></div>
                            <div className="seemore_bt"><a href="#">see More</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Category;