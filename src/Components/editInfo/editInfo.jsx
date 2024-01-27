import React from 'react';
import './editInfo.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/095b5ad5-8eeb-4912-96fd-26b573457cfc.jpg'
import { BsArrowLeft } from "react-icons/bs";
import img from '../images/Group 60.png'
import { useNavigate } from "react-router-dom";

function EditInfo() {
    const navigate = useNavigate();
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

                <div className="page_content">
                    <BsArrowLeft className='icon' href="/" onClick={()=> navigate('/accountinfo')} />
                    <div className="updating">
                        <img src={img} alt="logo" />
                        <form action="post">
                            <input type="text" placeholder='Ahmed Mohamed' />
                            <input type="text" placeholder='Alex' />
                            <input type="text" placeholder='Elmontaza' />
                            <input type="text" placeholder='Ahmed@gmail.com' />
                            <input type="text" placeholder='0122222222' />
                        </form>
                        <button href="/" onClick={()=> navigate('/accountinfo')}>Update</button>
                    </div>
                </div>


            </div>
            </div>                         


            </header>
            

            
        );
}

export default EditInfo;