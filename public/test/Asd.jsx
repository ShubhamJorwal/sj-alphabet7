import React, { useState, useEffect } from 'react';
import axios from 'axios';
import crypto from 'crypto-js';

const Asd = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_ENDPOINT = 'https://apitest.fundist.org/System/Api';
  const API_KEY = 'c55b38377070f9e5a42ac80f96f51130';
  const API_PASSWORD = '7094009326200422';
  const HMAC_SECRET = 'ypltm02l19ui3im4fy620httpu2jc7cjpt3bj925wiym3lhuq5e4f9jvtdj508at';
  const CASINO_SERVER_IP = '0.0.0.0'; // Use real IP if known

  // Helper function to generate hash
  const generateHash = (params) => {
    const hashString = Object.values(params).join('') + HMAC_SECRET;
    return crypto.SHA256(hashString).toString(crypto.enc.Hex);
  };

  // Helper function to generate unique TID
  const generateTID = () => {
    return `${new Date().getTime()}-${Math.floor(Math.random() * 100000)}`.slice(0, 32);
  };

  // Fetch games list
  useEffect(() => {
    const fetchGames = async () => {
      const TID = generateTID(); // Unique TID for the request
      const params = {
        APIKey: API_KEY,
        API_Password: API_PASSWORD,
        TID,
        CASINO_SERVER_IP,
      };
      const hash = generateHash(params);

      try {
        const response = await axios.get(`${API_ENDPOINT}/${API_KEY}/Game/FullList/?&TID=${TID}&Hash=${hash}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log('Response Data:', response.data); // Log response for debugging
        setGames(response.data.games);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching games:', error.response || error.message); // Log error for debugging
        setError(error.message);
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  const launchGame = async (game) => {
    const TID = generateTID(); // Unique TID for the request
    const USERIP = '162.241.85.108'; // Replace with actual user IP
    const params = {
      Login: 'testlogin', // Replace with actual login
      Password: 'testpassword', // Replace with actual password
      System: game.System,
      TID,
      APIKey: API_KEY,
      API_Password: API_PASSWORD,
      UserIP: USERIP,
      CASINO_SERVER_IP,
    };
    const hash = generateHash(params);

    try {
      const response = await axios.get(`${API_ENDPOINT}/${API_KEY}/User/AuthHTML/?&TID=${TID}&Hash=${hash}&Page=${game.PageCode}`, {
        params: {
          ...params,
          UserAutoCreate: 1,
          Currency: 'USD',
          Country: 'USA',
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Embedding the game HTML/JS fragment
      document.getElementById('game-container').innerHTML = response.data;
    } catch (error) {
      console.error('Error launching game:', error.response || error.message); // Log error for debugging
      setError(error.message);
    }
  };

  if (loading) {
    return <div>Loading games...</div>;
  }

  if (error) {
    return <div>Error loading games: {error}</div>;
  }

  return (
    <div>
      <h1>Fundist Games</h1>
      <div id="game-container"></div>
      <ul>
        {games.map((game) => (
          <li key={game.PageCode}>
            {game.Name}
            <button onClick={() => launchGame(game)}>Launch Game</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Asd;









































// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import crypto from 'crypto-js';

// const Asd = () => {
//   const [games, setGames] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const API_ENDPOINT = 'https://apitest.fundist.org/System/Api';
//   const API_KEY = 'c55b38377070f9e5a42ac80f96f51130';
//   const API_PASSWORD = '7094009326200422';
//   const HMAC_SECRET = 'ypltm02l19ui3im4fy620httpu2jc7cjpt3bj925wiym3lhuq5e4f9jvtdj508at';

//   // Helper function to generate hash
//   const generateHash = (params) => {
//     const hashString = Object.values(params).join('') + HMAC_SECRET;
//     return crypto.SHA256(hashString).toString(crypto.enc.Hex);
//   };

//   // Fetch games list
//   useEffect(() => {
//     const fetchGames = async () => {
//       const TID = new Date().getTime(); // Unique TID for the request
//       const params = {
//         TID,
//         APIKey: API_KEY,
//         API_Password: API_PASSWORD,
//       };
//       const hash = generateHash(params);

//       try {
//         const response = await axios.get(`${API_ENDPOINT}/${API_KEY}/Game/FullList`, {
//           params: {
//             TID,
//             Hash: hash,
//           },
//         });
//         setGames(response.data.games);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchGames();
//   }, []);

//   const launchGame = async (game) => {
//     const TID = new Date().getTime(); // Unique TID for the request
//     const USERIP = '162.241.85.108'; // Replace with actual user IP
//     const params = {
//       Login: 'testlogin', // Replace with actual login
//       Password: 'testpassword', // Replace with actual password
//       System: game.System,
//       TID,
//       APIKey: API_KEY,
//       API_Password: API_PASSWORD,
//       UserIP: USERIP,
//     };
//     const hash = generateHash(params);

//     try {
//       const response = await axios.get(`${API_ENDPOINT}/${API_KEY}/User/AuthHTML`, {
//         params: {
//           ...params,
//           Hash: hash,
//           UserAutoCreate: 1,
//           Currency: 'USD',
//           Country: 'USA',
//           Page: game.PageCode,
//         },
//       });

//       // Embedding the game HTML/JS fragment
//       document.getElementById('game-container').innerHTML = response.data;
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   if (loading) {
//     return <div>Loading games...</div>;
//   }

//   if (error) {
//     return <div>Error loading games: {error}</div>;
//   }

//   return (
//     <div>
//       <h1>Fundist Games</h1>
//       <div id="game-container"></div>
//       <ul>
//         {games.map((game) => (
//           <li key={game.PageCode}>
//             {game.Name}
//             <button onClick={() => launchGame(game)}>Launch Game</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Asd





























// import React, { useState } from 'react';
// import axios from 'axios';

// const Asd = () => {
//   const [loading, setLoading] = useState(false);
//   const [gameUrl, setGameUrl] = useState('');

//   const launchGame = async () => {
//     setLoading(true);

//     try {
//       const response = await axios.post('https://your-backend-server/launch-game', {
//         // Add necessary parameters here
//         login: 'playerLogin',
//         password: 'playerPassword',
//         system: '998', // Example value for System
//         page: 'crazytime:CrazyTime0000001', // Example value for Page
//         userIp: 'userIpAddress', // User's IP address
//         userAutoCreate: 1,
//         currency: 'USD',
//         country: 'USA',
//       });

//       const { data } = response;

//       if (data.success) {
//         setGameUrl(data.gameUrl); // Assuming backend returns gameUrl
//       } else {
//         console.error('Error launching game:', data.message);
//       }
//     } catch (error) {
//       console.error('API call failed:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <button onClick={launchGame} disabled={loading}>
//         {loading ? 'Launching...' : 'Launch Game'}
//       </button>
//       {gameUrl && (
//         <iframe
//           src={gameUrl}
//           title="Casino Game"
//           width="100%"
//           height="600px"
//           frameBorder="0"
//           allowFullScreen
//         ></iframe>
//       )}
//     </div>
//   );
// };


// export default Asd

































































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