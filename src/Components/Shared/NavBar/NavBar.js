import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './NavBar.css';
import logo from '../../../image/design.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {

const link="https://drive.google.com/uc?export=download&id=1QYYjLmW7zPK3aR0P0mEfyf_WJhPrJ3Q0"
    const [navbar, setNevbar] = useState(false);

    const changeBackground = () => {

        if (window.scrollY >= 100) {
            setNevbar(true)
        }
        else {
            setNevbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <Navbar className={navbar ? 'nav active' : 'nav'} fixed="top" expand="lg">
            <div className="container ">
                <Navbar.Brand className="sourav" as={Link} to="/" >
                <img className="img-fluid" src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mr-5 list">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/contract">Contact</Nav.Link>
                    </Nav>
                    <a className="pdf-button sm-mt-5" href={link} >  <FontAwesomeIcon icon={faFile} /> Resume</a>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default NavBar;