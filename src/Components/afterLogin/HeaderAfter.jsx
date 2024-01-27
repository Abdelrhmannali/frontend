import React from "react";
import header from '../images/header.jpeg'
import './HeaderAfter.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/095b5ad5-8eeb-4912-96fd-26b573457cfc.jpg'
import Form from 'react-bootstrap/Form';
import setting from '../images/setting.jpg';
import { GoGear } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { BiSolidMessageRounded } from "react-icons/bi";
import img1 from "../../assets/WhatsApp Image 2024-01-17 at 4.23.42 PM.jpeg";
import img2 from "../../assets/WhatsApp Image 2024-01-17 at 4.23.42 PM (3).jpeg";
import img3 from "../../assets/WhatsApp Image 2024-01-17 at 4.23.42 PM (1).jpeg";
import img5 from "../../assets/WhatsApp Image 2024-01-17 at 4.23.42 PM (2).jpeg";
import img4 from "../../assets/WhatsApp Image 2024-01-17 at 4.23.41 PM (1).jpeg";
import img6 from "../../assets/footer.jpeg"
import Card from "../aboutUs/Card";
import OtherCard from "../aboutUs/OtherCard";



function AfterLogin () {
    const navigate = useNavigate()
    return (
            <header className="main-header">
                <div className="overlay">
                    <div className="overlay-background" ></div>
                    <div className="overlay-content">
                
                {/* Start Header */}
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
                                    <Nav.Link href="#action1" onClick={()=> navigate('/frontend')}>HOME</Nav.Link>
                                    <Nav.Link href="#action2">SECURITY</Nav.Link>
                                    <Nav.Link href="#action3">HELP</Nav.Link>
                                </Nav>

                                <div className="icons">
                                    <IoMdPerson className="on_icon" href="/" onClick={()=> navigate('/accountinfo')}/>
                                    <FaHeart className="on_icon" />
                                    <FaBell className="on_icon" />
                                    <BiSolidMessageRounded className="on_icon" />
                                </div>
                                


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
                    {/* End DIV FOR HEADER */}
                    </div>
                {/* End Header */}


                {/* Start About Us */}
                    <div className="about">
                            <div className="ServicesSection">
                                <Card
                                img={img1}
                                btn={"Electricity"}
                                text1={"Preparing all electrical "}
                                text2={"faults"}
                                />
                                <OtherCard
                                img={img2}
                                btn={"Smith"}
                                text1={"Prepare anything related to "}
                                text2={"mettal in your home"}
                                />
                                <Card
                                img={img3}
                                btn={"Plumping"}
                                text1={"Plumping and water problems "}
                                text2={"will be fixed"}
                                />
                                <OtherCard
                                img={img4}
                                border={true}
                                btn={"Carpently"}
                                text1={"Fix any carpently problem "}
                                />
                                <Card
                                img={img5}
                                btn={"Cleanliness"}
                                text1={"The best home "}
                                text2={"Cleaning"}
                                />
                            </div>
                    </div>
                {/* End About Us */}


                {/* Start Footer */}
                    <div className="footer">
                            <div className="heading">
                            <h4>Servfix</h4>
                            <p>Visit Help Center</p>
                            </div>
                            <div className="services">
                            <h4>Services</h4>
                            <div className="links">
                                <a href="">Electricity</a>
                                <a href="">Smith</a>
                                <a href="">Plumbing</a>
                                <a href="">Carpontery</a>
                                <a href="">Cleanliness</a>
                            </div>
                            </div>
                            <div className="contact">
                            <h4>Contact Us</h4>
                            <div className="links">
                                <a href="">+3040402010204202</a>
                                <a href="">+3040402010204202</a>
                                <a href="">+3040402010204202</a>
                                <a href="">+3040402010204202</a>
                                <a href="">+3040402010204202</a>
                            </div>
                            </div>
                            <div className="last">
                            <h5>Servifix Application</h5>
                            <img
                                style={{
                                width: "40px ",
                                height: "40px",
                                borderRadius: "50%",
                                objectFit: "cover",
                                }}
                                src={img6}
                                alt="footer"
                            />
                            </div>
                        </div>
                        <div className="rights">All rights reserved servifix @2024</div>
                        </div>
                {/* End Footer */}

                </header>

          
        );
}

export default AfterLogin;