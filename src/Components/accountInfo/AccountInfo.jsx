import React, { useState } from 'react';
import './AccountInfo.css'
import header from '../images/header.jpeg'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/095b5ad5-8eeb-4912-96fd-26b573457cfc.jpg'
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import { BsPersonFillGear } from "react-icons/bs";
import img from '../images/profile.jpg'




function AccountInfo() {
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
                                    <h5 className='account_info'>Account Info</h5>
                                    <h5 onClick={()=> navigate('/securitypage')}>Security</h5>
                                    <h5 onClick={()=> navigate('/ServiceProvider')}>Become a service provider</h5>
                                </div>

                                <div className="main-content-3">
                                    <div className="nav">
                                        <BsArrowLeft className='icon' onClick={()=> navigate('/afterlogin')}/>
                                        
                                        <BsPersonFillGear className='icon_setting'  href="/" onClick={()=> navigate('/editinfo')} />
                                    </div>

                                    <div className='contenet'>
                                        <h4>Account Info</h4>
                                        <img src={img} alt="logo" />
                                        <h5>Basic Info</h5>
                                    </div>

                                    <div className="">
                                        <form method="post">
                                                <div class="txt_field">
                                                    <label >User Name</label>
                                                    <input type="text" required placeholder='Ahmed Mohamed'/>
                                                    <span></span>
                                                    
                                                </div>
                                                
                                                <div class="txt_field">
                                                <label >Phone Number</label>
                                                    <input type="text" required placeholder='0122222222'/>
                                                    <span></span>
                                                </div>
                                                
                                                <div class="txt_field">
                                                <label >Email</label>
                                                    <input type="email" required placeholder='ahmed@gmail.com'/>
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

export default AccountInfo;