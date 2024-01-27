import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LoginComponent.css';
// import img from './photo_2024-01-22_18-39-10.jpg';
import img from './logo.jpg';
//import { person, business, location, mail, call, lockOpen, lockClosed } from 'react-ionicons';
import { Close ,Person,Mail} from 'react-ionicons'


import { useNavigate } from 'react-router-dom';








const LoginComponent = () => {
 
  
  useEffect(() => {
    
  
    setPopupActive(true);
    setRegisterActive(false);
  }, []);
  const navigate = useNavigate()
  const [isPopupActive, setPopupActive] = useState(false);
  const [isRegisterActive, setRegisterActive] = useState(false);

  const handleRegisterClick = () => {
    setPopupActive(true);
    setRegisterActive(true);
  };

  const handleLoginClick = () => {
    setPopupActive(true);
    setRegisterActive(false);
  };

  const handlePopupClose = () => {
    setPopupActive(false);
  };

  return (
    <>
   
   <div className="overlay">
                <div className="overlay-background" ></div>
                <div className="overlay-content">

    <div className='body'>
      <header className='header'>
        <h4>  </h4>
        <nav className="navigation">
          <Link to="/frontend">Home</Link>
          <Link to="/security">Security</Link>
          <Link to="/help">Help</Link>
        </nav>
         {/* <button className='btnlogin' onClick={handleLoginClick}>
          Login
        </button> */}
      </header>
  
      

      <div className={`wrapper ${isPopupActive ? 'active-popup' : ''} ${isRegisterActive ? 'active' : ''}`}>
      
       
 


       

        <div className={`form-box login ${isPopupActive && !isRegisterActive ? 'active' : ''}`}>
          <img src={img} alt="servfix icon" className="img" />
          <form action="#">
            <div className="input-box">
              
              <input type="email" required />
              <label>Email or Phone number</label>
            </div>
            <div className="input-box">
              
              <input type="password" required />
              <label>Password</label>
            </div>

            <div className="remember-forget">
              <label>
                <input type="checkbox" />Remember me
              </label>
              <Link to="#"href="/" onClick={()=> navigate('/phonenumber')}>Forget password?</Link>
            </div>

            <button href="#actio6" onClick={() => navigate('/afterlogin')} className="btn" >
              LOG IN 
            </button>

            <div className="login-register">
              <p>
                Don't have an account?
                <Link to="/sign" className="register-link" >
                  {' '}
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>

        <div className={`form-box register ${isPopupActive && isRegisterActive ? 'active' : ''}`}>
        
        
         
</div>
</div>
        </div>
      </div>
    </div>
    </>
  );
};

export default LoginComponent;
