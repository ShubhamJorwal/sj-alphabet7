import React, { useState, useEffect } from "react";
import './popup.scss'; // Add your popup styling here
import axios from "axios";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
import { Toaster, toast } from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { HideScrollOverflow } from "../../Utils/HideScrollOverflow";

const LoginPopup = ({ onClose, popupchange }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', password: '' });
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(true);
  const [is18PlusChecked, setIs18PlusChecked] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpResendTimeout, setOtpResendTimeout] = useState(false);
  const [isOtpLogin, setIsOtpLogin] = useState(false);
  const [timer, setTimer] = useState(0);
  const [orderId, setOrderId] = useState('');


  useEffect(() => {
    let countdown;
    if (otpResendTimeout) {
      setTimer(60); // Set countdown timer to 60 seconds
      countdown = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(countdown);
            setOtpResendTimeout(false);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
    return () => clearInterval(countdown);
  }, [otpResendTimeout]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (name === 'is18Plus') {
      setIs18PlusChecked(checked);
    } else if (name === 'rememberMe') {
      setRememberMe(checked);
    }
  };



  const handleLogin = async (e) => {
    e.preventDefault();
    if (!is18PlusChecked) {
      toast.error('You must be 18 years or older to log in.');
      return;
    }


    let loginData;
    if (/^\d{10}$/.test(formData.name)) {
      // If 10 digits, assume it's a mobile number, add '91' prefix
      loginData = { name: `91${formData.name}`, password: formData.password };
    } else {
      // Otherwise, treat it as a username
      loginData = formData;
    }


    try {
    const response = await axios.post(`${apiUrl}/login`, loginData);
    const { access_token, token, result } = response.data;
    const userData = {
      access_token,
      token,
      new_token: result.new_token,
      user_id: result.id,
      unique_id: result.unique_id,
      name: result.name,
      first_name: result.first_name,
      last_name: result.last_name
    };
    setLoading(false);
    const expirationTime = rememberMe ? 7 * 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000;
    const expirationDate = new Date().getTime() + expirationTime;
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('expirationDate', expirationDate);
    toast.success('Login successful!');
    setTimeout(() => {
      window.location.reload();
    }, 500);
    setTimeout(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('expirationDate');
      toast.info('User data removed due to expiration.');
    }, expirationTime);
  } catch (error) {
    toast.error('Login failed. Please check your credentials.');
  }
};

  const handleSendOtp = async () => {
    if (mobile.length === 10) {
      setMobile(`91${mobile}`);
    }
    try {
      const otpResponse = await axios.post(`${apiUrl}/login-with-otp`, { mobile: mobile.startsWith('91') ? mobile : `91${mobile}` });
      setOtpSent(true);
      setOtpResendTimeout(true);
      toast.success('OTP sent successfully!');
      setOrderId(otpResponse.data.orderId);
    } catch (error) {
      console.error('Error during OTP sending:', error);
      toast.error(error.response?.data?.message || 'Error during OTP sending');
    }
  };
  
  const handleResendOtp = async () => {
    if (!otpResendTimeout) {
      try {
        const otpResponse = await axios.post(`${apiUrl}/login-with-otp`, { mobile });
        setOtpSent(true);
        setOtpResendTimeout(true);
        toast.success('OTP resent successfully!');
        setOrderId(otpResponse.data.orderId);
      } catch (error) {
        console.error('Error during OTP resend:', error);
        toast.error(error.response?.data?.message || 'Error during OTP resend');
      }
    }
  };
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/validate-otp`, { mobile, otp, orderId });
      const { access_token, token, result } = response.data;
      const userData = {
        access_token,
        token,
        new_token: result.new_token,
        user_id: result.id,
        unique_id: result.unique_id,
        name: result.name,
        first_name: result.first_name,
        last_name: result.last_name
      };
      setLoading(false);
      const expirationTime = rememberMe ? 7 * 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000;
      const expirationDate = new Date().getTime() + expirationTime;
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('expirationDate', expirationDate);
      toast.success('Login successful!');
      setTimeout(() => {
        window.location.reload();
      }, 500);
      setTimeout(() => {
        localStorage.removeItem('user');
        localStorage.removeItem('expirationDate');
        toast.info('User data removed due to expiration.');
      }, expirationTime);
    } catch (error) {
      toast.error('OTP verification failed. Please check your OTP.');
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div id="circlerotdots">
          <div id="loginpage">
            <div id="secoftplog">
              
              <Link onClick={() => { popupchange(true); onClose(); HideScrollOverflow(true);}}>Don't have an account? <span>click here</span></Link>
              <button onClick={onClose} className="close-button"><RxCross2 /></button>
            </div>
            {!isOtpLogin ? (
              <form onSubmit={handleLogin}>
                <h3>Login</h3>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="username or mobile no"
                  required
                />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="password"
                  required
                />
                <div id="checkboxeslogx1">
                  <div>
                    <input
                      type="checkbox"
                      id="is18Plus"
                      name="is18Plus"
                      checked={is18PlusChecked}
                      onChange={handleCheckboxChange}
                      className="checkboxestolog"
                      required
                    />
                    <label htmlFor="is18Plus">I'm 18+</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="rememberMe"
                      name="rememberMe"
                      checked={rememberMe}
                      onChange={handleCheckboxChange}
                      className="checkboxestolog"
                    />
                    <label htmlFor="rememberMe">Remember me</label>
                  </div>
                </div>
                {!is18PlusChecked && <p id="errorlinelog18">Please Confirm You Are Above 18 Years Old</p>}
                <button className="buttontohandlecks" type="submit" disabled={!is18PlusChecked}>Login</button>
                <button
                  type="button"
                  className="buttontohandlecks x56wserlowiotp"
                  onClick={() => setIsOtpLogin(true)}
                >
                  Login with OTP
                </button>
                <div id="secoftplogx2">
                  <a target="_blank" href="https://wa.me/+916309854028?text=Connect with Alphabet7 for prompt support and feedback opportunities.">
                    <i className="bi bi-whatsapp"></i><span>Get Instant Id</span>
                  </a>
                </div>
              </form>
            ) : (
              <form onSubmit={handleOtpSubmit}>
                {!otpSent ? (
                  <>
                    <input
                      type="text"
                      id="mobile"
                      name="mobile"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="Enter mobile number"
                      required
                    />
                    <button className="buttontohandlecks" type="button" onClick={handleSendOtp}>Send OTP</button>
                  </>
                ) : (
                  <>
                    <input
                      type="text"
                      id="otp"
                      name="otp"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="Enter OTP"
                      required
                    />
                    <button className="buttontohandlecks" type="submit">Verify OTP</button>
                    {otpResendTimeout ? (
                       <p className="sdc4s5df45s6dxse" id='greenlinetodisplatime'>Resend OTP in <span>{timer}</span> seconds</p>
                   
                    ) : (
                      <button className="buttontohandlecks" type="button" onClick={handleResendOtp}>Resend OTP</button>
                    )}
                  </>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default LoginPopup;
