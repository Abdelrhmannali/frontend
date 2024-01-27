import React from 'react';
import './PhoneNumber.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/095b5ad5-8eeb-4912-96fd-26b573457cfc.jpg'
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";




function PhoneNumber () {
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
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}  navbarScroll>
                            </Nav>
                    </Navbar.Collapse>
                    </Container>
                    </Navbar>
                {/* End NAVBAR */}


                {/* Start Content */}
                    <div className="content">
                        <h3>Enter your phone number</h3>
                        <input type="text" placeholder='01222222222' />
                        <div className='arrow'>
                        <FaArrowLeftLong className='arrow1' onClick={()=> navigate('/login')} />
                        <button onClick={()=> navigate('/verifypass')}>Next<FaArrowRightLong className='arrow2' /></button>
                        </div>
                        
                    </div>
                {/* End Content */}

            </div>
            </div>                         


            </header>
            

            
        );
}

export default PhoneNumber;