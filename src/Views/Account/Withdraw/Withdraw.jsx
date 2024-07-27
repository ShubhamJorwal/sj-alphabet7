import React, { useEffect, useState } from 'react'
import Navbar from '../../../Components/Navbar/Navbar'
import AccountNavtop from '../../../Components/AccountNavtop/AccountNavtop'
import Footer from '../../../Components/Footer/Footer'
import Addsection01 from '../../../Components/Addsecrights/Addsection01';
import { CiBank, CiEdit } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { TfiAngleRight } from 'react-icons/tfi';
import Loader01 from '../../../Components/Loaders/Loader01';
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;


import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import Loader03 from '../../../Components/Loaders/Loader03';

const Withdraw = () => {
  const [userBankDetails, setUserBankDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading01, setIsLoading01] = useState(false);
  const storedUserData = localStorage.getItem('user');
  const userData = JSON.parse(storedUserData);

  const [loginTrue, setLoginTrue] = useState(false);
  const [userDatxssdfdsa, setUserDatxssdfdsa] = useState(null);

  useEffect(() => {
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
            setUserDatxssdfdsa(response.data);
          })
          .catch(error => {
            console.error('There was a problem fetching the user profile:', error);
          });
      } else {
        setLoginTrue(false);
      }
    }
  }, []);

  const [amount, setAmount] = useState('');
  const [withdrawalType, setWithdrawalType] = useState('');
  const [serviceCharges, setServiceCharges] = useState([]);
  const [maxWithdrawAmount, setMaxWithdrawAmount] = useState(0);
  const [selectedBank, setSelectedBank] = useState(); // Track the selected bank details

  useEffect(() => {
    const fetchServiceCharges = async () => {
      try {
        const response = await axios.get(`${apiUrl}/get_service_charge`);
        if (response.data.error === false) {
          setServiceCharges(response.data.result);
        } else {
          toast.error('Failed to fetch service charges');
        }
      } catch (error) {
        // console.error('Error fetching service charges:', error);
        console.log("Everything is Alright.")
        // toast.error('An error occurred while fetching service charges');
      } finally {
        setIsLoading(false);
      }
    };

    fetchServiceCharges();
    
    // Set max withdrawal amount based on user's net exposure
    const maxWithdrawalAmount = parseFloat(userDatxssdfdsa?.result.balance - userDatxssdfdsa?.result.bonus_won);
    setMaxWithdrawAmount(maxWithdrawalAmount);
  }, [userDatxssdfdsa?.result.balance - userDatxssdfdsa?.result.bonus_won]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if amount exceeds max withdrawal amount
      if (parseInt(amount) > maxWithdrawAmount) {
        toast.error('Withdrawal amount exceeds maximum available amount');
        return;
      }
  
      // Calculate service charge based on withdrawal type
      let serviceCharge = 0;
      if (withdrawalType === 'Instant') {
        const instantWithdrawalService = serviceCharges.find(charge => charge.service_type === 'Instant');
        serviceCharge = parseFloat(instantWithdrawalService.service) / 100; // Convert string to float and divide by 100 to get percentage
      } else if (withdrawalType === 'Normal') {
        const amountWithdrawalService = serviceCharges.find(charge => charge.service_type === 'Normal');
        serviceCharge = parseFloat(amountWithdrawalService.service) / 100; // Convert string to float and divide by 100 to get percentage
      }
  
      // Send withdrawal request
      
      setIsLoading01(true)
      const response = await axios.post(`${apiUrl}/post_userwithdrawal_balance`, {
        user_id: userData.user_id,
        amount,
        account_no: selectedBank ? selectedBank.account_no : null,
        bank_name: selectedBank ? selectedBank.bank_name : null,
        ifsc_code: selectedBank ? selectedBank.ifsc_code : null,
        bank_branch: selectedBank ? selectedBank.bank_branch : null,
        bank_address: selectedBank ? selectedBank.bank_address : null,
        withdrawal_type: withdrawalType,
        service_charge: serviceCharge,
      });
      console.log(response)
      
      if (response.data.error === false) {
        toast.success('Withdrawal request sent successfully');
        setIsLoading01(false)
        setAmount('')
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      // console.error('Error sending withdrawal request:', error);
      // toast.error('An error occurred while sending withdrawal request');
      
      console.log("Everything is Alright.")
    }
  };
  

   const handleAmountSelection = (selectedAmount) => {
    setAmount(selectedAmount);
  };

  const handleBankClick = (bankDetail) => {
    setSelectedBank(bankDetail);
  };

  useEffect(() => {
    const fetchUserBankDetails = async () => {
      try {
        setIsLoading(true);

        const response = await axios.post(`${apiUrl}/get_userbank_details`, { user_id: userData.user_id });
        if (response.data.error === false && response.data.result.length > 0) {
          setUserBankDetails(response.data.result);
          // Set selectedBank to the first bank details fetched
          setSelectedBank(response.data.result[0]);
        } else {
          setUserBankDetails(null);
        }
      } catch (error) {
        // console.error('Error fetching user bank details:', error);
        // toast.error('An error occurred while fetching user bank details');
        
        console.log("Everything is Alright.")
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserBankDetails();
    console.log(serviceCharges)
  }, [userData.user_id]);



const calculateWithdrawalAmount = (amount, withdrawalType) => {
  const serviceCharge = serviceCharges.find(charge => charge.service_type === withdrawalType)?.service;
  if (serviceCharge !== undefined) {
    const serviceChargePercentage = parseFloat(serviceCharge) / 100;
    const withdrawalAmount = parseFloat(amount) * (1 - serviceChargePercentage);
    return withdrawalAmount.toFixed(2);
  } else {
    return 'Error: Service charge not found';
  }
};


  return (
    <>
      <Navbar />
      <div id="profilesecmainacpl">
            <AccountNavtop activeLink="Withdraw"/>
        <div id="pfcplx1">
          <div id="locapthnavtolf">
            <div id="lfo1">
              <CiBank />
              Withdraw Money
            </div>
            <div id="lfo2">
              <Link to={'/'}>Home</Link> <TfiAngleRight />
              <span id="lf03">Withdraw Money</span>
            </div>
          </div>

 
          <div id="blowstonwithdm">
        <h2>Select Bank to Withdraw Money</h2>
           {isLoading ? (
              <Loader01 />
            ) : userBankDetails && userBankDetails.length > 0 ? (
              <div id='bankdetailsthatprovided'>
                {userBankDetails.map((bankDetail, index) => (
                  <div
                  id='bankdetailsflex-sfk'
                    className={`bank-detail ${selectedBank === bankDetail ? 'selectedbankinwithdraw' : ''}`}
                    key={index}
                    onClick={() => handleBankClick(bankDetail)}
                  >
                    <p>{userData.first_name} {userData.last_name}</p>
                    <p id='silverbaksbd'>Account Number: {bankDetail.account_no}</p>
                    <p>IFSC Code: {bankDetail.ifsc_code}</p>
                    <p>Bank Name: {bankDetail.bank_name}</p>
                    <p>Bank Branch: {bankDetail.bank_branch}</p>
                    {/* {bankDetail.set_default_account === "Yes" && <p id='defaultaccbotleftbd'>Default Account</p>} */}
                    <p id='botksxremarks'>Remarks: {bankDetail.remarks ? bankDetail.remarks : "Not provided"}</p>
                    {/* <p>Bank Address: {bankDetail.bank_address}</p> */}
                  </div>
                ))}
              </div>
            ) : (
             <>
              <p>Please add your bank details.</p>
              <Link id='custombutonskxiks4551' to={"/player/bank-details"} >Add Your Bank</Link>
             </>
            )}
      
      {userBankDetails && userBankDetails.length > 0 && (<>
      <div id='selecwithdrawaltype'>
  <h2>Select Withdrawal Type</h2>
  <div className="withdrawal-type-buttons">
    <button className={withdrawalType === 'Instant' ? 'selected-amount-typewit' : ''} onClick={() => setWithdrawalType('Instant')}>Instant Withdrawal</button>
    <button className={withdrawalType === 'Normal' ? 'selected-amount-typewit' : ''}  onClick={() => setWithdrawalType('Normal')}>Normal Withdrawal</button>
  </div>
</div>
</> )}


      {withdrawalType && (
            <div id='selecwithdaraamounts1'>
              <h2>Select Withdrawal Amount</h2>
              <form onSubmit={handleSubmit}>
                <div id='labelforamountsecs1'>
                      
                   <div id="ins10203050100clas">
                   {userDatxssdfdsa?.result.balance - userDatxssdfdsa?.result.bonus_won >= 100 ?
                      <button id='firstbtmwd' type="button"  onClick={() => handleAmountSelection(100)} className={amount === '100' ? 'selected-amount' : ''}>100</button> :
                      <button type="button" className='disbaledbuttonwd' disabled onClick={() => handleAmountSelection(100)}>100</button> 
                      }
                            {userDatxssdfdsa?.result.balance - userDatxssdfdsa?.result.bonus_won >= 200 ?
                      <button type="button" className={amount === '200' ? 'selected-amount' : ''} onClick={() => handleAmountSelection(200)}>200</button> :
                      <button type="button" className='disbaledbuttonwd' disabled onClick={() => handleAmountSelection(200)}>200</button> 
                      }
          
          {userDatxssdfdsa?.result.balance - userDatxssdfdsa?.result.bonus_won >= 300 ?
                      <button type="button" className={amount === '300' ? 'selected-amount' : ''} onClick={() => handleAmountSelection(300)}>300</button> :
                      <button type="button" className='disbaledbuttonwd' disabled onClick={() => handleAmountSelection(300)}>300</button> 
                      }
          
          {userDatxssdfdsa?.result.balance - userDatxssdfdsa?.result.bonus_won >= 500 ?
                      <button type="button" className={amount === '500' ? 'selected-amount' : ''} onClick={() => handleAmountSelection(500)}>500</button> :
                      <button type="button" className='disbaledbuttonwd' disabled onClick={() => handleAmountSelection(500)}>500</button> 
                      }
                      {maxWithdrawAmount >= 1000 ? 
            <button type="button" className={amount === '1000' ? 'selected-amount' : ''} onClick={() => handleAmountSelection(1000)}>1000</button> : 
            <button type="button" className='disbaledbuttonwd' disabled>1000</button>
          }
                    <input
                      type="number"
                      value={amount}
                      min={100}
                      required
                      max={userDatxssdfdsa?.result.balance - userDatxssdfdsa?.result.bonus_won}
                      onChange={(e) => {
                        const enteredValue = parseFloat(e.target.value);
                        const maxAmount = parseFloat(userDatxssdfdsa?.result.balance - userDatxssdfdsa?.result.bonus_won);
                        if (!isNaN(enteredValue) && enteredValue > maxAmount) {
                          e.target.value = maxAmount.toFixed(2); // Limit the value to net_exposure with 2 decimal places
                        }
                        setAmount(e.target.value);
                      }}
                      placeholder="Custom Amount"
                    />
                   </div>
                    
                </div>
                {amount && (
  <div id="divofdisplayamount">
    <p>
      After Service charge withdrawal amount :{' '}
      <span>
        {calculateWithdrawalAmount(amount, withdrawalType)}/-
      </span>
    </p>
    {isLoading01 ? <>
      <button id='widhsdjksibmitskls' type="submit" disabled><Loader03/></button>
    </>
    :
    <>
    <button id='widhsdjksibmitskls' type="submit">Withdraw</button>
    </>
    }
  </div>
)}
                <label id='withdrawaltypeskdjkslks'>
                  {/* <span>Withdrawal Type</span>
                  <select required value={withdrawalType} onChange={(e) => setWithdrawalType(e.target.value)}>
                    <option value="">Select Withdrawal Type</option>
                    <option value="Normal">Normal Withdrawal</option>
                    <option value="Instant">Instant Withdrawal</option>
                  </select> */}
                </label>
              </form>
            </div>
            )}
            <div id="x2s558e2233s">
<p>Minimum withdrawal amount is 100rs</p>
            <p>If you choose instant withdrawal, you'll be charged a 5% fee, and the funds will be transferred to your wallet within 1 minute to 1 hour.</p>
  {/* <p>If you choose normal withdrawal, the service charge will be lower than for instant withdrawal, and the funds will be added to your wallet in 1-2 days or 10 hours.</p> */}

          </div>
          </div>

         
         
        </div>
        <div id="pfcplx2">
          <Addsection01 />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Withdraw





























































// import React, { useEffect, useState } from 'react'
// import Navbar from '../../../Components/Navbar/Navbar'
// import AccountNavtop from '../../../Components/AccountNavtop/AccountNavtop'
// import Footer from '../../../Components/Footer/Footer'
// import Addsection01 from '../../../Components/Addsecrights/Addsection01';
// import { CiBank, CiEdit } from 'react-icons/ci';
// import { Link } from 'react-router-dom';
// import { TfiAngleRight } from 'react-icons/tfi';
// import Loader01 from '../../../Components/Loaders/Loader01';
// const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;


// import axios from 'axios';
// import { Toaster, toast } from 'react-hot-toast';

// const Withdraw = () => {
//   const [userBankDetails, setUserBankDetails] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const storedUserData = localStorage.getItem('user');
//   const userData = JSON.parse(storedUserData);

//   const [loginTrue, setLoginTrue] = useState(false);
//   const [userDatxssdfdsa, setUserDatxssdfdsa] = useState(null);

//   useEffect(() => {
//     const storedUserData = localStorage.getItem('user');
//     if (storedUserData) {
//       const userData = JSON.parse(storedUserData);
//       if (userData && userData.access_token) {
//         setLoginTrue(true);
//         const accessToken = userData.access_token;
//         const headers = {
//           Authorization: `Bearer ${accessToken}`,
//           'Content-Type': 'application/json',
//         };
//         const apiUrlxs = `${apiUrl}/user-profile`;
//         axios
//           .get(apiUrlxs, { headers })
//           .then(response => {
//             setUserDatxssdfdsa(response.data);
//           })
//           .catch(error => {
//             console.error('There was a problem fetching the user profile:', error);
//           });
//       } else {
//         setLoginTrue(false);
//       }
//     }
//   }, []);

//   const [amount, setAmount] = useState('');
//   const [withdrawalType, setWithdrawalType] = useState('');
//   const [serviceCharges, setServiceCharges] = useState([]);
//   const [maxWithdrawAmount, setMaxWithdrawAmount] = useState(0);
//   const [selectedBank, setSelectedBank] = useState(); // Track the selected bank details

//   useEffect(() => {
//     const fetchServiceCharges = async () => {
//       try {
//         const response = await axios.get(`${apiUrl}/get_service_charge`);
//         if (response.data.error === false) {
//           setServiceCharges(response.data.result);
//         } else {
//           toast.error('Failed to fetch service charges');
//         }
//       } catch (error) {
//         console.error('Error fetching service charges:', error);
//         toast.error('An error occurred while fetching service charges');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchServiceCharges();
    
//     // Set max withdrawal amount based on user's net exposure
//     const maxWithdrawalAmount = parseFloat(userDatxssdfdsa?.result.balance - userDatxssdfdsa?.result.bonus_won);
//     setMaxWithdrawAmount(maxWithdrawalAmount);
//   }, [userDatxssdfdsa?.result.balance - userDatxssdfdsa?.result.bonus_won]);


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Check if amount exceeds max withdrawal amount
//       if (parseInt(amount) > maxWithdrawAmount) {
//         toast.error('Withdrawal amount exceeds maximum available amount');
//         return;
//       }
  
//       // Calculate service charge based on withdrawal type
//       let serviceCharge = 0;
//       if (withdrawalType === 'Instant') {
//         const instantWithdrawalService = serviceCharges.find(charge => charge.service_type === 'Instant');
//         serviceCharge = parseFloat(instantWithdrawalService.service) / 100; // Convert string to float and divide by 100 to get percentage
//       } else if (withdrawalType === 'Normal') {
//         const amountWithdrawalService = serviceCharges.find(charge => charge.service_type === 'Normal');
//         serviceCharge = parseFloat(amountWithdrawalService.service) / 100; // Convert string to float and divide by 100 to get percentage
//       }
  
//       // Send withdrawal request
//       const response = await axios.post(`${apiUrl}/post_userwithdrawal_balance`, {
//         user_id: userData.user_id,
//         amount,
//         account_no: selectedBank ? selectedBank.account_no : null, // Use selectedBank's account number if available
//         withdrawal_type: withdrawalType,
//         service_charge: serviceCharge,
//       });
//       console.log(response)
  
//       if (response.data.error === false) {
//         toast.success('Withdrawal request sent successfully');
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       console.error('Error sending withdrawal request:', error);
//       toast.error('An error occurred while sending withdrawal request');
//     }
//   };
  

//    const handleAmountSelection = (selectedAmount) => {
//     setAmount(selectedAmount);
//   };

//   const handleBankClick = (bankDetail) => {
//     setSelectedBank(bankDetail);
//   };

//   useEffect(() => {
//     const fetchUserBankDetails = async () => {
//       try {
//         const response = await axios.post(`${apiUrl}/get_userbank_details`, { user_id: userData.user_id });
//         if (response.data.error === false && response.data.result.length > 0) {
//           setUserBankDetails(response.data.result);
//           // Set selectedBank to the first bank details fetched
//           setSelectedBank(response.data.result[0]);
//         } else {
//           setUserBankDetails(null);
//         }
//       } catch (error) {
//         console.error('Error fetching user bank details:', error);
//         toast.error('An error occurred while fetching user bank details');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchUserBankDetails();
//     console.log(serviceCharges)
//   }, [userData.user_id]);



// const calculateWithdrawalAmount = (amount, withdrawalType) => {
//   const serviceCharge = serviceCharges.find(charge => charge.service_type === withdrawalType)?.service;
//   if (serviceCharge !== undefined) {
//     const serviceChargePercentage = parseFloat(serviceCharge) / 100;
//     const withdrawalAmount = parseFloat(amount) * (1 - serviceChargePercentage);
//     return withdrawalAmount.toFixed(2);
//   } else {
//     return 'Error: Service charge not found';
//   }
// };


//   return (
//     <>
//       <Navbar />
//       <AccountNavtop />
//       <div id="profilesecmainacpl">
//         <div id="pfcplx1">
//           <div id="locapthnavtolf">
//             <div id="lfo1">
//               <CiBank />
//               Withdraw Money
//             </div>
//             <div id="lfo2">
//               <Link to={'/'}>Home</Link> <TfiAngleRight />
//               <span id="lf03">Withdraw Money</span>
//             </div>
//           </div>


//           {userDatxssdfdsa && userDatxssdfdsa?.result?.status === "Confirmed" ? 
//           <div id="blowstonwithdm">
//         <h2>Select Bank to Withdraw Money</h2>
//            {isLoading ? (
//               <Loader01 />
//             ) : userBankDetails && userBankDetails.length > 0 ? (
//               <div id='bankdetailsthatprovided'>
//                 {userBankDetails.map((bankDetail, index) => (
//                   <div
//                   id='bankdetailsflex-sfk'
//                     className={`bank-detail ${selectedBank === bankDetail ? 'selectedbankinwithdraw' : ''}`}
//                     key={index}
//                     onClick={() => handleBankClick(bankDetail)}
//                   >
//                     <p>{userData.first_name} {userData.last_name}</p>
//                     <p id='silverbaksbd'>Account Number: {bankDetail.account_no}</p>
//                     <p>IFSC Code: {bankDetail.ifsc_code}</p>
//                     <p>Bank Name: {bankDetail.bank_name}</p>
//                     <p>Bank Branch: {bankDetail.bank_branch}</p>
//                     {/* {bankDetail.set_default_account === "Yes" && <p id='defaultaccbotleftbd'>Default Account</p>} */}
//                     <p id='botksxremarks'>Remarks: {bankDetail.remarks ? bankDetail.remarks : "Not provided"}</p>
//                     {/* <p>Bank Address: {bankDetail.bank_address}</p> */}
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p>Please add your bank details.</p>
//             )}
      
//       <div id='selecwithdrawaltype'>
//   <h2>Select Withdrawal Type</h2>
//   <div className="withdrawal-type-buttons">
//     <button className={withdrawalType === 'Instant' ? 'selected-amount-typewit' : ''} onClick={() => setWithdrawalType('Instant')}>Instant Withdrawal</button>
//     <button className={withdrawalType === 'Normal' ? 'selected-amount-typewit' : ''}  onClick={() => setWithdrawalType('Normal')}>Normal Withdrawal</button>
//   </div>
// </div>


//       {withdrawalType && (
//             <div id='selecwithdaraamounts1'>
//               <h2>Select Withdrawal Amount</h2>
//               <form onSubmit={handleSubmit}>
//                 <div id='labelforamountsecs1'>
                      
//                    <div id="ins10203050100clas">
//                    {userDatxssdfdsa?.result.balance - userDatxssdfdsa?.result.bonus_won >= 100 ?
//                       <button id='firstbtmwd' type="button"  onClick={() => handleAmountSelection(100)} className={amount === '100' ? 'selected-amount' : ''}>100</button> :
//                       <button type="button" className='disbaledbuttonwd' disabled onClick={() => handleAmountSelection(100)}>100</button> 
//                       }
//                             {userDatxssdfdsa?.result.balance - userDatxssdfdsa?.result.bonus_won >= 200 ?
//                       <button type="button" className={amount === '200' ? 'selected-amount' : ''} onClick={() => handleAmountSelection(200)}>200</button> :
//                       <button type="button" className='disbaledbuttonwd' disabled onClick={() => handleAmountSelection(200)}>200</button> 
//                       }
          
//           {userDatxssdfdsa?.result.balance - userDatxssdfdsa?.result.bonus_won >= 300 ?
//                       <button type="button" className={amount === '300' ? 'selected-amount' : ''} onClick={() => handleAmountSelection(300)}>300</button> :
//                       <button type="button" className='disbaledbuttonwd' disabled onClick={() => handleAmountSelection(300)}>300</button> 
//                       }
          
//           {userDatxssdfdsa?.result.balance - userDatxssdfdsa?.result.bonus_won >= 500 ?
//                       <button type="button" className={amount === '500' ? 'selected-amount' : ''} onClick={() => handleAmountSelection(500)}>500</button> :
//                       <button type="button" className='disbaledbuttonwd' disabled onClick={() => handleAmountSelection(500)}>500</button> 
//                       }
//                       {maxWithdrawAmount >= 1000 ? 
//             <button type="button" className={amount === '1000' ? 'selected-amount' : ''} onClick={() => handleAmountSelection(1000)}>1000</button> : 
//             <button type="button" className='disbaledbuttonwd' disabled>1000</button>
//           }
//                     <input
//                       type="number"
//                       value={amount}
//                       min={100}
//                       required
//                       max={userDatxssdfdsa?.result.balance - userDatxssdfdsa?.result.bonus_won}
//                       onChange={(e) => {
//                         const enteredValue = parseFloat(e.target.value);
//                         const maxAmount = parseFloat(userDatxssdfdsa?.result.balance - userDatxssdfdsa?.result.bonus_won);
//                         if (!isNaN(enteredValue) && enteredValue > maxAmount) {
//                           e.target.value = maxAmount.toFixed(2); // Limit the value to net_exposure with 2 decimal places
//                         }
//                         setAmount(e.target.value);
//                       }}
//                       placeholder="Custom Amount"
//                     />
//                    </div>
                    
//                 </div>
//                 {amount && (
//   <div id="divofdisplayamount">
//     <p>
//       After Service charge withdrawal amount :{' '}
//       <span>
//         {calculateWithdrawalAmount(amount, withdrawalType)}/-
//       </span>
//     </p>
//     <button id='widhsdjksibmitskls' type="submit">Withdraw</button>
//   </div>
// )}
//                 <label id='withdrawaltypeskdjkslks'>
//                   {/* <span>Withdrawal Type</span>
//                   <select required value={withdrawalType} onChange={(e) => setWithdrawalType(e.target.value)}>
//                     <option value="">Select Withdrawal Type</option>
//                     <option value="Normal">Normal Withdrawal</option>
//                     <option value="Instant">Instant Withdrawal</option>
//                   </select> */}
//                 </label>
//               </form>
//             </div>
//             )}
//             <div id="x2s558e2233s">
// <p>Minimum withdrawal amount is 100rs</p>
//             <p>If you choose instant withdrawal, you'll be charged a 5% fee, and the funds will be transferred to your wallet within 1 minute to 1 hour.</p>
//   <p>If you choose normal withdrawal, the service charge will be lower than for instant withdrawal, and the funds will be added to your wallet in 1-2 days or 10 hours.</p>

//           </div>
//           </div>

//           : <>
//           <div id="pendingksyksld">
//             <img src="/Logos/rejectedkyclogo.webp" alt="" />
//             <div>
//             <p>Your KYC is not completed. Please try complete your kyc to withdraw amount.</p>
//             <Link to={"/player/kyc-verification"}>Kyc Verification</Link>
//             </div>

//           </div>
//           <div id="x2s558e2233s">
// <p>Minimum withdrawal amount is 100rs</p>
//             <p>If you choose instant withdrawal, you'll be charged a 5% fee, and the funds will be transferred to your wallet within 1 minute to 1 hour.</p>
//   <p>If you choose normal withdrawal, the service charge will be lower than for instant withdrawal, and the funds will be added to your wallet in 1-2 days or 10 hours.</p>

//           </div>
//           </>
// }
//         </div>
//         <div id="pfcplx2">
//           <Addsection01 />
//         </div>
//       </div>
//       <Footer />
//     </>
//   )
// }

// export default Withdraw







































