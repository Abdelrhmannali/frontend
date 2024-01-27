import React from 'react';
import './ServiceProvider.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/095b5ad5-8eeb-4912-96fd-26b573457cfc.jpg'
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { RiUpload2Fill } from "react-icons/ri";





function ServiceProvider() {
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
                                    <h5  onClick={()=> navigate('/accountinfo')} >Account Info</h5>
                                    <h5 onClick={()=> navigate('/securitypage')}>Security</h5>
                                    <h5 className='service_provider'>Become a service provider</h5>
                                </div>

                                <div className="main_contentt">
                                    <div className="nav">
                                        <BsArrowLeft className='icon' onClick={()=> navigate('/afterlogin')} />
                                    </div>

                                    <div className='contenet'>
                                        <h4 className='top_header'>Become a Service Provider</h4>
                                        <p>Here's what you need to do to set up your account be a service provider</p>
                                        <div className="option">
                                            <div className="select">
                                                <select id="mySelect" name="mySelect">
                                                    <option value="placeholder" disabled selected>Your Service</option>
                                                    <option value="option1">Plumbing</option>
                                                    <option value="option2">Electricity</option>
                                                    <option value="option3">Carpentry</option>
                                                    <option value="option3">Smith</option>
                                                    <option value="option3">cleanliness</option>
                                                </select>
                                            </div>

                                            <div className="select">
                                                <select id="mySelect" name="mySelect">
                                                <option value="placeholder" disabled selected>Years of experience</option>
                                                    <option value="option1">1</option>
                                                    <option value="option2">2</option>
                                                    <option value="option3">3</option>
                                                </select>
                                            </div>

                                            <div className="select">
                                                
                                                <input  type="text" placeholder='National ID'  />
                                            </div>

                                        </div>

                                        <div className="button">
                                            <button>Done</button>
                                        </div>
                                    </div>

                                    




                                </div>
                        </div>





                {/* End Content */}
            </div>

                  

            </header>
            

            
        );
}

export default ServiceProvider;