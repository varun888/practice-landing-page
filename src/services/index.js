
import React, { useState } from 'react';
import { Col, Container, Row, Button, Card, Input, } from 'reactstrap';
import './style.css';
import { FaFacebookF, FaLinkedinIn, FaUsers } from "react-icons/fa";
import { GrGooglePlus } from "react-icons/gr";
import { SiInstagram, SiSkype } from "react-icons/si";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { HiLocationMarker, HiOutlineShoppingBag } from "react-icons/hi";
import { FcTouchscreenSmartphone } from "react-icons/fc";
import Slider from 'react-slick';




export const Services = (props) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        // prevArrow: document.getElementsByClassName("slick-slide img"),
        // nextArrow: document.getElementsByClassName("slick-slide img"),
        // variableWidth: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
                // arrows: true,
                // prevArrow: document.getElementsByClassName("a-left"),
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                // initialSlide: 2
                infinite: true,
                // arrows: true,
                // className: 'heading_after_our_services_section',
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // arrows: true,
                // className: 'heading_after_our_services_section',
            
              }
            }
          ]
    };
    return (
        <>


            <Container>
                <h2 className="heading_our_services_section">Our Services</h2>
                <p className="paragraph_our_services_section">Our well-accomplished organization focuses on ensuring responsive customer service, accurate project management, product quality and an ethical<br></br> approach to business, making the development process easier, accessible, secure and meaningful for the target segments of start-ups to small &<br></br> medium enterprises. Equipped with all the required assets and latest trends, our main expertise lies in UI/UX responsive designs, Website<br></br> Development (All Business Domains + All Open Source Technologies), Mobile App Development, Digital Marketing & Software testing.<br></br></p>

                <div>
                    <h4 className="heading_after_our_services_section">Technologies We Work in</h4>
                    <Slider {...settings}>
                        <div className="slick-slide img">
                            <img src="images/services_slider/shopify.png" />
                        </div>
                        <div className="slick-slide_img_other">
                            <img src="images/services_slider/flutter.png" />
                        </div>
                        <div className="slick-slide img">
                            <img src="images/services_slider/php.png" />
                        </div>
                        <div className="slick-slide_img_other">
                            <img src="images/services_slider/laravel.png" />
                        </div>
                        <div className="slick-slide img">
                            <img src="images/services_slider/wordpress.png" />
                        </div>
                        <div className="slick-slide img">
                            <img src="images/services_slider/react_native.png" />
                        </div>
                        <div className="slick-slide_img_other">
                            <img src="images/services_slider/magento.png" />
                        </div>
                        <div className="slick-slide img">
                            <img src="images/services_slider/mean.png" />
                        </div>
                        <div className="slick-slide img">
                            <img src="images/services_slider/node_js.png" />
                        </div>
                        <div className="slick-slide_img_other">
                            <img src="images/services_slider/CI.png" />
                        </div>
                        <div className="slick-slide img">
                            <img src="images/services_slider/sql.png" />
                        </div>





                    </Slider>
                </div>

                <div>
                    <h4 className="heading_after_1st_slider">Business Domains We Work in</h4>
                    <Slider {...settings}>
                        <div className="slick_slider_2">
                            <img src="images/services_slider/logistics.png" />
                            <h5>Banking & Finance</h5>
                        </div>
                        <div className="slick_slider_2">
                            <img src="images/services_slider/Supply.png" />
                            <h5>Sports & Fitness</h5>
                        </div>
                        <div className="slick_slider_2">
                            <img src="images/services_slider/inventory.png" />
                            <h5>Healthcare</h5>
                        </div>
                        <div className="slick_slider_2">
                            <img src="images/services_slider/it_industery.png" />
                            <h5>Travel & Tourism</h5>
                        </div>
                        <div className="slick_slider_2">
                            <img src="images/services_slider/online_food.png" />
                            <h5>Logistics</h5>
                        </div>
                        <div className="slick_slider_2">
                            <img src="images/services_slider/online_car_book.png" />
                            <h5>Supply Chain<br></br>Management</h5>
                        </div>
                        <div className="slick_slider_2">
                            <img src="images/services_slider/retail.png" />
                            <h5>Inventory<br></br>Management</h5>
                        </div>
                        <div className="slick_slider_2">
                            <img src="images/services_slider/social_networking.png" />
                            <h5>IT Industry</h5>
                        </div>
                        <div className="slick_slider_2">
                            <img src="images/services_slider/ecommerce_icon.png" />
                            <h5>Online Food Ordering</h5>
                        </div>
                        <div className="slick_slider_2">
                            <img src="images/services_slider/real-estate1.png" />
                            <h5>Online Car Booking/<br></br>Rentals</h5>
                        </div>
                        <div className="slick_slider_2">
                            <img src="images/services_slider/banking_finace.png" />
                            <h5>Retail</h5>
                        </div>
                        <div className="slick_slider_2">
                            <img src="images/services_slider/sport_fitnes.png" />
                            <h5>Social Networking</h5>
                        </div>
                        <div className="slick_slider_2">
                            <img src="images/services_slider/healthcare.png" />
                            <h5>E-commerce</h5>
                        </div>
                        <div className="slick_slider_2">
                            <img src="images/services_slider/travel.png" />
                            <h5>Real Estate</h5>
                        </div>
                    </Slider>
                </div>

                <p className="paragraph_after_2nd_slider">
                    Your UX design portfolio is not just a virtual gallery of all your most beautiful work. It’s a carefully crafted story that offers a behind-the-scenes look<br></br> at your methods and processes. How do you tackle different UX design challenges? What’s your approach to solving problems? Are you user-<br></br>centric? It should introduce you as a designer and give the viewer an understanding of how you work. And, of course, all of these insights should<br></br> come gift-wrapped in a visually engaging, user-friendly package.Each project is presented as a case study, which immediately tells us we’re in for a<br></br> lot more than just eye candy.</p>

                <p className="paragraph_after_2nd_slider">Without UX, web design would be a sterile expanse of bare buttons, robotic copywriting, and cold gridlines devoid of any humanity. If you're a UX<br></br> designer, you need to show off your chops by creating something that's an experience to look through.</p>
                <p className="paragraph_after_2nd_slider">Your creative ideas deserve more than a place in your dreams. How about a place in Google Play Store and App Store</p>
                <p className="paragraph_after_2nd_slider">Intuitive Web Solutions To Boost Your Brand Growth</p>
                <p className="paragraph_after_2nd_slider">We Develop Customized Websites For Your Precise Business Needs</p>

                <div className="div_before_graphic_design">
                    <Row>
                        <Col className="left_section_paragraph" md="6">
                            <a className="graphic_design_section" href="graphic-design">Graphic design</a>
                            <p className="paragraph_graphic_design_section">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br></br> eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br> Quis ipsum suspendisse ultrices gravida. Risus commodo<br></br> viverra maecenas accumsan lacus vel facilisis...<a href="graphic-design">Read More</a></p>
                        </Col>
                        <Col md="6">
                            <img className="web_design_img" src="/images/service_1.png" />
                        </Col>
                    </Row>
                </div>


                <div className="div_before_mobile_app_design">
                    <Row>
                        <Col md="6">
                            <img className="mobile_app_design_img" src="images/mobileapp.png" />
                        </Col>
                        <Col className="right_mobile_design_section" md="6">
                            <a className="mobile_design_section" href="mobile-app-design">Mobile App Design & Development</a>
                            <p className="paragraph_mobile_design_section">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br></br> eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br> Quis ipsum suspendisse ultrices gravida. Risus commodo<br></br> viverra maecenas accumsan lacus vel facilisis...<a href="graphic-design">Read More</a></p>
                        </Col>
                    </Row>
                </div>

                <div className="div_before_web_design_section">
                    <Row>
                        <Col className="web_design_section" md="6">
                            <a className="web_design_section_left" href="web-design-development">Web Design & Development</a>
                            <p className="paragraph_web_design_section">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br></br> eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br> Quis ipsum suspendisse ultrices gravida. Risus commodo<br></br> viverra maecenas accumsan lacus vel facilisis...<a href="graphic-design">Read More</a></p>
                        </Col>
                        <Col md="6">
                            <img className="web_design_section_img" src="images/web-design-development.png" />
                        </Col>
                    </Row>
                </div>

                <div className="div_before_digital_marketing_section">
                    <Row>
                        <Col md="6">
                            <img className="last_section_img" src="images/about_banner_right.png" />
                        </Col>
                        <Col className="digital_marketing_section" md="6">
                            <a className="digital_marketing_section_right" href="digital-marketing">SEO/SMM/PPC</a>
                            <p className="paragraph_digital_marketing_section">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br></br> eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br> Quis ipsum suspendisse ultrices gravida. Risus commodo<br></br> viverra maecenas accumsan lacus vel facilisis...<a href="graphic-design">Read More</a></p>
                        </Col>
                    </Row>
                </div>
            </Container>







            <div className="get_in_touch_section">
                <Container>
                    <Row>
                        <Col md="6">
                            <h2 className="heading_get_in_touch_section">Get In Touch</h2>
                            <p className="paragraph_get_in_touch_section">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br></br> tempor incididunt ut labore et dolore magna aliqua. Quis ipsum<br></br> suspendisse ultrices gravida. Risus commodo viverra maecenas<br></br> accumsan</p>
                            <div className="paragraph_get_in_svg">
                                <AiFillGooglePlusCircle />
                                <a className="gmail_section" href="#">cornercoders5@gmail.com</a><br></br>

                            </div>

                            <div className="paragraph_get_in_svg">
                                <HiLocationMarker />
                                <a className="location_section" href="#">2nd Floor, GR Tower,phase 8-A, Industrial Area, SAS Nagar, Mohali, Punjab (India) PIN:160070<br></br></a>
                            </div>

                            <div className="paragraph_get_in_svg">
                                <FcTouchscreenSmartphone />
                                <a className="contact_section" href="#">0172-400-2729</a>
                            </div>
                        </Col>
                        <Col md="6">
                            <Card className="card_get_in_touch_section">
                                <Input className="input_get_in_touch_section" type="text" placeholder="Your name"></Input>
                                <Input className="input_get_in_touch_section" type="text" placeholder="Phone"></Input>
                                <Input className="input_get_in_touch_section" type="text" placeholder="Email address"></Input>
                                <Input className="input_get_in_touch_section" type="text" placeholder="Message"></Input>

                                <p className="paragraph_card">For career inquiry, please drop mail at</p>
                                <a className="email_address_card" href="#">hr@coderscorner.in</a>

                                <Button className="button_card">Submit</Button>

                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            <footer className="footer_section">
                <Container>
                    <Row>
                        <Col md="6">
                            <a className="href_footer" href="index.html">Home</a>
                            <a className="href_footer" href="about.html">About</a>
                            <a className="href_footer" href="services.html">Services</a>
                            <a className="href_footer" href="portfolio.html">Portfolio</a>
                            <a className="href_footer" href="contact.html">Contact</a>
                            <p className="paragraph_footer_section">Copyright @ 2019-2020 Coder's Corner - All rights reserved.</p>
                        </Col>
                        <Col md="6">
                            <div className="fonts_footer"><div className="footer_svg"><FaFacebookF /></div><div className="footer_svg"><GrGooglePlus /></div><div className="footer_svg"><SiInstagram /></div><div className="footer_svg"><FaLinkedinIn /></div><div className="footer_svg"><SiSkype /></div></div>
                        </Col>
                    </Row>
                </Container>
            </footer>

        </>
    )
}