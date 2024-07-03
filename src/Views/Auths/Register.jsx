// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Toaster, toast } from 'react-hot-toast';
// import WhatsappIco01 from '../../Components/Chat&Whatsapp/WhatsappIco01';
// import Navbar from '../../Components/Navbar/Navbar';
// import { Link, useNavigate, useParams } from 'react-router-dom';

// const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

// const RegistrationComponent = () => {
  
//   const {refer_id} = useParams()
//   const Navigate = useNavigate()

  
    
//     const [name, setName] = useState('');
//     const [password, setPassword] = useState('');
//     const [phoneCode, setPhoneCode] = useState('+91');
//     const [mobile, setMobile] = useState('');
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [email, setEmail] = useState('');
//     const [referrerCode, setReferrerCode] = useState(refer_id);
//     const [currency, setCurrency] = useState('inr');
//     const [otp, setOtp] = useState('');
//     const [otpSent, setOtpSent] = useState(false);
//     const [otpValidationSuccess, setOtpValidationSuccess] = useState(false);
//     const [otpResendTimeout, setOtpResendTimeout] = useState(false);
//     const [resendTimer, setResendTimer] = useState(60);
    
//     const [loading, setLoading] = useState(true);
  
  
  
  
  
  
//     useEffect(() => {
//       let timer;
//       if (otpSent && otpResendTimeout) {
//         timer = setInterval(() => {
//           setResendTimer((prevTimer) => prevTimer - 1);
//         }, 1000);
//       }
  
//       return () => clearInterval(timer);
//     }, [otpSent, otpResendTimeout]);
  
//     useEffect(() => {
//       if (resendTimer === 0) {
//         setOtpResendTimeout(false);
//         setResendTimer(60); // Reset timer after it reaches 0
//       }
//     }, [resendTimer]);
//     const handleRegistrationSubmit = async (e) => {
//       e.preventDefault();
//       try {
//         const registrationResponse = await axios.post(`${apiUrl}/mobile-user-registration`, {
//           name,
//           password,
//           phone_code: phoneCode,
//           mobile,
//           first_name: firstName,
//           last_name: lastName,
//           email,
//           referrer_code: referrerCode,
//           currency,
//         });
//         console.log('Registration response:', registrationResponse.data);
//         setLoading(false);
  
//         // If registration is successful, initiate OTP sending
//         await axios.post(`${apiUrl}/mobile-get-otp`, {
//           mobile: `${phoneCode}${mobile}`
//         });
//         setOtpSent(true);
//         setOtpResendTimeout(true);
//         toast.success('Registration successful! OTP sent.');
  
//         // Store name and password in localStorage upon successful registration
//         localStorage.setItem('name', name);
//         localStorage.setItem('password', password);
//         window.location.reload();
        
//       } catch (error) {
//         console.error('Error during registration:', error);
//         toast.error(error.response?.data?.message || 'Error during registration');
//       }
//     };
  
//     const handleOtpSubmit = async (e) => {
//       e.preventDefault();
//       try {
//         const response = await axios.post(`${apiUrl}/validate-otp`, {
//           mobile: `${phoneCode}${mobile}`,
//           otp: otp
//         });
//         // Handle success response
//         console.log('OTP validation response:', response.data);
//         setOtpValidationSuccess(true);
//         // No need to display success message here
  
  
//         const {
//           //  access_token, 
//           token, result } = response.data;
  
  
//           const userData = {
//             access_token : token,
//             new_token: result.new_token,
//             user_id: result.id,
//             unique_id: result.unique_id,
//             name:result.name,
//             first_name: result.first_name,
//             last_name: result.last_name
//           };
  
//           const expirationTime = 24 * 60 * 60 * 1000 
//           const expirationDate = new Date().getTime() + expirationTime;
//           localStorage.setItem('user', JSON.stringify(userData)); 
//           localStorage.setItem('expirationDate', expirationDate);
          
//           setTimeout(() => {
//             localStorage.removeItem('user'); 
//             localStorage.removeItem('expirationDate');
//             toast.info('User data removed due to expiration.');
//           }, expirationTime);
          
    
//           toast.success('Registered successful!');
//           setTimeout(() => {
//             Navigate("/")
//           }, 1000);
  
  
  
  
        
