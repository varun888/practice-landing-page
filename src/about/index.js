
import React, { useState } from 'react';
import { Col, Container, Row, Button, Card, Input, } from 'reactstrap';
import './style.css';
import { FaFacebookF, FaLinkedinIn, FaUsers } from "react-icons/fa";
import { GrGooglePlus } from "react-icons/gr";
import { SiInstagram, SiSkype } from "react-icons/si";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { HiLocationMarker, HiOutlineShoppingBag } from "react-icons/hi";
import { FcTouchscreenSmartphone } from "react-icons/fc";
import { ImUsers } from "react-icons/im";
import { RiUserStarFill } from "react-icons/ri";




export const About = (props) => {

    return (
        <>
            <div className="background_about_section" style={{ backgroundImage: 'url(/images/bgimage.png)' }}>
                <Container>
                    <Row>
                        <Col md="6">
                            <h2 className="about_section_heading">About us</h2>
                            <p className="about_section_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br></br> eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br> Quis ipsum suspendisse ultrices gravida. Risus commodo<br></br> viverra maecenas accumsan lacus vel facilisis.<br></br></p>

                            <p className="about_section_paragraph_2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br></br> eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br> Quis ipsum suspendisse ultrices gravida. Risus commodo<br></br> viverra maecenas accumsan lacus vel facilisis. Lorem ipsum<br></br> dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br></br> tempor incididunt ut labore et dolore magna aliqua. Quis<br></br> ipsum suspendisse ultrices gravida. Risus commodo viverra<br></br> maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit<br></br> amet, consectetur adipiscing elit, sedaliqua. Quis ipsum<br></br> suspendisse.</p>
                            <button className="button_about_section">Hire us</button>
                        </Col>
                        <Col md="6">
                            <img className="about_section_img" src="images/about_banner_right.png" />
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container>
                <div className="div_before_about_section">
                    <Row>
                        <Col md="6">
                            <img className="after_about_section_img" src="images/our_team.png" />
                        </Col>
                        <Col md="6">
                            <h2 className="heading_after_about_section">Our team</h2>
                            <p className="paragraph_after_about_section">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br></br> eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br> Quis ipsum suspendisse ultrices gravida. Risus commodo<br></br> viverra maecenas accumsan lacus vel facilisis.<br></br></p>
                            <p className="paragraph_2_after_about_section">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br></br> eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br> Quis ipsum suspendisse ultrices gravida. Risus commodo<br></br> viverra maecenas accumsan lacus vel facilisis. Lorem ipsum<br></br> dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br></br> tempor incididunt ut labore et dolore magna aliqua. Quis<br></br> ipsum suspendisse ultrices gravida. Risus commodo viverra<br></br> maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit<br></br> amet, consectetur adipiscing elit, sedaliqua. Quis ipsum<br></br> suspendisse.</p>
                        </Col>
                    </Row>
                </div>
            </Container>

          
                <div className="background_our_accomplishments" style={{ backgroundImage: 'url(/images/slider-bgimage.png)' }}>
                    <Container>
                    <div className="div_before_our_accomplishments">
                        <h2 className="our_accomplishments_section">Our Accomplishments</h2>
                        <Row>
                            <Col className="icons_our_accomplishments_section" md="3">
                                <div className="icons_border">
                                    <HiOutlineShoppingBag />
                                </div>
                                <p className="text_image">1500+<br></br> projects completed</p>
                            </Col>

                            <Col className="icons_our_accomplishments_section" md="3">
                                <div className="icons_border">
                                    <ImUsers />
                                </div>
                                <p className="text_image">50+<br></br>Employees</p>
                            </Col>

                            <Col className="icons_our_accomplishments_section" md="3">
                                <div className="icons_border">
                                    <FaUsers />
                                </div>
                                <p className="text_image">5+<br></br>Years Experience</p>
                            </Col>

                            <Col className="icons_our_accomplishments_section" md="3">
                                <div className="icons_border">
                                    <RiUserStarFill />
                                </div>
                                <p className="text_image">1700+<br></br>Satisfied Clients</p>
                            </Col>
                        </Row>
                        </div>
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