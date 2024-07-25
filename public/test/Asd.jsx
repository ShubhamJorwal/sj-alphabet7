import React, { useState } from 'react';
import axios from 'axios';

const LaunchGame = () => {
  // const [login, setLogin] = useState('sj01');
  const [login, setLogin] = useState('13823_sj01');
  // const [password, setPassword] = useState('Sj@123456');
  const [password, setPassword] = useState('aK{wyY84');
  const [userIP, setUserIP] = useState('162.12.245.8');
  const [url, setUrl] = useState('');
  const [hashstring, sethashstring] = useState('');
  const [error, setError] = useState('');

  const handleLaunchGame = async () => {
    try {
      const response = await axios.post('https://admin.alphabet7.com/public/api/launch-game', {
        login,
        password,
        userIP,
      });

      const { url, TID, Hash, rawString } = response.data;

      setUrl(url);  // Set the constructed URL in the state
      sethashstring(rawString);  // Set the constructed URL in the state
      setError('');  // Clear any previous errors
    } catch (err) {
      setError('Failed to launch game. Please try again.');
      console.error('Error launching game:', err);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Login"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="User IP"
        value={userIP}
        onChange={(e) => setUserIP(e.target.value)}
      />
      <button onClick={handleLaunchGame}>Launch Game</button>

      {url && (
        <div>
          <p><strong>Constructed URL:</strong></p>
          <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>

          <p>{hashstring}</p>
        </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default LaunchGame;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './test.scss'

// const Asd = () => {
//   const [games, setGames] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchGames = async () => {
//       const apiUrl = 'https://admin.alphabet7.com/public/api/games';

//       try {
//         const response = await axios.get(apiUrl);
//         setGames(response.data.gameresponse || []);
//         if (response.data.url) {
//           window.open(response.data.url, '_blank', 'noopener,noreferrer');
//         }
//       } catch (error) {
//         console.error('Error fetching games:', error);
//         setError('Failed to fetch games');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchGames();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div>
//       <h1>Game Catalog</h1>
//       {/* <div>{message}</div> */}
//       <div className='jklsajdflkjsdfkljsdkfljlsd'>

       
//         {games.map((game) => (
//           <div key={game.ID} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
//             <h2>{game.Trans.en}</h2>
//             <img src={game.ImageFullPath} alt={game.Trans.en} style={{ width: '100px' }} />
//             <p>System: {game.System}</p>
//             <p>Page Code: {game.PageCode}</p>
//             <p>Merchant: {game.MerchantName}</p>
//             <p>Merchant: {game.SubMerchantName}</p>
//             <p>Min Bet: {game.MinBetDefault}</p>
//             <p>Max Bet: {game.MaxBetDefault}</p>
//             <p>RTP: {game.RTP}%</p>
//             <p>Categories: {game.Categories.join(', ')}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Asd;













// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './test.scss'

// const Asd = () => {
//   const [message, setMessage] = useState('');
//   const [games, setGames] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchGames = async () => {
//       const apiUrl = 'https://admin.alphabet7.com/public/api/games';

//       try {
//         const response = await axios.get(apiUrl);
//         setMessage(response.data.message);
//         setGames(response.data.gameresponse || []);
//         if (response.data.url) {
//           window.open(response.data.url, '_blank', 'noopener,noreferrer');
//         }
//       } catch (error) {
//         console.error('Error fetching games:', error);
//         setError('Failed to fetch games');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchGames();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div>
//       <h1>Game Catalog</h1>
//       <div>{message}</div>
//       <div className='jklsajdflkjsdfkljsdkfljlsd'>
//         {games.map((game) => (
//           <div key={game.ID} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
//             <h2>{game.Trans.en}</h2>
//             <img src={game.ImageFullPath} alt={game.Trans.en} style={{ width: '100px' }} />
//             <p>System: {game.System}</p>
//             <p>Page Code: {game.PageCode}</p>
//             <p>Merchant: {game.MerchantName}</p>
//             <p>Min Bet: {game.MinBetDefault}</p>
//             <p>Max Bet: {game.MaxBetDefault}</p>
//             <p>RTP: {game.RTP}%</p>
//             <p>Categories: {game.Categories.join(', ')}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Asd;



























































// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Asd = () => {
//   const [message, setMessage] = useState('');
//   const [url, setUrl] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchGames = async () => {
//       const url = 'https://admin.alphabet7.com/public/api/games';

//       try {
//         const response = await axios.get(url);
//         setMessage(response.data.message);
//         setUrl(response.data.url);
//       } catch (error) {
//         console.error('Error fetching games:', error);
//         setError('Failed to fetch games');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchGames();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div>
//       <h1>Game Catalog</h1>
//       {/* <div>{message}</div> */}
//       <iframe width={1000} height={500} style={{background:"white"}} src={url} frameBorder="0"></iframe>
//       <div>
//         <a href={url} target="_blank" rel="noopener noreferrer">
//           {url}
//         </a>
//       </div>

    






//     </div>
//   );
// };

// export default Asd;


























































// import React, { useState } from 'react';
// import crypto from 'crypto-js';

// const Asd = () => {
//   const [url, setUrl] = useState('');

//   const API_ENDPOINT = 'https://apitest.fundist.org/System/Api';
//   const API_KEY = 'c55b38377070f9e5a42ac80f96f51130';
//   const HMAC_SECRET = 'ypltm02l19ui3im4fy620httpu2jc7cjpt3bj925wiym3lhuq5e4f9jvtdj508at';

//   // Helper function to generate hash
//   const generateHash = (params) => {
//     const hashString = Object.values(params).join('') + HMAC_SECRET;
//     return crypto.SHA256(hashString).toString(crypto.enc.Hex);
//   };

//   // Helper function to generate unique TID
//   const generateTID = () => {
//     return `${new Date().getTime()}-${Math.floor(Math.random() * 100000)}`.slice(0, 32);
//   };

//   // Function to generate and display the URL
//   const generateURL = () => {
//     const TID = generateTID(); // Unique TID for the request
//     const params = {
//       APIKey: API_KEY,
//       TID,
//     };
//     const hash = generateHash(params);

//     const generatedUrl = `${API_ENDPOINT}/${API_KEY}/Game/FullList/?&TID=${TID}&Hash=${hash}`;

//     setUrl(generatedUrl); // Set the generated URL in state
//   };

//   // Generate URL on component mount (initial load)
//   useState(() => {
//     generateURL();
//   }, []);

//   return (
//     <div>
//       <h1>Fundist Games URL Generator</h1>
//       <p>Generated URL:</p>
//       <p>{url}</p>
//     </div>
//   );
// };

// export default Asd;







































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

//   // Helper function to generate unique TID
//   const generateTID = () => {
//     return `${new Date().getTime()}-${Math.floor(Math.random() * 100000)}`;
//   };

//   // Fetch games list
//   useEffect(() => {
//     const fetchGames = async () => {
//       const TID = generateTID(); // Unique TID for the request
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
//           headers: {
//             'If-Match': '*', // Add any required precondition headers
//           },
//         });
//         console.log(response.data); // Log response for debugging
//         setGames(response.data.games);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching games:', error.response || error.message); // Log error for debugging
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchGames();
//   }, []);

//   const launchGame = async (game) => {
//     const TID = generateTID(); // Unique TID for the request
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
//         headers: {
//           'If-Match': '*', // Add any required precondition headers
//         },
//       });

//       // Embedding the game HTML/JS fragment
//       document.getElementById('game-container').innerHTML = response.data;
//     } catch (error) {
//       console.error('Error launching game:', error.response || error.message); // Log error for debugging
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

// export default Asd;



























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