//       } catch (error) {
//         console.error('Error during OTP validation:', error);
//         // Handle error
//         if (error.response && error.response.data) {
//           toast.error(error.response.data.message);
//         } else {
//           toast.error('Error validating OTP. Please try again.');
//         }
//       }
//     };
    
  
//     const handleResendOtp = async () => {
//       try {
//         await axios.post(`${apiUrl}/mobile-get-otp`, {
//           mobile: `${phoneCode}${mobile}`
//         });
//         setOtpSent(true);
//         setOtpResendTimeout(true);
//         toast.success('OTP resent successfully!');
  
        
//       } catch (error) {
//         console.error('Error during OTP resend:', error);
//         toast.error(error.response?.data?.message || 'Error during OTP resend');
//       }
//     };
  
  
//   const totalParticles = 1080;


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch name and password from localStorage
//         const storedName = localStorage.getItem('name');
//         const storedPassword = localStorage.getItem('password');
//         console.log(storedName)
  
//         const loginResponse = await axios.post(`${apiUrl}/login`, {
//           name: storedName,
//           password: storedPassword,
//         });
  
//         const { access_token, token, result } = loginResponse.data;
//         const userData = {
//           access_token,
//           token,
//           new_token: result.new_token,
//           user_id: result.id,
//           unique_id: result.unique_id,
//           name: result.name,
//           first_name: result.first_name,
//           last_name: result.last_name
//         };
  
//         // Calculate expiration date
//         const expirationTime = 24 * 60 * 60 * 1000; // 1 day in milliseconds
//         const expirationDate = new Date().getTime() + expirationTime;
  
//         // Save data to localStorage
//         localStorage.setItem('user', JSON.stringify(userData));
//         localStorage.setItem('expirationDate', expirationDate);
  
//         console.log('Login response:', loginResponse.data);
//         // Handle login response here
  
//         Navigate("/")
//       } catch (error) {
//         console.error('Error during login:', error);
//         // Handle error
//       }
//     };
  
//     fetchData();
//   }, []); // Empty dependency array to run only once when the component mounts
  

//   return (
// <>
// <Navbar />
//       <div id="loginpagesec">
//         <WhatsappIco01 />
//       </div>

