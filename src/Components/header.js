import React from "react";
import header from './images/header.jpeg'
import './header.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './images/095b5ad5-8eeb-4912-96fd-26b573457cfc.jpg'
import Form from 'react-bootstrap/Form';
import setting from './images/setting.jpg';
import { GoGear } from "react-icons/go";
import { useNavigate } from "react-router-dom";




function FluidExample() {
    const navigate = useNavigate()
    return (
            <header className="main-header">

            <div className="overlay">
                <div className="overlay-background" ></div>
                <div className="overlay-content">

                 {/* START NAVBAR */}
                    <Navbar className='nav' >
                        <Container fluid className="Container-fluid">
                        <Navbar.Brand href="/frontend">
                            <div className="logo-container">
                            <span>ServFix</span>
                            <img src={logo} alt="logo" className='logo' />
                            </div>
                        </Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}  navbarScroll>
                                <Nav.Link href="#action1">HOME</Nav.Link>
                                <Nav.Link href="#action2">SECURITY</Nav.Link>
                                <Nav.Link href="#action3">HELP</Nav.Link>
                                
                            </Nav>
                            


                            <button href="#action4" onClick={() => navigate('/login')} className="disable" >
                                LOG IN
                            </button>

                            <button href="#action5" onClick={() => navigate('/sign')} className="disable" >
                                SIGN UP
                            </button>

                    </Navbar.Collapse>
                    </Container>
                    </Navbar>
                {/* End NAVBAR */}


                {/* START DIV FOR HEADER */}
                    <div className="head">
                        <h1>Lets find the best <br></br> workers</h1>
                        <p>search about your service or worker</p>
                        <Form className="d-flex">
                        <Form.Control  type="search" placeholder="Search" className="me-2" aria-label="Search" />
                        {/* <img className="img" src={setting} alt="logo"/> */}
                        <GoGear className="icon" />

                        </Form>
                        <button className="button">Result</button>
                    </div>
                {/* START DIV FOR HEADER */}
                </div>
            </div>
            </header>
        );
}

export default FluidExample;