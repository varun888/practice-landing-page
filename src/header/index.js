import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Button,
} from 'reactstrap';
import "./style.css";

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (

        <div className="header_start">
            <Container>
                <Navbar color="light" className="navbar_header" light expand="md">

                    <NavbarBrand href="/"><img className="logo_header" src="/images/logo.svg" /></NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>



                            <div className="fullwrap_header">

                                <NavItem className="navlinks_header">
                                    <NavLink className="navlinks_names" href="/components/">Home</NavLink>
                                </NavItem>
                                <NavItem className="navlinks_header">
                                    <NavLink className="navlinks_names" href="/components/">About</NavLink>
                                </NavItem>
                                <NavItem className="navlinks_header">
                                    <NavLink className="navlinks_names" href="/components/">Services</NavLink>
                                </NavItem>
                                <NavItem className="navlinks_header">
                                    <NavLink className="navlinks_names" href="/components/">Portfolio</NavLink>
                                </NavItem>
                                <NavItem className="navlinks_header">
                                    <NavLink className="navlinks_names_last" href="/components/">Contact</NavLink>
                                </NavItem>
                            </div>



                        </Nav>
                        {/* <Button>DOWNLOAD</Button> */}
                    </Collapse>
                </Navbar>
            </Container>
        </div>

    );
}

export default Header;