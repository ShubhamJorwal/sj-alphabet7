

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import WhatsappIco01 from '../../Components/Chat&Whatsapp/WhatsappIco01';
import Navbar from '../../Components/Navbar/Navbar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import { HideScrollOverflow } from "../../Utils/HideScrollOverflow";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const SignupPopup = ({ onClose,popupchange }) => {

  const {refer_id} = useParams()
  const Navigate = useNavigate()

  
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [phoneCode, setPhoneCode] = useState('+91');
  const [mobile, setMobile] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [referrerCode, setReferrerCode] = useState(refer_id);
  const [currency, setCurrency] = useState('inr');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpValidationSuccess, setOtpValidationSuccess] = useState(false);
  const [otpResendTimeout, setOtpResendTimeout] = useState(false);
  const [resendTimer, setResendTimer] = useState(60);
  
  const [loading, setLoading] = useState(true);






  useEffect(() => {
    let timer;
    if (otpSent && otpResendTimeout) {
      timer = setInterval(() => {
        setResendTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [otpSent, otpResendTimeout]);

  useEffect(() => {
    if (resendTimer === 0) {
      setOtpResendTimeout(false);
      setResendTimer(60); // Reset timer after it reaches 0
    }
  }, [resendTimer]);

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    try {
      const registrationResponse = await axios.post(`${apiUrl}/mobile-user-registration`, {
        name,
        password,
        phone_code: phoneCode,
        mobile,
        first_name: firstName,
        last_name: lastName,
        email,
        referrer_code: referrerCode,
        currency,
      });
      console.log('Registration response:', registrationResponse.data);
      


     
      await axios.post(`${apiUrl}/mobile-get-otp`, {
        mobile: `${phoneCode}${mobile}`
      });

      if(registrationResponse.data.error === true) {
        setLoading(false);
        toast.error(registrationResponse.data.message)
      } else {

        setOtpSent(true);
        setLoading(false);
        setOtpResendTimeout(true);
        toast.success('Registration successful! OTP sent.');
      }
        

    } catch (error) {
      console.error('Error during registration:', error);
      toast.error(error.response?.data?.message || 'Error during registration');
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/validate-otp`, {
        mobile: `${phoneCode}${mobile}`,
        otp: otp
      });
      // Handle success response
      if (response.data.error === true) {
        // toast.error('OTP validation response:', response.data);        
        console.log("Everything is alright don't worry.")
        console.log(response.data)
      } else {
        setOtpValidationSuccess(true);
        console.log(response.data)
        // toast.success()
      }
      // No need to display success message here


      const {
         access_token, 
        token, result } = response.data;


        const userData = {
          access_token: token,
          token:response.data.result.token,
          new_token: result.new_token,
          user_id: result.id,
          unique_id: result.unique_id,
          name:result.name,
          first_name: result.first_name,
          last_name: result.last_name
        };

        const expirationTime = 24 * 60 * 60 * 1000 
        const expirationDate = new Date().getTime() + expirationTime;
        localStorage.setItem('user', JSON.stringify(userData)); 
        localStorage.setItem('expirationDate', expirationDate);
        
        setTimeout(() => {
          localStorage.removeItem('user'); 
          localStorage.removeItem('expirationDate');
          toast.info('User data removed due to expiration.');
        }, expirationTime);
        
  
        toast.success('Registered successful!');
        // setTimeout(() => {
        //   Navigate("/")
        // }, 1000);
        setTimeout(() => {
          window.location.reload(); // Refresh the page
        }, 500);




      
    } catch (error) {
      console.error('Error during OTP validation:', error);
      // Handle error
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Error validating OTP. Please try again.');
      }
    }
  };
  

  const handleResendOtp = async () => {
    try {
      await axios.post(`${apiUrl}/mobile-get-otp`, {
        mobile: `${phoneCode}${mobile}`
      });
      setOtpSent(true);
      setOtpResendTimeout(true);
      toast.success('OTP resent successfully!');

      
    } catch (error) {
      console.error('Error during OTP resend:', error);
      toast.error(error.response?.data?.message || 'Error during OTP resend');
    }
  };

  


  return (
    <div className="popup-overlay">
      <div className="popup-content">
           <div id="circlerotdots">
        <div id="Registernpage">
          <div id="secoftplog">
            
          <Link onClick={() => { popupchange(true); onClose(); HideScrollOverflow(true);}}>Existing User? <span>click here</span></Link>
          <button onClick={onClose} className="close-button"><RxCross2 /></button>

          </div>


          
      {!otpSent ? (
        <form id='formalagregistek' onSubmit={handleRegistrationSubmit}>
          <h3>Register</h3>
          <input type="text" required placeholder='Username' value={name} onChange={(e) => setName(e.target.value)} />
          <input type="password" required placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <div id="specialfieldksk">
                <img src="/Logos/IndianFlag.png" alt="" />
          {/* <input type="text" value={phoneCode} onChange={(e) => setPhoneCode(e.target.value)} /> */}
          <input type="number"  required placeholder='Mobile Number' value={mobile} onChange={(e) => setMobile(e.target.value)} />
              </div>
          
          <input type="text" required placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <input type="text" required placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
          {/* <input type="email" placeholder='Email (optional..)' value={email} onChange={(e) => setEmail(e.target.value)} /> */}
          <input type="text" placeholder='Referral Code (optional..)' value={referrerCode} onChange={(e) => setReferrerCode(e.target.value)} />
          {/* {loading ? <button  className="buttonx1 lightx2" type="submit">Register</button> : <button  className="buttonx1 lightx5" type="submit">Loading...</button>} */}
          <button  className="buttonx1 lightx2" type="submit">Register</button>
        </form>
      ) : !otpValidationSuccess ? (
        <form onSubmit={handleOtpSubmit}>
          <label>Enter OTP:</label>
          <input type="number" value={otp} placeholder='Enter Otp here.'  onChange={(e) => setOtp(e.target.value)} />
          <button type="submit"  className="buttonx1 lightx3" onClick={handleOtpSubmit}>Submit OTP</button>
          {!otpValidationSuccess && otpSent && otpResendTimeout ? (
  <p id='greenlinetodisplatime'>Resend OTP in <span>{resendTimer}</span> seconds</p>
) : (
  !otpValidationSuccess && otpSent && (
    <button type="button" className="buttonx1s452d" onClick={handleResendOtp}>Resend OTP</button>
  )
)}

        </form>
      ) : (
        <p style={{padding:"20px"}}>Registration and OTP validation successful!</p>
      )}
    </div>
  
    
    <Toaster />
    
    </div>
      </div>
    </div>
  );
};

export default SignupPopup;
