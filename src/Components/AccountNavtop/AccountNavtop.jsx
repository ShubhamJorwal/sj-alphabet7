import React, { useState } from 'react';
import "./accountnavtop.scss";
import { Link } from "react-router-dom";
import { VscAccount } from 'react-icons/vsc';
import { GoGift } from 'react-icons/go';
import { LiaRupeeSignSolid } from 'react-icons/lia';
import { HiCubeTransparent } from 'react-icons/hi';
import { IoPersonOutline } from 'react-icons/io5';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';


const AccountNavtop = ({ activeLink }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleDropdown = (menuId) => {
    setActiveMenu(activeMenu === menuId ? null : menuId);
  };

  return (
    <div className="alphx5w-sidebar">
      <div className="alphx5w-sidebar-header">
        <svg height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg" id="fi_2460463"><g id="_11-Casino_chip" data-name="11-Casino chip"><path d="m15 55-3.33 1.67-1.67 3.33-1.67-3.33-3.33-1.67 3.33-1.67 1.67-3.33 1.67 3.33z" fill="#ff9c00"></path><path d="m59 9-3.33 1.67-1.67 3.33-1.67-3.33-3.33-1.67 3.33-1.67 1.67-3.33 1.67 3.33z" fill="#ff9c00"></path><circle cx="40" cy="40" fill="#ffc052" r="16"></circle><path d="m56 40a16 16 0 0 1 -32 0 14.782 14.782 0 0 1 .07-1.5 16 16 0 0 0 31.86 0 14.782 14.782 0 0 1 .07 1.5z" fill="#f0a53b"></path><path d="m56.26 23.74a22.93 22.93 0 0 1 6.74 16.26h-2a20.878 20.878 0 0 0 -6.16-14.84z" fill="#ffaf3f"></path><path d="m40 61a20.878 20.878 0 0 0 14.84-6.16l1.42 1.42a22.93 22.93 0 0 1 -16.26 6.74z" fill="#ffaf3f"></path><path d="m25.16 54.84-1.42 1.42a22.852 22.852 0 0 1 -5.89-10.1 22.406 22.406 0 0 1 -.85-6.16h2a20.878 20.878 0 0 0 6.16 14.84z" fill="#ffaf3f"></path><path d="m40 17v2a20.878 20.878 0 0 0 -14.84 6.16l-1.42-1.42a22.968 22.968 0 0 1 13.55-6.57 20.226 20.226 0 0 1 2.71-.17z" fill="#ffaf3f"></path><path d="m25.16 54.84a20.878 20.878 0 0 0 14.84 6.16v2a22.93 22.93 0 0 1 -16.26-6.74z" fill="#f09413"></path><path d="m25.16 25.16a20.878 20.878 0 0 0 -6.16 14.84h-2a20.226 20.226 0 0 1 .17-2.71 22.671 22.671 0 0 1 3.49-9.73 23.111 23.111 0 0 1 3.08-3.82z" fill="#f09413"></path><path d="m46.16 17.85a22.852 22.852 0 0 1 10.1 5.89l-1.42 1.42a20.878 20.878 0 0 0 -14.84-6.16v-2q1.005 0 1.98.09a21.407 21.407 0 0 1 4.18.76z" fill="#f09413"></path><path d="m61 40h2a22.93 22.93 0 0 1 -6.74 16.26l-1.42-1.42a20.878 20.878 0 0 0 6.16-14.84z" fill="#f09413"></path><path d="m59 40h2a20.878 20.878 0 0 1 -6.16 14.84l-1.41-1.41-1.95-1.95-.16-.16a15.987 15.987 0 0 0 4.68-11.32z" fill="#ffaf3f"></path><path d="m28.52 51.48.16-.16a15.987 15.987 0 0 0 11.32 4.68v5a20.878 20.878 0 0 1 -14.84-6.16l1.41-1.41z" fill="#ffaf3f"></path><path d="m28.52 28.52.16.16a15.987 15.987 0 0 0 -4.68 11.32h-5a20.878 20.878 0 0 1 6.16-14.84l1.41 1.41z" fill="#ffaf3f"></path><path d="m51.48 28.52-.16.16a15.987 15.987 0 0 0 -11.32-4.68v-5a20.878 20.878 0 0 1 14.84 6.16l-1.41 1.41z" fill="#ffaf3f"></path><path d="m28.68 51.32-.16.16-1.95 1.95-1.41 1.41a20.878 20.878 0 0 1 -6.16-14.84h5a15.987 15.987 0 0 0 4.68 11.32z" fill="#ffcb52"></path><path d="m40 21v3a15.987 15.987 0 0 0 -11.32 4.68l-.16-.16-1.95-1.95-1.41-1.41a20.878 20.878 0 0 1 14.84-6.16z" fill="#ffcb52"></path><path d="m61 40h-5a15.987 15.987 0 0 0 -4.68-11.32l.16-.16 1.95-1.95 1.41-1.41a20.878 20.878 0 0 1 6.16 14.84z" fill="#ffcb52"></path><path d="m53.43 53.43 1.41 1.41a20.878 20.878 0 0 1 -14.84 6.16v-5a15.987 15.987 0 0 0 11.32-4.68l.16.16z" fill="#ffcb52"></path><path d="m40 24a16 16 0 1 0 16 16 16 16 0 0 0 -16-16zm0 31a15 15 0 1 1 15-15 15 15 0 0 1 -15 15z" fill="#c97c10"></path><path d="m41 39v-4h3v-2h-3v-2h-2v2a4 4 0 0 0 0 8v4h-3v2h3v2h2v-2a4 4 0 0 0 0-8zm-3.413-.587a2 2 0 0 1 1.413-3.413v4a1.986 1.986 0 0 1 -1.413-.587zm4.826 6a1.986 1.986 0 0 1 -1.413.587v-4a2 2 0 0 1 1.413 3.413z" fill="#ffdf75"></path><path d="m48.007 40.055a11.462 11.462 0 0 1 -1.6 4.355 1.7 1.7 0 0 0 -.391 1.151 1.3 1.3 0 0 0 .546.735 4.05 4.05 0 0 0 3.557.508 5.5 5.5 0 0 0 2.848-2.19 5.435 5.435 0 0 0 .3-5.9 3.749 3.749 0 0 0 -1.827-1.534 3.222 3.222 0 0 0 -2.577.185c-.756.56-.736 1.877-.856 2.69z" fill="#ffdf75"></path><path d="m34.2 33.439a9.806 9.806 0 0 0 -2.8 2.816c-.194.3-.4.629-.753.721a1.2 1.2 0 0 1 -.793-.134 3.378 3.378 0 0 1 -1.8-2.461 4.383 4.383 0 0 1 .6-2.939 4.849 4.849 0 0 1 4.529-2.422 3.4 3.4 0 0 1 1.927.789 2.619 2.619 0 0 1 .869 1.99c-.139.772-1.185 1.248-1.779 1.64z" fill="#ffdf75"></path><path d="m54.142 54.142.7.7a20.878 20.878 0 0 0 6.158-14.842h-1a19.938 19.938 0 0 1 -5.858 14.142z" fill="#fad039"></path><path d="m25.858 54.142-.7.7a20.878 20.878 0 0 0 14.842 6.158v-1a19.938 19.938 0 0 1 -14.142-5.858z" fill="#fad039"></path><path d="m25.858 25.858-.7-.7a20.878 20.878 0 0 0 -6.158 14.842h1a19.938 19.938 0 0 1 5.858-14.142z" fill="#fad039"></path><path d="m54.142 25.858.7-.7a20.878 20.878 0 0 0 -14.842-6.158v1a19.938 19.938 0 0 1 14.142 5.858z" fill="#fad039"></path><path d="m20 40h-1a20.878 20.878 0 0 0 6.16 14.84l.7-.7a19.938 19.938 0 0 1 -5.86-14.14z" fill="#ffdf75"></path><path d="m40 20v-1a20.878 20.878 0 0 0 -14.84 6.16l.7.7a19.938 19.938 0 0 1 14.14-5.86z" fill="#ffdf75"></path><path d="m54.142 25.858a19.938 19.938 0 0 1 5.858 14.142h1a20.878 20.878 0 0 0 -6.16-14.84z" fill="#ffdf75"></path><path d="m40 60v1a20.878 20.878 0 0 0 14.84-6.16l-.7-.7a19.938 19.938 0 0 1 -14.14 5.86z" fill="#ffdf75"></path><g fill="#f0a53b"><path d="m41 47.858a3.956 3.956 0 0 0 1.827-1.031 4.056 4.056 0 0 0 .452-.549 3.965 3.965 0 0 1 -2.279.722z"></path><path d="m39 47h-3v-1h-1v2h3v2h2v-1h-1z"></path><path d="m39 41a3.992 3.992 0 0 1 -3.279-6.28 4 4 0 0 0 2.279 7.28v3h1z"></path><path d="m41 35h2v1h-2z"></path><path d="m39 32h-1v1.142a3.939 3.939 0 0 1 1-.142z"></path><path d="m43 43a2 2 0 0 0 -2-2v1.278a1.975 1.975 0 0 1 .82 2.541 2.014 2.014 0 0 0 .593-.406 1.983 1.983 0 0 0 .587-1.413z"></path><path d="m37.18 36.18a1.99 1.99 0 0 1 .82-.18v2.722a1.98 1.98 0 0 0 1 .278v-4a2 2 0 0 0 -1.82 1.18z"></path></g><path d="m39.3 11.81a2 2 0 0 1 .35-2.58l.35-.32.74-.66a22.818 22.818 0 0 0 -10.74-6.45v1.6a1.839 1.839 0 0 1 -2 1.6h-8a1.839 1.839 0 0 1 -2-1.6v-1.6a22.769 22.769 0 0 0 -10.73 6.44l.74.66.36.33a2.014 2.014 0 0 1 .35 2.58l-3.66 7.05c-.51.98-1.48 1.4-2.18.95l-.44-.19-.93-.4a22.154 22.154 0 0 0 -.51 4.78 22.7 22.7 0 0 0 .5 4.77l.94-.4.44-.19c.7-.45 1.67-.02 2.18.95l3.66 7.06a2.017 2.017 0 0 1 -.35 2.58l-1.11.99a22.948 22.948 0 0 0 10.59 6.4 11.011 11.011 0 0 1 -.29-1.13 22.544 22.544 0 0 1 -.56-5.03c0-.53.02-1.06.06-1.58.02-.36.05-.72.1-1.07a15 15 0 1 1 20.19-20.19c.35-.05.71-.08 1.07-.1.52-.04 1.05-.06 1.58-.06a19.626 19.626 0 0 1 2.04.1z" fill="#d1013e"></path><path d="m24 9a15 15 0 0 0 -6.84 28.35 8.846 8.846 0 0 1 .15-1.05 22.546 22.546 0 0 1 3.35-8.74 10.141 10.141 0 0 0 -4.66-3.56c4.57-1.29 8-9 8-9a27.606 27.606 0 0 0 3.54 5.68 22.45 22.45 0 0 1 8.76-3.37 8.846 8.846 0 0 1 1.05-.15 15.008 15.008 0 0 0 -13.35-8.16z" fill="#fffced"></path><path d="m27.54 20.68a22.8 22.8 0 0 0 -6.88 6.88 10.141 10.141 0 0 0 -4.66-3.56c4.57-1.29 8-9 8-9a27.606 27.606 0 0 0 3.54 5.68z" fill="#d1013e"></path><path d="m2.88 28.18c.7-.45 1.67-.02 2.18.95l3.66 7.06a2.017 2.017 0 0 1 -.35 2.58l-1.11.99a22.938 22.938 0 0 1 -5.76-10.99z" fill="#f7f3e1"></path><path d="m5.06 18.86c-.51.98-1.48 1.4-2.18.95l-1.37-.59a22.736 22.736 0 0 1 5.76-10.98l1.1.99a2.014 2.014 0 0 1 .35 2.58z" fill="#f7f3e1"></path><path d="m30 1.8v1.6a1.839 1.839 0 0 1 -2 1.6h-8a1.839 1.839 0 0 1 -2-1.6v-1.6a22.9 22.9 0 0 1 12 0z" fill="#f7f3e1"></path><path d="m46.16 17.85a10.829 10.829 0 0 0 -1.12-.29 21.063 21.063 0 0 0 -3-.46l-2.74-5.29a2 2 0 0 1 .35-2.58l.35-.32.74-.66a22.837 22.837 0 0 1 5.42 9.6z" fill="#f7f3e1"></path><path d="m24 8a16 16 0 0 0 -6.94 30.42c.02-.36.05-.72.1-1.07a15 15 0 1 1 20.19-20.19c.35-.05.71-.08 1.07-.1a16 16 0 0 0 -14.42-9.06z" fill="#a80132"></path><path d="m24 9a15 15 0 0 0 -6.84 28.35 8.846 8.846 0 0 1 .15-1.05 14 14 0 1 1 18.99-18.99 8.846 8.846 0 0 1 1.05-.15 15.008 15.008 0 0 0 -13.35-8.16z" fill="#e3decb"></path><path d="m8.37 38.77-1.11.99a22.938 22.938 0 0 1 -5.76-10.99l1.38-.59c.7-.45 1.67-.02 2.18.95l3.66 7.06a2.017 2.017 0 0 1 -.35 2.58z" fill="#e3decb"></path><path d="m2 24a22.111 22.111 0 0 1 .437-4.381l-.927-.4a22.154 22.154 0 0 0 -.51 4.781 22.7 22.7 0 0 0 .5 4.77l.936-.4a22.083 22.083 0 0 1 -.436-4.37z" fill="#8f0029"></path><path d="m18 2.835v-1.035a22.769 22.769 0 0 0 -10.73 6.44l.736.663a21.987 21.987 0 0 1 9.994-6.068z" fill="#8f0029"></path><path d="m17.85 46.16a22.948 22.948 0 0 1 -10.59-6.4l.74-.66a22.021 22.021 0 0 0 9.56 5.93 11.011 11.011 0 0 0 .29 1.13z" fill="#8f0029"></path><path d="m40 8.912.737-.662a22.818 22.818 0 0 0 -10.737-6.45v1.035a21.986 21.986 0 0 1 10 6.077z" fill="#8f0029"></path><path d="m2.436 28.37-.936.4a22.938 22.938 0 0 0 5.76 10.99l.745-.664a21.931 21.931 0 0 1 -5.569-10.726z" fill="#c7c3b2"></path><path d="m8.006 8.9-.736-.66a22.736 22.736 0 0 0 -5.76 10.98l.927.4a21.936 21.936 0 0 1 5.569-10.72z" fill="#e3decb"></path><path d="m24 2a22 22 0 0 1 6 .835v-1.035a22.9 22.9 0 0 0 -12 0v1.035a22 22 0 0 1 6-.835z" fill="#e3decb"></path><path d="m46.16 17.85a10.829 10.829 0 0 0 -1.12-.29 21.9 21.9 0 0 0 -5.04-8.65l.74-.66a22.837 22.837 0 0 1 5.42 9.6z" fill="#e3decb"></path><circle cx="5" cy="24" fill="#fffced" r="1"></circle><circle cx="14" cy="40" fill="#fffced" r="1"></circle><circle cx="14" cy="8" fill="#fffced" r="1"></circle><circle cx="34" cy="8" fill="#fffced" r="1"></circle><path d="m37.28 17.04a.746.746 0 0 1 .07.12c.21-.03.42-.05.64-.07-.23-.02-.47-.04-.71-.05zm-20.28 22.96c0-.53.02-1.06.06-1.58.02-.36.05-.72.1-1.07a15.309 15.309 0 0 1 -3.56-2.55 9.152 9.152 0 0 0 -.23 1.16 21.532 21.532 0 0 0 -.37 4.04 20.885 20.885 0 0 0 .23 3.18c.05.42.12.84.2 1.25h.01a23.356 23.356 0 0 0 4.41 1.73 11.011 11.011 0 0 1 -.29-1.13 22.544 22.544 0 0 1 -.56-5.03z" fill="#8f0029"></path><path d="m37.28 17.04c-.38-.03-.77-.04-1.16-.04h-.12a22.851 22.851 0 0 0 -9.64 2.12c.36.52.76 1.05 1.18 1.56a22.45 22.45 0 0 1 8.76-3.37 8.846 8.846 0 0 1 1.05-.15.746.746 0 0 0 -.07-.12zm-18.92 8.22a22.791 22.791 0 0 0 -4.47 8.42c-.11.37-.21.74-.29 1.12a15.309 15.309 0 0 0 3.56 2.55 8.846 8.846 0 0 1 .15-1.05 22.546 22.546 0 0 1 3.35-8.74 14.3 14.3 0 0 0 -2.3-2.3z" fill="#e3decb"></path><path d="m27.54 20.68a22.8 22.8 0 0 0 -6.88 6.88 14.3 14.3 0 0 0 -2.3-2.3 22.784 22.784 0 0 1 8-6.14c.36.52.76 1.05 1.18 1.56z" fill="#a80132"></path><path d="m37.28 17.04a.746.746 0 0 1 .07.12c.21-.03.42-.05.64-.07-.23-.02-.47-.04-.71-.05zm-23.91 18.92a16.377 16.377 0 0 0 3.69 2.46c.02-.36.05-.72.1-1.07a15.309 15.309 0 0 1 -3.56-2.55 9.152 9.152 0 0 0 -.23 1.16z" fill="#8f0029"></path><path d="m37.28 17.04c-.38-.03-.77-.04-1.16-.04.06.1.12.2.18.31a8.846 8.846 0 0 1 1.05-.15.746.746 0 0 0 -.07-.12zm-23.68 17.76a15.309 15.309 0 0 0 3.56 2.55 8.846 8.846 0 0 1 .15-1.05 14.138 14.138 0 0 1 -3.42-2.62c-.11.37-.21.74-.29 1.12z" fill="#e3decb"></path><path d="m17.85 46.16a23.356 23.356 0 0 1 -4.41-1.73h-.01c-.08-.41-.15-.83-.2-1.25a21.881 21.881 0 0 0 4.33 1.85 11.011 11.011 0 0 0 .29 1.13z" fill="#8f0029"></path><circle cx="14" cy="40" fill="#e3decb" r="1"></circle></g></svg>
        Account
      </div>
      <ul className="alphx5w-sidebar-menu">
        
      <li 
  className={`alphx5w-menu-item alphx5w-dropdown ${(activeLink === 'Profile' || activeLink === 'Change_password' || activeLink === 'Kyc_Verification') ? 'activelink' : ''}`} 
  onClick={() => toggleDropdown('dropdown1')}
>
          <span className="alphx5w-dropdown-toggle"><IoPersonOutline />Profile</span>
          {activeMenu === 'dropdown1' ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </li>
        <ul className={`alphx5w-dropdown-menu ${activeMenu === 'dropdown1' ? 'active' : ''} ${(activeLink === 'Profile' || activeLink === 'Change_password' || activeLink === 'Kyc_Verification') ? 'active' : ''}`}>
          <Link to="/player/profile" className={`alphx5w-dropdown-item ${activeLink === 'Profile' ? 'activelink' : ''}`}>Profile Info</Link>
          <Link to="/player/change-password" className={`alphx5w-dropdown-item ${activeLink === 'Change_password' ? 'activelink' : ''}`}>Change Password</Link>
          <Link to="/player/kyc-verification" className={`alphx5w-dropdown-item ${activeLink === 'Kyc_Verification' ? 'activelink' : ''}`}>KYC Verification</Link>
        </ul>

        <li 
  className={`alphx5w-menu-item alphx5w-dropdown ${(activeLink === 'Bonus' || activeLink === 'Promotions') ? 'activelink' : ''}`} 
  onClick={() => toggleDropdown('dropdown4')}
>
          <span className="alphx5w-dropdown-toggle"><GoGift />Promotions</span>
          {activeMenu === 'dropdown4' ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </li>
        <ul className={`alphx5w-dropdown-menu ${activeMenu === 'dropdown4' ? 'active' : ''} ${(activeLink === 'Bonus' || activeLink === 'Promotions') ? 'active' : ''}`}>
          <Link to="/player/promotions" className={`alphx5w-dropdown-item ${activeLink === 'Bonus' ? 'activelink' : ''}`}>Bonus</Link>
        </ul>

        <li 
        
  className={`alphx5w-menu-item alphx5w-dropdown ${(activeLink === 'Deposit' || activeLink === 'Withdraw' || activeLink === 'History d' || activeLink === 'History w') ? 'activelink' : ''}`} 
  onClick={() => toggleDropdown('dropdown2')}
>
          <span className="alphx5w-dropdown-toggle"><LiaRupeeSignSolid />Finances</span>
          {activeMenu === 'dropdown2' ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </li>
        <ul className={`alphx5w-dropdown-menu ${activeMenu === 'dropdown2' ? 'active' : ''} ${(activeLink === 'Deposit' || activeLink === 'Withdraw' || activeLink === 'History w' || activeLink === 'History d') ? 'active' : ''}`}>
          <Link to="/player/deposit" className={`alphx5w-dropdown-item ${activeLink === 'Deposit' ? 'activelink' : ''}`}>Deposit</Link>
          <Link to="/player/withdraw" className={`alphx5w-dropdown-item ${activeLink === 'Withdraw' ? 'activelink' : ''}`}>Withdraw</Link>
          <Link to="/player/deposit-history" className={`alphx5w-dropdown-item ${activeLink === 'History d' ? 'activelink' : ''}`}>History d</Link>
          <Link to="/player/withdraw-history" className={`alphx5w-dropdown-item ${activeLink === 'History w' ? 'activelink' : ''}`}>History w</Link>
        </ul>

        <li 
  className={`alphx5w-menu-item alphx5w-dropdown ${(activeLink === 'Bet Details') ? 'activelink' : ''}`} 
  onClick={() => toggleDropdown('dropdown3')}
>
          <span className="alphx5w-dropdown-toggle"><HiCubeTransparent />Bet Details</span>
          {activeMenu === 'dropdown3' ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </li>
        <ul className={`alphx5w-dropdown-menu ${activeMenu === 'dropdown3' ? 'active' : ''}  ${(activeLink === 'Bet Details') ? 'active' : ''}`}>
          <Link to="/player/bet-details" className={`alphx5w-dropdown-item ${activeLink === 'Bet Details' ? 'activelink' : ''}`}>My Bets</Link>
        </ul>
               {/* <li className="alphx5w-menu-item">
          Menu Item 2
        </li> */}

      </ul>
    </div>
  );
};

export default AccountNavtop;
