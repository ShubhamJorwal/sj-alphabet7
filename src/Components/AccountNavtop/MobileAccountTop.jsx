import React, { useState } from 'react';
import './accountnavtop.scss';
import { Link } from 'react-router-dom';
import { IoPersonOutline } from 'react-icons/io5';
import { GoGift } from 'react-icons/go';
import { LiaRupeeSignSolid } from 'react-icons/lia';
import { HiCubeTransparent } from 'react-icons/hi';

const Dropdown = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="droalphx5wx5stainer">
      <div className="dropalphx5wx5sem" onClick={() => toggleDropdown(0)}>
        <h2><IoPersonOutline />Profile</h2>
        {openDropdown === 0 && (
          <div className="dropdowalphx5wx5snt">
            <ul className={`alphx5sopdownmenu`}>
            <Link to="/player/profile" className={`xs85w85we4r56sed546`}>Profile Info</Link>
            <Link to="/player/change-password" className={`xs85w85we4r56sed546`}>Change Password</Link>
            <Link to="/player/kyc-verification" className={`xs85w85we4r56sed546`}>KYC Verification</Link>
            </ul>
          </div>
        )}
      </div>


      <div className="dropalphx5wx5sem" onClick={() => toggleDropdown(1)}>
      <h2><GoGift />Promotions</h2>
        {openDropdown === 1 && (
           <div className="dropdowalphx5wx5snt">
           <ul className={`alphx5sopdownmenu`}>
           <Link to="/player/kyc-verification" className={`xs85w85we4r56sed546`}>Bonus</Link>
           </ul>
         </div>
        )}
      </div>
      <div className="dropalphx5wx5sem" onClick={() => toggleDropdown(2)}>
      <h2><LiaRupeeSignSolid />Finances</h2>
        {openDropdown === 2 && (
          <div className="dropdowalphx5wx5snt">
          <ul className={`alphx5sopdownmenu`}>
          <Link to="/player/deposit"  className={`xs85w85we4r56sed546`}>Deposit</Link>
          <Link to="/player/withdraw"  className={`xs85w85we4r56sed546`}>Withdraw</Link>
          <Link to="/player/deposit-history"  className={`xs85w85we4r56sed546`}>History d</Link>
          <Link to="/player/withdraw-history"  className={`xs85w85we4r56sed546`}>History w</Link>
        </ul>
        </div>
        )}
      </div>
      <div className="dropalphx5wx5sem" onClick={() => toggleDropdown(3)}>
     <h2> <HiCubeTransparent />Bet Details</h2>
        {openDropdown === 3 && (
           <div className="dropdowalphx5wx5snt">
           <ul className={`alphx5sopdownmenu`}>
           <Link to="/player/bet-details" className={`xs85w85we4r56sed546`}>My Bets</Link>
           </ul>
         </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
