import React from 'react'

const Asd = () => {
  return (
    <div>
      
    </div>
  )
}

export default Asd





























































// import React, { useEffect } from 'react';

// const Asd = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.id = 'otpless-sdk';
//     script.type = 'text/javascript';
//     script.src = 'https://otpless.com/v2/auth.js';
//     script.dataset.appid = 'ZHG4C7EH5807TRPKLYMI';
//     document.body.appendChild(script);

//     window.otpless = async (otplessUser) => {
//       try {
//         const userResponse = await authenticateUser(otplessUser);
//         console.log('User authenticated:', userResponse);
//         // Redirect user or update UI as needed
//       } catch (error) {
//         console.error('Authentication failed:', error);
//       }
//     };

//     return () => {
//       document.body.removeChild(script);
//       delete window.otpless;
//     };
//   }, []);

//   const authenticateUser = async (user) => {
//     // Example function to handle user authentication
//     const response = await fetch('/api/authenticate', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(user),
//     });
//     return response.json();
//   };

//   return <div id="otpless-login-page"></div>;
// };



// export default Asd



































































// import React from "react";
// import "./accountnavtop.scss";
// import { Link } from "react-router-dom";
// import { VscAccount } from "react-icons/vsc";
// import { PiCurrencyInrLight } from "react-icons/pi";
// import { GiReceiveMoney } from "react-icons/gi";
// import { CiBank } from "react-icons/ci";
// import { HiOutlineCubeTransparent } from "react-icons/hi2";

// const AccountNavtop = () => {
//   const clearLocalStorageAndReload = () => {
//     localStorage.removeItem("user");
//     window.location.reload();
//   };

//   return (
//     <>
//       <main id="accordioxsfdn">
//         <div className="dropdownsdf4sd53">
//           <Link to={"/player/profile"} className="btnx25sd">
//             <VscAccount /> Profile Info
//           </Link>
//           <div className="dropdown-content">
//             <div id="dropconsd21">
//               <Link to={"/player/change-password"} className="bs452d6">
//                 Change Password
//               </Link>
//               {/* <div className="bs452d6" onClick={clearLocalStorageAndReload}>
//                 Logout
//               </div> */}
//             </div>
//           </div>
//         </div>
//         <div className="dropdownsdf4sd53">
//           <Link to={"/player/promotions"} className="btnx25sd">
//             <GiReceiveMoney /> Promotions
//           </Link>
//         </div>
//         <div className="dropdownsdf4sd53">
//           <Link to={"/player/deposit"} className="btnx25sd">
//             <PiCurrencyInrLight /> Finances
//           </Link>
//           <div className="dropdown-content">
//             <div id="dropconsd21">
//               <Link to={"/player/deposit"} className="bs452d6">
//                 Deposit
//               </Link>
//               <Link to={"/player/deposit-history"} className="bs452d6">
//                 History
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="dropdownsdf4sd53">
//           <Link to={"/player/withdraw"} className="btnx25sd">
//             <CiBank /> Withdraw
//           </Link>
//           <div className="dropdown-content">
//             <div id="dropconsd21">
//               <Link to={"/player/bank-details"} className="bs452d6">
//                 Bank Details
//               </Link>
//               <Link to={"/player/kyc-verification"} className="bs452d6">
//                 KYC Verification
//               </Link>
//               <Link to={"/player/withdraw-history"} className="bs452d6">
//                 History
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="dropdownsdf4sd53">
//           <Link to={"/player/bet-details"} className="btnx25sd">
//             <HiOutlineCubeTransparent /> Bet Details
//           </Link>

//           {/* <div className="dropdown-content">
//             <div id="dropconsd21">
//               <Link to={"/player/bank-details"} className="bs452d6">
//                 Bank Details
//               </Link>
//               <Link to={"/player/kyc-verification"} className="bs452d6">
//                 KYC Verification
//               </Link>
//               <Link to={"/player/withdraw-history"} className="bs452d6">
//                 History
//               </Link>
           
//             </div>
//           </div> */}
//         </div>

//         <div id="sdjksdkfljdskcoiwl4515">
//           <div className="coin">
//             <div className="front jump">
//               <div className="star"></div>
//               <span className="currency">₹</span>
//               <div className="shapes">
//                 <div className="shape_l"></div>
//                 <div className="shape_r"></div>
//                 <span className="top">coin</span>
//                 <span className="bottom">you</span>
//               </div>
//             </div>
//             <div className="shadow"></div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default AccountNavtop;