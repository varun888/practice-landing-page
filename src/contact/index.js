
import React, { useState } from 'react';
import { Col, Container, Row, Button, Card, Input, } from 'reactstrap';
import './style.css';
import { FaFacebookF, FaLinkedinIn, FaLocationArrow, FaUsers } from "react-icons/fa";
import { GrGooglePlus, GrLocation } from "react-icons/gr";
import { SiInstagram, SiSkype } from "react-icons/si";
import { FcTouchscreenSmartphone } from "react-icons/fc";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";



export const Contact = (props) => {

    return (
        <>

            <div className="background_image_first" style={{ backgroundImage: 'url(/images/bgimage.png)' }}>
                <Container>

                    <h2 className="heading_contact_section">Contact Us</h2>

                    <h5 className="after_heading_contact">We’re easy to reach and eager to connect — whether by phone, e-mail, or in person.</h5>

                    <Row>
                        <Col md="6" style={{ padding: 0 }}>
                            <Card className="card_after_headings" style={{ margin: 0, width: "100%" }}>
                                <h6 className="heading_card_left">Coder's Corner</h6>
                                <ul className="after_heading_coderscorner">
                                    {/* <div className="icons_card_left"> */}
                                    <div className="icons_card_before_headings">
                                        <AiOutlineGooglePlus color="orange" className="google" />
                                        <li>coderscorner5@gmail.com</li>
                                        <a href="mailto:coderscorner5@gmail.com"></a>
                                    </div>

                                    {/* </div> */}
                                    <div className="icons_card_left">
                                        <MdLocationOn color="orange" />
                                        <li>2nd Floor, GR Tower, Phase 8-A, Industrial Area, SAS Nagar, Mohali, Punjab (India) PIN: 160070</li>
                                        <a href="https://goo.gl/maps/1BqURKhzhkCenM3w7"></a>
                                    </div>
                                    <div className="icons_card_left">
                                        <FcTouchscreenSmartphone />
                                        <li>0172-400-2729</li>
                                        <a href="tel:0172-400-2729"></a>
                                    </div>

                                    <div>
                                        <h5 className="heading_after_icons">follow Us</h5>
                                    </div>
                                    <div className="fonts_card"><div className="footer_svg"><FaFacebookF /></div><div className="footer_svg"><GrGooglePlus /></div><div className="footer_svg"><SiInstagram /></div><div className="footer_svg"><FaLinkedinIn /></div><div className="footer_svg"><SiSkype /></div></div>
                                </ul>

                            </Card>
                        </Col>


                        <Col md="6" style={{ padding: 0 }}>
                            <Card className="card_right" style={{ margin: 0 }}>
                                <Card className="card_get_in_touch_section">
                                    <Input className="input_get_in_touch_section" type="text" placeholder="Your name"></Input>
                                    <Input className="input_get_in_touch_section" type="text" placeholder="Phone"></Input>
                                    <Input className="input_get_in_touch_section" type="text" placeholder="Email address"></Input>
                                    <Input className="input_get_in_touch_section" type="text" placeholder="Message"></Input>

                                    <p className="paragraph_card">For career inquiry, please drop mail at</p>
                                    <a className="email_address_card" href="#">hr@coderscorner.in</a>

                                    <Button className="button_card">Submit</Button>

                                </Card>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>


            <div className="background_image_left" style={{ backgroundImage: 'url(/images/left_bg_image.png)' }}>

            </div>



            {/* <div className="get_in_touch_section">
                <Container>
                    <Row>

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
            </div>  */}

            <footer className="footer_section contact-footer">
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