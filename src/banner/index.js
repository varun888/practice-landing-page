
import React, { useState } from 'react';
import { Col, Container, Row, Button, Card, Input, } from 'reactstrap';
import './style.css';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { GrGooglePlus } from "react-icons/gr";
import { SiInstagram, SiSkype } from "react-icons/si";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { FcTouchscreenSmartphone } from "react-icons/fc";
import Slider from 'react-slick';



export const Banner = (props) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <div className="banner_fullwrap" style={{ backgroundImage: 'url(/images/bgimage.png);background-position: top-right;' }}>
                <Container>
                    <Row>
                        <Col md="6">
                            <div className="banner_left">
                                <h2 className="heading_banner_left">Lorem ipsum dolor sit amet,<br></br>consectetur</h2>
                                <div className="divider_1st_heading"></div>
                                <p className="paragraph_banner_left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br></br> eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br> Quis ipsum suspendisse ultrices gravida. Risus commodo<br></br> viverra maecenas accumsan lacus vel facilisis.</p>
                                <a className="button_learn_more" href="#">Learn more</a>
                                <a className="button_get_intouch" href="#">Get in Touch</a>
                            </div>
                        </Col>
                        <Col md="6">
                            <div className="banner_right">
                                <img className="img_banner_right" src="/images/dashboard.png" />

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="why_choose_section">
                <Container>
                    <Row>
                        <Col md="6">
                            <img className="img_why_ch00se_section" src="/images/choose-section.png" />
                        </Col>
                        <Col md="6">

                            <div className="why_choose_section_right">

                                <h1 className="heading_choose_section">Why choose us?</h1>

                                <div className="after_first_heading">
                                    <div className="image_part">
                                        <img className="image" src="/images/lorem1.png" />
                                        <div>
                                            <h3 className="heading_second_choose_section">Lorem ipsum</h3>
                                            <p className="paragraph_choose_section">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed do eiusmod tempor incididunt ut labore et dolore<br></br> magna aliqua.</p>
                                        </div>
                                    </div>


                                    <div className="image_part">
                                        <img className="image" src="/images/lorem2.png" />
                                        <div>
                                            <h3 className="heading_second_choose_section">Lorem ipsum</h3>
                                            <p className="paragraph_choose_section">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed do eiusmod tempor incididunt ut labore et dolore<br></br> magna aliqua.</p>
                                        </div>
                                    </div>

                                    <div className="image_part">
                                        <img className="image" src="/images/lorem3.png" />
                                        <div>
                                            <h3 className="heading_second_choose_section">Lorem ipsum</h3>
                                            <p className="paragraph_choose_section">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed do eiusmod tempor incididunt ut labore et dolore<br></br> magna aliqua.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </Col>
                    </Row>
                </Container>
            </div>

            <Container>
                <div className="our_services_section">
                    <h2 className="heading_our_services">Our Services</h2>
                </div>

                <Row className="row_our_service_section">
                    <Col md="3">
                        <img className="img_our_service_section" src="/images/graphicdesign.png" />
                        <h6 className="information_service_section">Graphic Design</h6>
                    </Col>
                    <Col md="3">
                        <img className="img_our_service_section" src="/images/webdesign.png" />
                        <h6 className="information_service_section2">Web Design & Development</h6>
                    </Col>
                    <Col md="3">
                        <img className="img_our_service_section" src="/images/mobiledesign.png" />
                        <h6 className="information_service_section3">Mobile App Design &<br></br>Development</h6>
                    </Col>
                    <Col md="3">
                        <img className="img_our_service_section" src="/images/digitalmarketing.png" />
                        <h6 className="information_service_section4">Digital Marketing</h6>
                    </Col>

                </Row>

                <div className="our_portfolio_section">
                    <h2 className="heading_portfolio_section">Our Portfolio</h2>
                </div>

                <Row>
                    <Col style={{ padding: "0px" }} md="6">
                        <img className="img_portfolio_section" src="/images/screen.png" />
                    </Col>
                    <Col style={{ padding: "0px" }} md="6">
                        <img className="img_portfolio_section" src="/images/swiftdigital.png" />
                    </Col>
                </Row>

                <div className="after_portfolio_section">
                    <Button className="button_after_portfolio_section">View More</Button>
                </div>
            </Container>

            <div className="slider_section" style={{ backgroundImage: 'url(/images/slider-bgimage.png)' }}>

                <Container>
                    <Slider {...settings}>
                        <div>
                        <img className="avatar_slider_section" src="/images/avatar.png" />
                            <p className="paragraph_slider_section">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br></br></p>
                        </div>
                        <div>
                        <img className="avatar_slider_section" src="/images/avatar.png" />
                            <p className="paragraph_slider_section">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br></br></p>
                        </div>
                        <div>
                        <img className="avatar_slider_section" src="/images/avatar.png" />
                            <p className="paragraph_slider_section">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br></br></p>
                        </div>
                        
                    </Slider>


                </Container>
            </div>

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
                            <a className="href_footer" href="index">Home</a>
                            <a className="href_footer" href="about">About</a>
                            <a className="href_footer" href="services">Services</a>
                            <a className="href_footer" href="portfolio">Portfolio</a>
                            <a className="href_footer" href="contact">Contact</a>
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