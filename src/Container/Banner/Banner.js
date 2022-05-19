import React from 'react';

function Banner(props) {
    return (
        <div classname="banner_section layout_padding">
            <div id="my_slider" classname="carousel slide" data-ride="carousel">
                <div classname="carousel-inner">
                    <div classname="carousel-item active">
                        <div classname="container">
                            <div classname="row">
                                <div classname="col-md-6">
                                    <div classname="taital_main">
                                        <h4 classname="banner_taital"><span classname="font_size_90">50%</span> Discount Online Shop</h4>
                                        <p classname="banner_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration </p>
                                        <div classname="book_bt"><a href="#">Shop Now</a></div>
                                    </div>
                                </div>
                                <div classname="col-md-6">
                                    <div><img src="images/img-1.png" classname="image_1" /></div>
                                </div>
                            </div>
                            <div classname="button_main"><button classname="all_text">All</button><input type="text" classname="Enter_text" placeholder="Enter keywords" name /><button classname="search_text">Search</button></div>
                        </div>
                    </div>
                    <div classname="carousel-item">
                        <div classname="container">
                            <div classname="row">
                                <div classname="col-md-6">
                                    <div classname="taital_main">
                                        <h4 classname="banner_taital"><span classname="font_size_90">50%</span> Discount Online Shop</h4>
                                        <p classname="banner_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration </p>
                                        <div classname="book_bt"><a href="#">Shop Now</a></div>
                                    </div>
                                </div>
                                <div classname="col-md-6">
                                    <div><img src="images/img-1.png" classname="image_1" /></div>
                                </div>
                            </div>
                            <div classname="button_main"><button classname="all_text">All</button><input type="text" classname="Enter_text" placeholder="Enter keywords" name /><button classname="search_text">Search</button></div>
                        </div>
                    </div>
                    <div classname="carousel-item">
                        <div classname="container">
                            <div classname="row">
                                <div classname="col-md-6">
                                    <div classname="taital_main">
                                        <h4 classname="banner_taital"><span classname="font_size_90">50%</span> Discount Online Shop</h4>
                                        <p classname="banner_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration </p>
                                        <div classname="book_bt"><a href="#">Shop Now</a></div>
                                    </div>
                                </div>
                                <div classname="col-md-6">
                                    <div><img src="images/img-1.png" classname="image_1" /></div>
                                </div>
                            </div>
                            <div classname="button_main"><button classname="all_text">All</button><input type="text" classname="Enter_text" placeholder="Enter keywords" name /><button classname="search_text">Search</button></div>
                        </div>
                    </div>
                </div>
                <a classname="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
                    <i classname><img src="images/left-icon.png" /></i>
                </a>
                <a classname="carousel-control-next" href="#my_slider" role="button" data-slide="next">
                    <i classname><img src="images/right-icon.png" /></i>
                </a>
            </div>
        </div>

    );
}

export default Banner;