import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
    return (
        <div className="Navigation">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/home">
                <img
          alt=""
          src="/island.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
                    SUMM
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/sign-in">Sign In</Nav.Link>
                    <Nav.Link href="/input">Input</Nav.Link>
                    <Nav.Link href="/my-page">My Page</Nav.Link>
                    <Nav.Link href="/log-out">Logout</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Navigation;