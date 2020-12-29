import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
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

const Header = ({ history }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    // const history = useHistory()
    return (

        <div className="header_start">
            <Container>
                <Navbar color="light" className="navbar_header" light expand="md">

                    <NavbarBrand href="/"><img className="logo_header" src="/images/logo.svg" /></NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>



                            <div className="fullwrap_header">

                                <NavItem onClick={() => setIsOpen(false)} className="navlinks_header">
                                    <Link to={`/`}>
                                        <NavLink className="navlinks_names" href="/components/">Home</NavLink>
                                    </Link>
                                </NavItem>
                                <NavItem onClick={() => setIsOpen(false)}  className="navlinks_header">
                                    <Link to={`/about`}>
                                        <NavLink className="navlinks_names" href="">About</NavLink>
                                    </Link>
                                </NavItem>
                                <NavItem onClick={() => setIsOpen(false)}  className="navlinks_header">
                                    <Link to={`/services`}>
                                        <NavLink className="navlinks_names" href="">Services</NavLink>
                                    </Link>
                                </NavItem>
                                <NavItem onClick={() => setIsOpen(false)}  className="navlinks_header">
                                    <Link to={`/portfolio`}>
                                        <NavLink className="navlinks_names" href="">Portfolio</NavLink>
                                    </Link>
                                </NavItem>
                                <NavItem onClick={() => setIsOpen(false)}  className="navlinks_header">
                                    <Link to={`/contact`}>
                                        <NavLink className="navlinks_names_last" href="">Contact</NavLink>
                                    </Link>
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