
import React, { useState } from 'react';
import { Col, Container, Row, Button, Card, Input, } from 'reactstrap';
import './style.css';
import { FaFacebookF, FaLinkedinIn, FaUsers } from "react-icons/fa";
import { GrGooglePlus } from "react-icons/gr";
import { SiInstagram, SiSkype } from "react-icons/si";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { HiLocationMarker, HiOutlineShoppingBag } from "react-icons/hi";
import { FcTouchscreenSmartphone } from "react-icons/fc";




export const Portfolio = (props) => {

    return (
        <>

            <div className="background_image_section" style={{ backgroundImage: 'url(/images/bgimage.png)' }}>
                <Container>
                    <h2 className="heading_portfolio_section">Portfolio</h2>
                    <p className="paragraph_portfolio_section">Our pro-active team believes in combining strategic thinking and emerging technologies to provide innovative solutions that consistently break<br></br> new grounds and our amazing portfolio is proof of the same. Let our work shout out loud!!</p>
                    <a className="href_paragraph_portfolio_section" href="">All</a>
                    <a className="href_paragraph_portfolio_section" href="">Graphics Design</a>
                    <a className="href_paragraph_portfolio_section" href="">Web Design</a>
                    <a className="href_paragraph_portfolio_section" href="">Web Developer</a>
                    <a className="href_paragraph_portfolio_section" href="">Mobile Apps</a>
                </Container>
            </div>

            <Container>
                <Row>
                    <Col md="4">
                        <img className="images_porfolio_section" src="images/website_P5.png" />
                    </Col>
                    <Col md="4">
                    <img className="images_porfolio_section" src="images/website_P1.png" />
                    </Col>
                    <Col md="4">
                    <img className="images_porfolio_section" src="images/covid_poster.png" />
                    </Col>
                </Row>

                <Row>
                    <Col md="4">
                        <img className="images_porfolio_section_2" src="images/website_P6.png" />
                    </Col>
                    <Col md="4">
                    <img className="images_porfolio_section_2" src="images/website_P7.png" />
                    </Col>
                    <Col md="4">
                    <img className="images_porfolio_section_2" src="images/website_P8.png" />
                    </Col>
                </Row>

                <Row>
                    <Col md="4">
                        <img className="images_porfolio_section_3" src="images/website_P2.png" />
                    </Col>
                    <Col md="4">
                    <img className="images_porfolio_section_3" src="images/website_P3.png" />
                    </Col>
                    <Col md="4">
                    <img className="images_porfolio_section_3" src="images/website_P4.png" />
                    </Col>
                </Row>

                <Row>
                    <Col md="4">
                        <img className="images_porfolio_section_2" src="images/website_P6.png" />
                    </Col>
                    <Col md="4">
                    <img className="images_porfolio_section_2" src="images/website_P7.png" />
                    </Col>
                    <Col md="4">
                    <img className="images_porfolio_section_2" src="images/website_P8.png" />
                    </Col>
                </Row>
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