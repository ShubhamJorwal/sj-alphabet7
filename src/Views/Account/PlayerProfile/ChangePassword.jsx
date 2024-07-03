import React, { useEffect, useState } from 'react'
import Navbar from '../../../Components/Navbar/Navbar'
import Footer from '../../../Components/Footer/Footer'
import AccountNavtop from '../../../Components/AccountNavtop/AccountNavtop'
import { Toaster, toast } from 'react-hot-toast';
import { VscAccount } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { TfiAngleRight } from 'react-icons/tfi';

import '../account.scss'
import axios from 'axios'
import Addsection01 from '../../../Components/Addsecrights/Addsection01';
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;


const ChangePassword = () => {

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    

    const handleChangePassword = () => {
        const storedUserData = localStorage.getItem('user');
        if (storedUserData) {
            const userData = JSON.parse(storedUserData);
            if (userData && userData.access_token) {
                const accessToken = userData.access_token;
                const headers = {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                };
                const requestBody = {
                    old_password: oldPassword,
                    password: newPassword,
                    confirm_password: confirmPassword,
                };
    
                const apiUrlx6 = `${apiUrl}/change-password`
                axios.post(apiUrlx6, requestBody, { headers })
                    .then(response => {
                        toast.success('Password changed successfully.');
                        // Reset input fields
                        setOldPassword('');
                        setNewPassword('');
                        setConfirmPassword('');
                    })
                    .catch(error => {
                        toast.error('Incorrect Details');
                    });
            }
        }
    };
    
    

  return (
    <>
      <Navbar/>
        <div id="profilesecmainacpl">
      <AccountNavtop activeLink="Change_password"/>
        <div id="pfcplx1">
                    <div id="locapthnavtolf">
                        <div id="lfo1">
                            <VscAccount />
                            Account Info
                        </div>
                        <div id="lfo2">
                            <Link to={'/'}>Home</Link> <TfiAngleRight />
                            <Link to={'/player/profile'}>Player Profile</Link> <TfiAngleRight />
                            <span id="lf03">Change Password</span>
                        </div>
                    </div>
                    <div id="locapthnavtolfx54se">
                        
                  
            <h2>Change Password</h2>
            <div className='sdkoswlcp'>
                <label>Old Password:</label>
                <input type="text" placeholder='Enter your Old Password' value={oldPassword} onChange={e => setOldPassword(e.target.value)} />
            </div>
            <div className='sdkoswlcp'>
                <label>New Password:</label>
                <input type="text" placeholder='Enter your New Password' value={newPassword} onChange={e => setNewPassword(e.target.value)} />
            </div>
            <div className='sdkoswlcp'>
                <label>Confirm New Password:</label>
                <input type="text" placeholder='Confirm your new Password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
            </div>
            <button onClick={handleChangePassword}>Change Password</button>
        </div>
        </div>
        <div id="pfcplx2">
            <Addsection01/>
        </div>

        </div>
            <Toaster />
      <Footer/>
    </>
  )
}

export default ChangePassword

