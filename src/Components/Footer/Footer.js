import React from 'react';

function Footer(props) {
    return (
        <div className="footer_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <h4 className="information_text">Category</h4>
                        <p className="dummy_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="information_main">
                            <h4 className="information_text">Useful Links</h4>
                            <p className="many_text">Contrary to popular belief, Lorem Ipsum is not simply random text. It </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="information_main">
                            <h4 className="information_text">Contact Us</h4>
                            <p className="call_text"><a href="#">+01 1234567890</a></p>
                            <p className="call_text"><a href="#">+01 9876543210</a></p>
                            <p className="call_text"><a href="#">demo@gmail.com</a></p>
                            <div className="social_icon">
                                <ul>
                                    <li><a href="#"><img src="images/fb-icon.png" /></a></li>
                                    <li><a href="#"><img src="images/twitter-icon.png" /></a></li>
                                    <li><a href="#"><img src="images/linkedin-icon.png" /></a></li>
                                    <li><a href="#"><img src="images/instagram-icon.png" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright_section">
                    <h1 className="copyright_text">
                        Copyright 2020 All Right Reserved <a href="https://html.design"> Free Html Templates</a>
                    </h1></div>
            </div>
        </div>

    );
}

export default Footer;