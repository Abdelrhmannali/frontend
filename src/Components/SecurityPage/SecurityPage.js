import React, { useState } from 'react';
import './SecurityPage.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/photo_2024-01-23_12-43-06.jpg'
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import { BsPersonFillGear } from "react-icons/bs";





function SecurityPage() {
    const navigate = useNavigate()
    return (
            <header className="main-headerr">

            <div className="overlay">
                <div className="overlay-background" ></div>
                <div className="overlay-content-1">

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
                            </Nav>
                    </Navbar.Collapse>
                    </Container>
                    </Navbar>
                {/* End NAVBAR */}

</div>
                {/* Start Content */}

                        <div className="container">
                                <div className="sidebar">
                                    <h5 onClick={()=> navigate('/accountinfo')}>Account Info</h5>
                                    <h5 className='account_info'>Security</h5>
                                    <h5 onClick={()=> navigate('/serviceprovider')}>Become a service provider</h5>
                                </div>

                                <div className="main-content-1">
                                    <div className="nav">
                                        <BsArrowLeft className='icon' onClick={()=> navigate('/afterlogin')} />
                                        <BsPersonFillGear className='icon_setting' onClick={()=> navigate('/newpass')}/>
                                    </div>

                                    <div className='contenet'>
                                        <h4>Security</h4>
                                        
                                        
                                    </div>

                                    <div className="form-1">
                                        <form className='form-1' method="post">
                                        <div class="txt_field">
                                            <label for="password">Password</label>
                                            <input type="password" required placeholder='******' id="password"/>
                                            <span></span>
                                        </div>

                                                
                                              
                                            </form>
                                    </div>




                                </div>
                        </div>





                {/* End Content */}
            </div>

                  

            </header>
            

            
        );
}

export default SecurityPage;