//       <div id="circlerotdots">
//         <div id="Registernpage">
//           <div id="secoftplog">
//             <svg  viewBox="0 0 374.9130434782609 76.08695652173914" className="looka-1j8o68f"><defs id="SvgjsDefs5196"></defs><g id="SvgjsG5197" featurekey="nRdZyp-0" transform="matrix(0.9510869565217392,0,0,0.9510869565217392,-9.510869565217392,-9.510869565217392)" fill="#daa520"><path xmlns="http://www.w3.org/2000/svg" d="M35,65.833c0-8.587,3.535-16.36,9.219-21.956c-3.063-1.406-6.458-2.21-10.052-2.21C20.82,41.667,10,52.487,10,65.833  C10,79.18,20.82,90,34.167,90c3.594,0,6.988-0.804,10.052-2.21C38.535,82.194,35,74.421,35,65.833z"></path><path xmlns="http://www.w3.org/2000/svg" d="M65.833,65c-8.587,0-16.36-3.535-21.956-9.222c-1.406,3.066-2.21,6.461-2.21,10.055C41.667,79.18,52.487,90,65.833,90  C79.18,90,90,79.18,90,65.833c0-3.594-0.804-6.988-2.21-10.055C82.194,61.465,74.421,65,65.833,65z"></path><path xmlns="http://www.w3.org/2000/svg" d="M65.833,10c-3.594,0-6.988,0.804-10.055,2.21C61.465,17.806,65,25.579,65,34.167c0,8.587-3.535,16.36-9.222,21.956  c3.066,1.406,6.461,2.21,10.055,2.21C79.18,58.333,90,47.513,90,34.167C90,20.82,79.18,10,65.833,10z"></path><path xmlns="http://www.w3.org/2000/svg" d="M34.167,35c8.587,0,16.36,3.535,21.956,9.219c1.406-3.063,2.21-6.458,2.21-10.052C58.333,20.82,47.513,10,34.167,10  C20.82,10,10,20.82,10,34.167c0,3.594,0.804,6.988,2.21,10.052C17.806,38.535,25.579,35,34.167,35z"></path></g><g id="SvgjsG5198" featurekey="Q4qmbg-0" transform="matrix(3.0296415090637456,0,0,3.0296415090637456,98.78130310196369,-7.148207545318728)" fill="#fff"><path d="M9.6875 17.2754 c0 1.2305 0.11719 2.0117 0.24414 2.4512 l0 0.27344 l-2.627 0 l-0.22461 -1.0938 c-0.75195 0.9082 -2.0508 1.2891 -3.2227 1.2891 c-1.582 0 -3.125 -0.70313 -3.125 -2.793 c0 -2.0801 1.5527 -2.7832 3.6523 -3.2422 l1.6504 -0.37109 c0.71289 -0.16602 0.9668 -0.41016 0.9668 -0.82031 c0 -0.98633 -0.89844 -1.2598 -1.6895 -1.2598 c-1.0156 0 -1.7871 0.40039 -1.9629 1.5332 l-2.4902 -0.44922 c0.41992 -2.0801 1.9434 -3.0273 4.6094 -3.0273 c2.0117 0 4.2188 0.5957 4.2188 3.623 l0 3.8867 z M4.7363 18.291 c1.3379 0 2.4121 -0.88867 2.4121 -2.8809 l-2.3828 0.67383 c-0.78125 0.18555 -1.3477 0.45898 -1.3477 1.1328 c0 0.72266 0.5957 1.0742 1.3184 1.0742 z M11.800660709635416 20 l0 -15 l2.8418 0 l0 15 l-2.8418 0 z M22.82007766927083 9.766 c2.6465 0 4.834 1.9434 4.834 5.2344 s-2.1875 5.2344 -4.834 5.2344 c-1.3086 0 -2.4805 -0.50781 -3.0762 -1.4258 l0 6.0742 l-2.8125 0 l0 -14.922 l2.666 0 l0.078125 1.3477 c0.55664 -0.99609 1.7773 -1.543 3.1445 -1.543 z M22.185277669270832 17.9004 c1.4746 0 2.6563 -1.0742 2.6563 -2.9004 s-1.1816 -2.9004 -2.6563 -2.9004 c-1.5039 0 -2.6758 1.1426 -2.6758 2.9004 s1.1719 2.9004 2.6758 2.9004 z M35.22613837890625 9.766 c2.2461 0 3.5938 1.25 3.5938 3.7598 l0 6.4746 l-2.8223 0 l0 -6.0156 c0 -1.4746 -0.82031 -1.9629 -1.8262 -1.9629 c-1.0449 0 -2.1875 0.51758 -2.207 2.4414 l0 5.5371 l-2.8125 0 l0 -15 l2.8125 0 l0 6.1621 c0.71289 -0.86914 1.8359 -1.3965 3.2617 -1.3965 z M49.136149088541664 17.2754 c0 1.2305 0.11719 2.0117 0.24414 2.4512 l0 0.27344 l-2.627 0 l-0.22461 -1.0938 c-0.75195 0.9082 -2.0508 1.2891 -3.2227 1.2891 c-1.582 0 -3.125 -0.70313 -3.125 -2.793 c0 -2.0801 1.5527 -2.7832 3.6523 -3.2422 l1.6504 -0.37109 c0.71289 -0.16602 0.9668 -0.41016 0.9668 -0.82031 c0 -0.98633 -0.89844 -1.2598 -1.6895 -1.2598 c-1.0156 0 -1.7871 0.40039 -1.9629 1.5332 l-2.4902 -0.44922 c0.41992 -2.0801 1.9434 -3.0273 4.6094 -3.0273 c2.0117 0 4.2188 0.5957 4.2188 3.623 l0 3.8867 z M44.184949088541664 18.291 c1.3379 0 2.4121 -0.88867 2.4121 -2.8809 l-2.3828 0.67383 c-0.78125 0.18555 -1.3477 0.45898 -1.3477 1.1328 c0 0.72266 0.5957 1.0742 1.3184 1.0742 z M57.147709798177075 9.766 c2.6367 0 4.8242 1.9531 4.8242 5.2344 s-2.1875 5.2344 -4.8242 5.2344 c-1.3867 0 -2.5977 -0.55664 -3.1641 -1.543 l-0.068359 1.3086 l-2.666 0 l0 -15 l2.8125 0 l0 6.1816 c0.58594 -0.9082 1.7578 -1.416 3.0859 -1.416 z M56.493409798177076 17.9004 c1.4941 0 2.666 -1.1035 2.666 -2.9004 c0 -1.8066 -1.1719 -2.9102 -2.666 -2.9102 c-1.4844 0 -2.6563 1.1523 -2.6563 2.9102 s1.1621 2.9004 2.6563 2.9004 z M72.9127705078125 14.834 l-0.029297 0.67383 l-7.4414 0 c0.11719 1.6699 1.2305 2.4707 2.5684 2.4707 c1.0059 0 1.7871 -0.46875 2.168 -1.3574 l2.5781 0.38086 c-0.66406 2.0313 -2.4707 3.1934 -4.7266 3.1934 c-3.2422 0 -5.3613 -1.9141 -5.3613 -5.2148 s2.1777 -5.2344 5.2734 -5.2344 c2.8418 0 4.9609 1.5723 4.9707 5.0879 z M67.9620705078125 11.7383 c-1.2793 0 -2.168 0.5957 -2.4414 1.9336 l4.6094 0 c-0.14648 -1.2793 -1.0156 -1.9336 -2.168 -1.9336 z M78.17086559244791 20 c-1.9531 0 -3.0664 -1.1328 -3.0664 -3.1348 l0 -4.7461 l-1.9727 0 l0 -2.1582 l0.63477 0 c1.0645 0 1.6504 -0.41016 1.6504 -1.9141 l0 -1.3281 l2.5391 0 l0 3.2422 l2.0703 0 l0 2.1582 l-2.0703 0 l0 4.4434 c0 0.89844 0.43945 1.2988 1.1621 1.2988 l0.9082 0 l0 2.1387 l-1.8555 0 z"></path></g></svg>      

