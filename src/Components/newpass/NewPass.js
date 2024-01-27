import React, { useState } from 'react';
import './NewPass.css'
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





function NewPass() {
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
                       
                                

                                <div className="m-content">
                                    <div className="nav">
                                        <BsArrowLeft className='icon'onClick={()=> navigate('/securitypage')} />
                                        
                                    </div>

                                    <div className='contenet'>
                                        <h4>New Password</h4>
                                        <p>Your password must be at least 6 characters long.<br></br> It should contain at least one digit and one non-digit<br></br> character.</p>


                                        
                                        
                                    </div>

                                    <div className="form-1">
                                        <form method="post">
                                        <div class="txt_field">

                                            <input type="password" required  placeholder='New Password' id="newpassword"/>
                                            <input type="password" required placeholder='Confirm New Password' id="newpassword"/>
                                            <button href="#actio6" onClick={() => navigate('/login')} className="btn" >
                                                Update
                                            </button>
                                            <span></span>
                                        </div>

                                                
                                              
                                            </form>
                                    </div>




                                </div>
                           </div>
                        </div>





                {/* End Content */}
           

                  
 </header>
           
            

            
        );
}

export default NewPass;