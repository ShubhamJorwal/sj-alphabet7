import React, { useEffect, useState } from 'react'
import './navbar.scss'
import { Link, useNavigate } from 'react-router-dom';
import { IoIosNotificationsOutline } from "react-icons/io";
import axios from "axios";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
import { Toaster, toast } from 'react-hot-toast';
import { BiMoneyWithdraw } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { CiBank } from "react-icons/ci";
import { GiReceiveMoney } from "react-icons/gi";
import LoadingBar from "react-top-loading-bar";
import WhatsappIco01 from '../Chat&Whatsapp/WhatsappIco01';
import { TfiWallet } from "react-icons/tfi";
import SignupPopup from './SignupPopup';
import LoginPopup from './LoginPopup';
import { HideScrollOverflow } from '../../Utils/HideScrollOverflow';
import { FcMenu } from 'react-icons/fc';
import { SlMenu } from 'react-icons/sl';
import TelegramIco01 from '../Chat&Whatsapp/TelegramIco01';
import { RxCross2 } from 'react-icons/rx';
import VoiceInput from '../VoiceINput/VoiceInput';
import AccountNavtop from '../AccountNavtop/AccountNavtop';
import MobileAccountTop from '../AccountNavtop/MobileAccountTop';




const Navbar = () => {
  const [loginTrue, setLoginTrue] = useState(false);
  const [userData, setUserData] = useState(null);
  const [progress, setProgress] = useState(0);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showSignupPopup, setShowSignupPopup] = useState(false);

  const Navigate = useNavigate();

  const fetchUserData = () => {
    const storedUserData = localStorage.getItem('user');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      if (userData && userData.access_token) {
        setLoginTrue(true);
        const accessToken = userData.access_token;
        const headers = {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        };
        const apiUrlxs = `${apiUrl}/user-profile`;
        axios
          .get(apiUrlxs, { headers })
          .then(response => {
            setUserData(response.data);
          })
          .catch(error => {
            console.error('There was a problem fetching the user profile:', error);
          });
      } else {
        setLoginTrue(false);
      }
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(fetchUserData, 6000); // Polling interval: every minute (adjust as needed)
    return () => clearInterval(intervalId); // Cleanup
  }, []);

  const clearLocalStorageAndReload = () => {
    localStorage.removeItem('user');
    localStorage.clear();
    Navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setProgress(10);
    }, 10);

    const timer2 = setTimeout(() => {
      setProgress(20);
    }, 100);

    const timer3 = setTimeout(() => {
      setProgress(30);
    }, 300);

    const timer4 = setTimeout(() => {
      setProgress(100);
    }, 600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);








  // sidebar of mobile 
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };



  const [isOpenx2, setIsOpenx2] = useState(false);

  const toggleSliderx2 = () => {
    setIsOpenx2(!isOpenx2);
  };



  return (
    <>


<div>

      <div className={`sidebarxs4wider ${isOpenx2 ? 'openx56w4er5' : ''}`}>
        <button onClick={toggleSliderx2} className="closesdf26tton"><RxCross2 /> </button>
        <div className="contentx5we5we">
          <div className="logosectioncs4565w">
          <a href="/"><img src="/OrignialLogo.png" alt="" /></a>
          </div>

          <div className="x5w598s23r1sd5f2">
                  <div className="loginbuttonnavsxkk">
                  <button onClick={() => { setShowLoginPopup(true); HideScrollOverflow(true); }}>Login</button>
                  </div>
                  <div className="signupbuttonnavsxkk">
                    <button onClick={() => { setShowSignupPopup(true); HideScrollOverflow(true); }}>Sign-up</button>

                  </div>
          </div>


          <div className="cx4ws5w5e">
            <div className="xs85w85we4r56sed546"><img src="/Final_Assets/Icons/casinoico1.svg" alt="" /> Online Casino</div>
            <div className="xs85w85we4r56sed546"><img src="/Final_Assets/Icons/Roulette.svg" alt="" /> Roulette</div>
            <div className="xs85w85we4r56sed546"><img src="/Final_Assets/Icons/Card%20Games.svg" alt="" /> Darbar</div>
            <div className="xs85w85we4r56sed546"><img src="/Final_Assets/Icons//Andar%20Bahar.svg" alt="" /> Andarbahar</div>
            <div className="xs85w85we4r56sed546"><img src="/Final_Assets/Icons/Slots%20Games.svg" alt="" /> Slots</div>
          </div>

          <div className="xw8954sd85565sd">
              <VoiceInput/>
          </div>
        </div>
      </div>
      {isOpenx2 && <div className="overlayx6574we5r7e" onClick={toggleSliderx2}></div>}
    </div>












      <LoadingBar
        color="#fe9f23"
        height="3px"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      <nav id="navbar">

        <div className="bottombarx5s36">

        
        <Link to={"/"} className="mbsidbarnavx4s-menu-button">
        <img src="/Final_Assets/Icons/homeicon.svg" alt="" />
          <p>Home</p>
        </Link>

        
        <Link to={"/online-casino-games/BetGames"} className="mbsidbarnavx4s-menu-button">
        <img src="/Final_Assets/Icons/casinoico1.svg" alt="" />
          <p>Casino</p>
        </Link>


        {/* {loginTrue && (
        <Link to={"/player/bet-details"} className="mbsidbarnavx4s-menu-button">
       <svg enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" id="fi_11317575"><g id="_x30_9_Game"><g fill="#ecedef"><path d="m445.873 448.869c-30.2 15.054-69.543 9.051-93.741-14.315-16.346-15.793-25.49-37.589-40.821-54.305-28.722-31.308-79.425-39.62-116.644-19.21-44.071 24.248-70.986 87.952-125.049 90.046-30.2 1.201-59.292-23.366-63.171-53.288-3.879-30.015 17.917-61.139 47.471-67.696 43.496-9.904 54.76-30.413 12.653-74.253-21.538-22.198-35.98-47-13.207-76.932 20.8-26.882 66.504-36.85 105.562-12.93 64.668 39.772 9.823 35.921 61.786-37.865 48.981-70.225 103.826-20.774 138.163-16.901 32.139 3.787 63.817-16.347 95.772-11.083 49.486 8.18 68.867 69.975 32.693 104.916-23.181 22.442-60.215 23.735-85.983 42.945-20.931 15.643-17.735 35.407 2.494 42.668 128.604 46.171 90.741 133.694 42.022 158.203z"></path><path d="m107.217 54.89c-26.179.43-36.876 29.645-4.233 53.755 35.676 26.351 62.16 6.736 61.848-11.89-.281-16.737-25.264-42.396-57.615-41.865z"></path></g><g><path d="m386.562 201.023-88.209 155.927c-8.485 15-27.524 20.281-42.524 11.795l-94.493-53.456c-15-8.486-20.28-27.524-11.795-42.524l88.209-155.927c8.485-15 27.524-20.281 42.524-11.795l94.493 53.456c15 8.485 20.28 27.524 11.795 42.524z" fill="#fdce06"></path><path d="m292.353 200.64v179.149c0 17.234-13.971 31.204-31.204 31.204h-108.566c-17.234 0-31.204-13.971-31.204-31.204v-179.149c0-17.234 13.971-31.204 31.204-31.204h108.566c17.233 0 31.204 13.97 31.204 31.204z" fill="#fff"></path><path d="m163.874 297.145c0-29.331 42.962-53.435 42.962-53.435s43.021 24.103 43.021 53.434c0 13.551-11.007 24.558-24.558 24.558-7.338 0-13.965-3.255-18.463-8.403-4.438 5.148-11.066 8.403-18.404 8.403-13.551.001-24.558-11.006-24.558-24.557z" fill="#cfcfd1"></path><g fill="#3e3e3e"><path d="m377.226 154.147-94.492-53.457c-17.363-9.822-39.512-3.689-49.336 13.687l-28.318 50.059h-52.497c-19.961 0-36.201 16.243-36.201 36.206v179.148c0 19.963 16.24 36.204 36.201 36.204h108.564c19.966 0 36.206-16.24 36.206-36.204v-13.27c6.075-6.307 1.506-1.19 93.56-163.036 9.854-17.403 3.734-39.485-13.687-49.337zm-89.873 225.642c0 14.448-11.758 26.204-26.206 26.204h-108.565c-14.448 0-26.201-11.755-26.201-26.204v-179.148c0-14.451 11.753-26.206 26.201-26.206h108.564c14.448 0 26.206 11.755 26.206 26.206v179.148zm94.858-181.228-84.858 150.006v-147.926c0-19.963-16.24-36.206-36.206-36.206h-44.582l25.534-45.137c7.118-12.577 23.083-17.052 35.713-9.902l94.492 53.457c12.598 7.122 17.041 23.098 9.907 35.708z"></path><path d="m362.431 181.107c-.894-.504-4.79-2.359-7.383 2.896l-3.096 5.476c-1.362 2.402-.513 5.454 1.89 6.814 2.391 1.353 5.45.519 6.812-1.892.283-.5 2.629-4.893 3.501-6.526 1.577-3.506 1.225-5.098-1.724-6.768z"></path><path d="m261.542 195.187c-2.764 0-5 2.239-5 5v7.446c0 2.761 2.236 5 5 5s5-2.239 5-5v-7.446c0-2.761-2.236-5-5-5z"></path><path d="m152.187 367.794c-2.764 0-5 2.239-5 5v7.446c0 2.761 2.236 5 5 5s5-2.239 5-5v-7.446c0-2.761-2.237-5-5-5z"></path><path d="m209.282 239.347c-1.523-.85-3.369-.852-4.893.002-1.86 1.042-45.513 25.903-45.513 57.795 0 21.84 23.147 36.437 42.959 26.255v13.318c0 2.761 2.236 5 5 5s5-2.239 5-5v-13.343c19.849 10.217 43.022-4.352 43.022-26.23.001-31.894-43.715-56.754-45.575-57.797zm1.193 70.571c-1.043-1.124-2.417-1.619-3.64-1.619-1.506-.128-2.809.594-3.789 1.736-11.63 13.496-34.17 5.155-34.17-12.891 0-22.251 29.209-42.141 37.959-47.603 8.765 5.459 38.022 25.352 38.022 47.603.001 17.288-21.301 26.852-34.382 12.774z"></path></g></g></g><g id="Layer_1"></g></svg>
          <p>My Bets</p>
        </Link>
        )} */}


{loginTrue && (
      <Link to={"/player/profile"} className="mbsidbarnavx4s-menu-button">
        <VscAccount />
          <p>Profile</p>
        </Link>
)}

        {/* 
        <Link to={"/player/profile"} className="mbsidbarnavx4s-menu-button">
        <VscAccount />
          <p>Profile</p>
        </Link> */}

                
{!loginTrue && (
<div  onClick={() => { setShowLoginPopup(true); HideScrollOverflow(true); }} className="mbsidbarnavx4s-menu-button">
        <VscAccount />
          <p>Profile</p>
        </div>

)}



        <div className="mbsidbarnavx4s-menu-button" onClick={toggleSidebar}>
        <SlMenu />
          <p>Menu</p>
        </div>
       
        </div>


        <div className="wrapper">

   

          <div className="logo">
            <a href="/"><img src="/logo.png" alt="" /></a>
          </div>




          {loginTrue ? (
            <>
              <ul className="nav-links">
                <label htmlFor="close-btn" className="btn close-btn">
                  <i className="fas fa-times"></i>
                </label>


                {loginTrue && (
                  <>
                    <Link to={"/player/deposit"} className='sc54werw2deposits'>
                    <img src="/Final_Assets/Icons/walleticons4x.svg" alt="" />
                    </Link>
                  </>
                 )}
                <div className="notificationiconsj">
                  <Link to={"/notifications"} className="">
                    <IoIosNotificationsOutline />{" "}
                  </Link>
                  <span>1</span>
                </div>

                <span id="buttonxs525skkl" className=''>
                  <Link
                    to={"/player/deposit"}
                  
                  >
                    Deposit
                  </Link>
                </span>
                <span>
                  <Link
                    to={"/player/deposit"}
                    className="buttonxs525xsees button-112s25"
                  >
                    <TfiWallet />
                  </Link>
                </span>

                <li id="firstsads2d56">
                  <Link
                    id="acccount_detailis"
                    to={"/player/profile"}
                    className="desktop-item"
                  >
                    <span id="firstsad">{userData?.result?.name || "Login Again"}</span>
                    <span id="firstsadx1">
                      Bal: {userData?.result?.balance
                        ? parseFloat(userData?.result?.balance).toFixed(2)
                        : "0.00"}
                    </span>
                  </Link>
                  <div id="acccount_detailismobile" className="desktop-item">
                    <span id="firstsad">{userData?.result?.name}</span>
                    <span id="firstsadx1">
                      Bal:{" "}
                      {userData?.result?.balance
                        ? parseFloat(userData?.result?.balance).toFixed(2)
                        : "0.00"}
                    </span>
                  </div>
                  <input type="checkbox" id="showDrop" />
                  {/* <label htmlFor="showDrop" className="mobile-item">Dropdown Menu</label> */}
                  <ul className="drop-menu">
                    <div id="containerx1nv">
                      <li className="sksnvsd4">
                        <span>Balance : </span>
                        <span>
                          {userData?.result?.balance
                            ? parseFloat(userData?.result?.balance).toFixed(2)
                            : "0.00"}
                        </span>
                      </li>
                      <li className="sksnvsd4">
                        <span>Bonus : </span>
                        <span>
                          {userData?.result?.balance
                            ? parseFloat(userData?.result?.bonus_won).toFixed(2)
                            : "0.00"}
                        </span>
                      </li>
                      <li id="withdamtnv">
                        <span>Withdrawal Amount : </span>
                        <span>
                          {userData?.result?.balance
                            ? parseFloat(
                              userData?.result?.balance - userData?.result?.bonus_won
                              ).toFixed(2)
                            : "0.00"}
                        </span>
                      </li>
                    </div>
                    <div id="containerx2nv">
                      <li>
                        <Link to={"/player/profile"}>
                          <VscAccount />
                          Account
                        </Link>
                      </li>
                      <li>
                        <Link to={"/player/promotions"}>
                          <GiReceiveMoney />
                          Promotions
                        </Link>
                      </li>
                      <li>
                        <Link to={"/player/deposit"}>
                          <CiBank />
                          Finances
                        </Link>
                      </li>
                      <li>
                        <Link to={"/player/withdraw"}>
                          <BiMoneyWithdraw />
                          Withdraw
                        </Link>
                      </li>
                    </div>

                    <div
                      onClick={clearLocalStorageAndReload}
                      id="containerx3nv"
                    >
                      <span>Logout</span>
                    </div>
                  </ul>
                </li>
                <li className='x5sc23sd231w5xs2'>
                  {/* <Link id='casinonavlix' to={"/online-casino-games/AllGames"} className="desktop-item">Casino</Link> */}
                  <Link
                    id="casinonavlix"
                    to={"/online-casino-games/BetGames"}
                    className="desktop-item"
                  >
                    Casino
                  </Link>
                  <input type="checkbox" id="showMega" />
                  {/* <label htmlFor="showMega" className="mobile-item">Mega Menu</label>
        <div className="mega-box">
          <div className="content">
            <div className="row">
              <img src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg" alt=""/>
            </div>
            <div className="row">
              <header>Design Services</header>
              <ul className="mega-links">
                <li><a href="#">Graphics</a></li>
                <li><a href="#">Vectors</a></li>
                <li><a href="#">Business cards</a></li>
                <li><a href="#">Custom logo</a></li>
              </ul>
            </div>
            <div className="row">
              <header>Email Services</header>
              <ul className="mega-links">
                <li><a href="#">Personal Email</a></li>
                <li><a href="#">Business Email</a></li>
                <li><a href="#">Mobile Email</a></li>
                <li><a href="#">Web Marketing</a></li>
              </ul>
            </div>
            <div className="row">
              <header>Security services</header>
              <ul className="mega-links">
                <li><a href="#">Site Seal</a></li>
                <li><a href="#">VPS Hosting</a></li>
                <li><a href="#">Privacy Seal</a></li>
                <li><a href="#">Website design</a></li>
              </ul>
            </div>
          </div>
        </div> */}
                </li>
                {/* <li id="whatsappicnav21">
      <a href="https://wa.me/+916309854028?text=Connect with Alphabet7 for prompt support and feedback opportunities." className="whatsappxse-btn">
          <i className="bi bi-whatsapp"></i>
        </a>
        </li> */}
              </ul>
            </>
          ) : (
            <>
              <ul className="nav-links">

                
              <div className="x4w8s234454sc5">


                <div id="nav-linksx0s2">
                  <div className="loginbuttonnavsxkk">
                  <button onClick={() => { setShowLoginPopup(true); HideScrollOverflow(true); }}>Login</button>
                  </div>
                  <div className="signupbuttonnavsxkk">
                    <button onClick={() => { setShowSignupPopup(true); HideScrollOverflow(true); }}>Sign-up</button>

                  </div>
                </div>

                
                <div onClick={toggleSliderx2} className="sdf4s54w85wcon">
              <img src="/Final_Assets/Icons/menuIconsls45.svg" alt="" />
              </div>
              </div>





                <li id='sc45w52kjklac'>
                  {/* <Link id='casinonavlix' to={"/online-casino-games/AllGames"} className="desktop-item">Casino</Link> */}
                  {/* <Link
                    id="casinonavlix"
                    to={"/online-casino-games/BetGames"}
                    className="desktop-item"
                  >
                    Casino
                  </Link>
                  <input type="checkbox" id="showMega" />
                  <label htmlFor="showMega" className="mobile-item">
                    Mega Menu
                  </label>
                   */}




{/* <div className="mega-box">
                    <div className="content">
                      <div className="row">
                        <img
                          src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg"
                          alt=""
                        />
                      </div>
                      <div className="row">
                        <header>Design Services</header>
                        <ul className="mega-links">
                          <li>
                            <a href="#">Graphics</a>
                          </li>
                          <li>
                            <a href="#">Vectors</a>
                          </li>
                          <li>
                            <a href="#">Business cards</a>
                          </li>
                          <li>
                            <a href="#">Custom logo</a>
                          </li>
                        </ul>
                      </div>
                      <div className="row">
                        <header>Email Services</header>
                        <ul className="mega-links">
                          <li>
                            <a href="#">Personal Email</a>
                          </li>
                          <li>
                            <a href="#">Business Email</a>
                          </li>
                          <li>
                            <a href="#">Mobile Email</a>
                          </li>
                          <li>
                            <a href="#">Web Marketing</a>
                          </li>
                        </ul>
                      </div>
                      <div className="row">
                        <header>Security services</header>
                        <ul className="mega-links">
                          <li>
                            <a href="#">Site Seal</a>
                          </li>
                          <li>
                            <a href="#">VPS Hosting</a>
                          </li>
                          <li>
                            <a href="#">Privacy Seal</a>
                          </li>
                          <li>
                            <a href="#">Website design</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div> */}











                </li>
              </ul>
            </>
          )}

          <label htmlFor="menu-btn" className="btn menu-btn">
            <i className="fas fa-bars"></i>
          </label>
        </div>
        <div className="lksdjclksfd4w"></div>
      </nav>



      <div className={`mbsidbarnavx4s-sidebar ${isOpen ? 'open' : ''}`}>
        <button className="mbsidbarnavx4s-close-button" onClick={toggleSidebar} ><RxCross2 /> </button>

        <div className="contentx5we5we">
          <div className="logosectioncs4565w">
          <a href="/"><img src="/OrignialLogo.png" alt="" /></a>
          </div>
          {/* <div className="cx4ws5w5e"> */}

            {/* <div className="xs85w85we4r56sed546"><img src="/Final_Assets/Icons/casinoico1.svg" alt="" /> Online Casino</div>
            <div className="xs85w85we4r56sed546"><img src="/Final_Assets/Icons/Roulette.svg" alt="" /> Roulette</div>
            <div className="xs85w85we4r56sed546"><img src="/Final_Assets/Icons/Card%20Games.svg" alt="" /> Darbar</div>
            <div className="xs85w85we4r56sed546"><img src="/Final_Assets/Icons//Andar%20Bahar.svg" alt="" /> Andarbahar</div>
            <div className="xs85w85we4r56sed546"><img src="/Final_Assets/Icons/Slots%20Games.svg" alt="" /> Slots</div> */}



          {/* </div> */}
            <MobileAccountTop />

          <div className="xw8954sd85565sd">
              <VoiceInput/>
          </div>
        </div>
      </div>



      <div 
        className={`mbsidbarnavx4s-overlay ${isOpen ? 'open' : ''}`} 
        onClick={toggleSidebar}
      ></div>








      <WhatsappIco01 />
      <TelegramIco01 />

      {showLoginPopup && <LoginPopup popupchange={setShowSignupPopup} onClose={() => { setShowLoginPopup(false); HideScrollOverflow(false); }} />}
{showSignupPopup && <SignupPopup popupchange={setShowLoginPopup} onClose={() => { setShowSignupPopup(false); HideScrollOverflow(false); }} />}
<Toaster />

    </>
  );
}

export default Navbar