//             <Link to={"/login"} >Existing User? <span>click here</span></Link>
//           </div>


          
//       {!otpSent ? (
//         <form id='formalagregistek' onSubmit={handleRegistrationSubmit}>
//           <h3>Register</h3>
//           <input type="text" required placeholder='Username' value={name} onChange={(e) => setName(e.target.value)} />
//           <input type="password" required placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
//           <div id="specialfieldksk">
//                 <img src="/Logos/IndianFlag.png" alt="" />
//           {/* <input type="text" value={phoneCode} onChange={(e) => setPhoneCode(e.target.value)} /> */}
//           <input type="number"  required placeholder='Mobile Number' value={mobile} onChange={(e) => setMobile(e.target.value)} />
//               </div>
          
//           <input type="text" required placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//           <input type="text" required placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
//           {/* <input type="email" placeholder='Email (optional..)' value={email} onChange={(e) => setEmail(e.target.value)} /> */}
//           <input type="text" placeholder='Referral Code (optional..)' value={referrerCode} onChange={(e) => setReferrerCode(e.target.value)} />
//           {loading ? <button  className="buttonx1 lightx3" type="submit">Register</button> : <button  className="buttonx1 lightx5" type="submit">Loading...</button>}
//         </form>
//       ) : !otpValidationSuccess ? (
// //         <form onSubmit={handleOtpSubmit}>
// //           <label>Enter OTP:</label>
// //           <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
// //           <button type="submit"  className="buttonx1 lightx3" onClick={handleOtpSubmit}>Submit OTP</button>
// //           {!otpValidationSuccess && otpSent && otpResendTimeout ? (
// //   <p id='greenlinetodisplatime'>Resend OTP in <span>{resendTimer}</span> seconds</p>
// // ) : (
// //   !otpValidationSuccess && otpSent && (
// //     <button type="button" className="buttonx1s452d" onClick={handleResendOtp}>Resend OTP</button>
// //   )
// // )}

// //         </form>
// <><p>hii</p></>
//       ) : (
//         <p style={{padding:"20px"}}>Registration and OTP validation successful!</p>
//       )}
//     </div>
//     <div style={{ '--total': totalParticles }}>
//           {[...Array(totalParticles)].map((_, index) => (
//             <div key={index} className="particlex12s" style={{ '--index': index + 1 }}></div>
//           ))}
//         </div>
    
//     <Toaster />
    
//     </div>

// </>
//   );
// };

// export default RegistrationComponent;






































