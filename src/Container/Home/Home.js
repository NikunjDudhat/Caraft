import React from 'react';

function Home(props) {
  return (
    <div>
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
      <div className="beauty_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="beauty_box">
                <h1 className="bed_text">Beauty products</h1>
                <div><img src="assets/images/img-5.png" className="image_3" /></div>
                <div className="seemore_bt"><a href="#">see More</a></div>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="beauty_box_1">
                <h1 className="bed_text_1">Explore trending electronics</h1>
                <div><img src="assets/images/img-6.png" className="image_3" /></div>
                <div className="seemore_bt_1"><a href="#">see More</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product_section layout_padding">
        <div className="container">
          <h1 className="feature_taital">FEATURED PRODUCTS</h1>
          <p className="feature_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking</p>
          <div className="product_section_2">
            <div className="row">
              <div className="col-sm-5">
                <div className="feature_box">
                  <h1 className="readable_text">Readable content of</h1>
                  <div><img src="assets/images/img-7.png" className="image_7" /></div>
                </div>
                <div className="feature_box_1">
                  <h1 className="readable_text">Readable content of</h1>
                  <div><img src="assets/images/img-7.png" className="image_7" /></div>
                </div>
              </div>
              <div className="col-sm-7">
                <div className="feature_box_2">
                  <h1 className="readable_text">Readable content of</h1>
                  <div><img src="assets/images/img-8.png" className="image_8" /></div>
                  <div className="seemore_bt"><a href="#">see More</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="client_section layout_padding">
        <div id="main_slider" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <h1 className="feature_taital">what is says our customer</h1>
                <p className="feature_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking</p>
                <div className="client_section_2">
                  <div className="image_9"><img src="assets/images/img-9.png" /></div>
                  <h3 className="nolmal_text">Normal distribution</h3>
                  <p className="ipsum_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look</p>
                  <div className="image_9"><img src="assets/images/icon-10.png" /></div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <h1 className="feature_taital">FEATURED PRODUCTS</h1>
                <p className="feature_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking</p>
                <div className="client_section_2">
                  <div className="image_9"><img src="assets/images/img-9.png" /></div>
                  <h3 className="nolmal_text">Normal distribution</h3>
                  <p className="ipsum_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look</p>
                  <div className="image_9"><img src="assets/images/icon-10.png" /></div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <h1 className="feature_taital">FEATURED PRODUCTS</h1>
                <p className="feature_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking</p>
                <div className="client_section_2">
                  <div className="image_9"><img src="assets/images/img-9.png" /></div>
                  <h3 className="nolmal_text">Normal distribution</h3>
                  <p className="ipsum_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look</p>
                  <div className="image_9"><img src="assets/images/icon-10.png" /></div>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
            <i className><img src="assets/images/left-icon.png" /></i>
          </a>
          <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
            <i className><img src="assets/images/right-icon.png" /></i>
          </a>
        </div>
      </div>
      <div className="newsletter_section layout_padding">
        <div className="container">
          <h6 className="conect_text">Connect to caraft</h6>
          <h1 className="newsletter_taital">Join Our Newsletter</h1>
          <p className="newsletter_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration </p>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Enter your email" aria-label="Enter your email" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <span className="input-group-text" id="basic-addon2">Subscribe</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;