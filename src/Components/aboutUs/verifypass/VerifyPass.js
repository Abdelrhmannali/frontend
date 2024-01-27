import React, { useState } from 'react';
import './VerifyPass.css';
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const VerifyPass = () => {
    const navigate = useNavigate()
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleInputChange = (e) => {
    const currentElement = e.target;
    const nextElement = currentElement.nextElementSibling;
    const prevElement = currentElement.previousElementSibling;

    if (prevElement && e.key === 'Backspace') {
      if (currentElement.value === '' && prevElement) {
        prevElement.value = '';
        prevElement.focus();
      }
      setButtonDisabled(true);
    } else {
      const reg = /^[0-9]+$/;
      if (!reg.test(currentElement.value)) {
        currentElement.value = currentElement.value.replace(/\D/g, '');
      } else if (currentElement.value && nextElement) {
        nextElement.focus();
      } else {
        setButtonDisabled(false);
      }
    }
  };

  return (
    <div className="overlay">
                <div className="overlay-background" ></div>
                <div className="overlay-content">
                  

    <div className='body'>
        <div className="otp-card">
        <h2>welcom back,ahmed</h2>
        <h3>Verification</h3>
        <p>Enter the 4-digit code</p>
        <p>Code has been sent to *********01 </p>
        <div className="otp-card-inputs">
            <input type="text" maxLength="1" autoFocus onKeyUp={handleInputChange} />
            <input type="text" maxLength="1" onKeyUp={handleInputChange} />
            <input type="text" maxLength="1" onKeyUp={handleInputChange} />
            <input type="text" maxLength="1" onKeyUp={handleInputChange} />
        </div>
        <p>
            Didn't get the code?
            <Link href="#" className="txt">
            {' '}
            Resend
            </Link>
        </p>
        <div>
            
            <Link to="" className="back-button" onClick={()=> navigate('/phonenumber')}>
                  {' '}
                  {/* <i className="fas fa-arrow-left"></i> */}
                  <FaLongArrowAltLeft />
            
                </Link>
            
            
            <button  onClick={()=> navigate('/newpass')}>Verify</button>
        </div>
        </div>
    </div>
    </div>
    </div>
    
  );
};

export default VerifyPass;