import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import WhatsappIco01 from '../../Components/Chat&Whatsapp/WhatsappIco01';
import Navbar from '../../Components/Navbar/Navbar';
import { Link, useNavigate, useParams } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const RegistrationComponent = () => {
  
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
        setTimeout(() => {
          Navigate("/")
        }, 1000);




      
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

  
  const totalParticles = 1080;

  return (
<>
<Navbar />
      <div id="loginpagesec">
        <WhatsappIco01 />
      </div>

      <div id="circlerotdots">
        <div id="Registernpage">
          <div id="secoftplog">
            <svg  viewBox="0 0 374.9130434782609 76.08695652173914" className="looka-1j8o68f"><defs id="SvgjsDefs5196"></defs><g id="SvgjsG5197" featurekey="nRdZyp-0" transform="matrix(0.9510869565217392,0,0,0.9510869565217392,-9.510869565217392,-9.510869565217392)" fill="#daa520"><path xmlns="http://www.w3.org/2000/svg" d="M35,65.833c0-8.587,3.535-16.36,9.219-21.956c-3.063-1.406-6.458-2.21-10.052-2.21C20.82,41.667,10,52.487,10,65.833  C10,79.18,20.82,90,34.167,90c3.594,0,6.988-0.804,10.052-2.21C38.535,82.194,35,74.421,35,65.833z"></path><path xmlns="http://www.w3.org/2000/svg" d="M65.833,65c-8.587,0-16.36-3.535-21.956-9.222c-1.406,3.066-2.21,6.461-2.21,10.055C41.667,79.18,52.487,90,65.833,90  C79.18,90,90,79.18,90,65.833c0-3.594-0.804-6.988-2.21-10.055C82.194,61.465,74.421,65,65.833,65z"></path><path xmlns="http://www.w3.org/2000/svg" d="M65.833,10c-3.594,0-6.988,0.804-10.055,2.21C61.465,17.806,65,25.579,65,34.167c0,8.587-3.535,16.36-9.222,21.956  c3.066,1.406,6.461,2.21,10.055,2.21C79.18,58.333,90,47.513,90,34.167C90,20.82,79.18,10,65.833,10z"></path><path xmlns="http://www.w3.org/2000/svg" d="M34.167,35c8.587,0,16.36,3.535,21.956,9.219c1.406-3.063,2.21-6.458,2.21-10.052C58.333,20.82,47.513,10,34.167,10  C20.82,10,10,20.82,10,34.167c0,3.594,0.804,6.988,2.21,10.052C17.806,38.535,25.579,35,34.167,35z"></path></g><g id="SvgjsG5198" featurekey="Q4qmbg-0" transform="matrix(3.0296415090637456,0,0,3.0296415090637456,98.78130310196369,-7.148207545318728)" fill="#fff"><path d="M9.6875 17.2754 c0 1.2305 0.11719 2.0117 0.24414 2.4512 l0 0.27344 l-2.627 0 l-0.22461 -1.0938 c-0.75195 0.9082 -2.0508 1.2891 -3.2227 1.2891 c-1.582 0 -3.125 -0.70313 -3.125 -2.793 c0 -2.0801 1.5527 -2.7832 3.6523 -3.2422 l1.6504 -0.37109 c0.71289 -0.16602 0.9668 -0.41016 0.9668 -0.82031 c0 -0.98633 -0.89844 -1.2598 -1.6895 -1.2598 c-1.0156 0 -1.7871 0.40039 -1.9629 1.5332 l-2.4902 -0.44922 c0.41992 -2.0801 1.9434 -3.0273 4.6094 -3.0273 c2.0117 0 4.2188 0.5957 4.2188 3.623 l0 3.8867 z M4.7363 18.291 c1.3379 0 2.4121 -0.88867 2.4121 -2.8809 l-2.3828 0.67383 c-0.78125 0.18555 -1.3477 0.45898 -1.3477 1.1328 c0 0.72266 0.5957 1.0742 1.3184 1.0742 z M11.800660709635416 20 l0 -15 l2.8418 0 l0 15 l-2.8418 0 z M22.82007766927083 9.766 c2.6465 0 4.834 1.9434 4.834 5.2344 s-2.1875 5.2344 -4.834 5.2344 c-1.3086 0 -2.4805 -0.50781 -3.0762 -1.4258 l0 6.0742 l-2.8125 0 l0 -14.922 l2.666 0 l0.078125 1.3477 c0.55664 -0.99609 1.7773 -1.543 3.1445 -1.543 z M22.185277669270832 17.9004 c1.4746 0 2.6563 -1.0742 2.6563 -2.9004 s-1.1816 -2.9004 -2.6563 -2.9004 c-1.5039 0 -2.6758 1.1426 -2.6758 2.9004 s1.1719 2.9004 2.6758 2.9004 z M35.22613837890625 9.766 c2.2461 0 3.5938 1.25 3.5938 3.7598 l0 6.4746 l-2.8223 0 l0 -6.0156 c0 -1.4746 -0.82031 -1.9629 -1.8262 -1.9629 c-1.0449 0 -2.1875 0.51758 -2.207 2.4414 l0 5.5371 l-2.8125 0 l0 -15 l2.8125 0 l0 6.1621 c0.71289 -0.86914 1.8359 -1.3965 3.2617 -1.3965 z M49.136149088541664 17.2754 c0 1.2305 0.11719 2.0117 0.24414 2.4512 l0 0.27344 l-2.627 0 l-0.22461 -1.0938 c-0.75195 0.9082 -2.0508 1.2891 -3.2227 1.2891 c-1.582 0 -3.125 -0.70313 -3.125 -2.793 c0 -2.0801 1.5527 -2.7832 3.6523 -3.2422 l1.6504 -0.37109 c0.71289 -0.16602 0.9668 -0.41016 0.9668 -0.82031 c0 -0.98633 -0.89844 -1.2598 -1.6895 -1.2598 c-1.0156 0 -1.7871 0.40039 -1.9629 1.5332 l-2.4902 -0.44922 c0.41992 -2.0801 1.9434 -3.0273 4.6094 -3.0273 c2.0117 0 4.2188 0.5957 4.2188 3.623 l0 3.8867 z M44.184949088541664 18.291 c1.3379 0 2.4121 -0.88867 2.4121 -2.8809 l-2.3828 0.67383 c-0.78125 0.18555 -1.3477 0.45898 -1.3477 1.1328 c0 0.72266 0.5957 1.0742 1.3184 1.0742 z M57.147709798177075 9.766 c2.6367 0 4.8242 1.9531 4.8242 5.2344 s-2.1875 5.2344 -4.8242 5.2344 c-1.3867 0 -2.5977 -0.55664 -3.1641 -1.543 l-0.068359 1.3086 l-2.666 0 l0 -15 l2.8125 0 l0 6.1816 c0.58594 -0.9082 1.7578 -1.416 3.0859 -1.416 z M56.493409798177076 17.9004 c1.4941 0 2.666 -1.1035 2.666 -2.9004 c0 -1.8066 -1.1719 -2.9102 -2.666 -2.9102 c-1.4844 0 -2.6563 1.1523 -2.6563 2.9102 s1.1621 2.9004 2.6563 2.9004 z M72.9127705078125 14.834 l-0.029297 0.67383 l-7.4414 0 c0.11719 1.6699 1.2305 2.4707 2.5684 2.4707 c1.0059 0 1.7871 -0.46875 2.168 -1.3574 l2.5781 0.38086 c-0.66406 2.0313 -2.4707 3.1934 -4.7266 3.1934 c-3.2422 0 -5.3613 -1.9141 -5.3613 -5.2148 s2.1777 -5.2344 5.2734 -5.2344 c2.8418 0 4.9609 1.5723 4.9707 5.0879 z M67.9620705078125 11.7383 c-1.2793 0 -2.168 0.5957 -2.4414 1.9336 l4.6094 0 c-0.14648 -1.2793 -1.0156 -1.9336 -2.168 -1.9336 z M78.17086559244791 20 c-1.9531 0 -3.0664 -1.1328 -3.0664 -3.1348 l0 -4.7461 l-1.9727 0 l0 -2.1582 l0.63477 0 c1.0645 0 1.6504 -0.41016 1.6504 -1.9141 l0 -1.3281 l2.5391 0 l0 3.2422 l2.0703 0 l0 2.1582 l-2.0703 0 l0 4.4434 c0 0.89844 0.43945 1.2988 1.1621 1.2988 l0.9082 0 l0 2.1387 l-1.8555 0 z"></path></g></svg>      

            <Link to={"/login"} >Existing User? <span>click here</span></Link>
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
          <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
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
    <div style={{ '--total': totalParticles }}>
          {[...Array(totalParticles)].map((_, index) => (
            <div key={index} className="particlex12s" style={{ '--index': index + 1 }}></div>
          ))}
        </div>
    
    <Toaster />
    
    </div>

</>
  );
};

export default RegistrationComponent;
