import React, { useState } from 'react';
import './Sign.css'
import header from '../login/home.jpg'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../login/logo.jpg'
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


function SignUpForm() {
    const navigate = useNavigate()
    return (
            <header className="main-headerr">

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
                            <Navbar.Collapse id="navbarScroll">
                                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}  navbarScroll>
                            </Nav>
                    </Navbar.Collapse>
                    </Container>
                    </Navbar>
                {/* End NAVBAR */}

            </div>

                  {/* Start From  */}

                  <h3 className='headerr'>SIGN UP</h3>



                  <form action="#" >
                  <div className="form">


                  <div className="input-boxx">
                    <input type="text" required />
                    <label>Username</label>
                  </div>

                  <div className="input-boxx">
                    <input type="text" required />
                    <label>City</label>
                  </div>

                  <div className="input-boxx">
                    <input type="text" required />
                    <label>Address</label>
                  </div>

                  <div className="input-boxx">
                    <input type="email" required />
                    <label>Email</label>
                  </div>

                  <div className="input-boxx">
                    <input type="tel" required />
                    <label>Phone number</label>
                  </div>

                  <div className="input-boxx">
                    <input type="password" required />
                    <label>Password</label>
                  </div>

                  <div className="input-boxx">
                    <input type="password" required />
                    <label>Confirm Password</label>
                  </div> 

                  
                  <button href="#action5" onClick={() => navigate('/verify')} className="btnn" >
                  Continue
                  </button>
                      </div>




                  <div className="login-register">
                  <p>
                  Already have an account?
                  <Link to="/login" className="login-link">
                  {' '}
                  Login
                  </Link>
                  </p>
                  <br />
                  <p className="terms">
                  This site is protected by reCAPTCHA and the Google{' '}
                  <Link to="#">Privacy policy</Link> and <Link to="#">Terms of service</Link> apply
                  </p>
                  </div>
                  </form>










{/* End Form */}
            </div>                         


            </header>
            

            
        );
}

export default SignUpForm;