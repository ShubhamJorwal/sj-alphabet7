import React, { useState, useEffect } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import AccountNavtop from '../../../Components/AccountNavtop/AccountNavtop';
import Footer from '../../../Components/Footer/Footer';
import Addsection01 from '../../../Components/Addsecrights/Addsection01';
import { TfiAngleRight } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import { CiBank, CiEdit } from 'react-icons/ci';
import { IoSearchSharp } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";



import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import Loader01 from '../../../Components/Loaders/Loader01';

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const BankDetails = () => {
  const storedUserData = localStorage.getItem('user');
  const userData = JSON.parse(storedUserData);

  const [formData, setFormData] = useState({
    user_id: userData.user_id,
    bank_name: '',
    account_no: '',
    ifsc_code: '',
    bank_branch: '',
    bank_address: '',
    remarks: '',
    set_default_account: 'Yes',
  });

  const [userBankDetails, setUserBankDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserBankDetails = async () => {
      try {
        const response = await axios.post(`${apiUrl}/get_userbank_details`, { user_id: formData.user_id });
        if (response.data.error === false && response.data.result.length > 0) {
          setUserBankDetails(response.data.result);

        } else {
          setUserBankDetails(null);
        }
      } catch (error) {
        console.error('Error fetching user bank details:', error);
        // toast.error('An error occurred while fetching user bank details');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserBankDetails();
  }, [formData.user_id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://ifsc.razorpay.com/${formData.ifsc_code}`);
      const { BRANCH, ADDRESS, BANK } = response.data;
      setFormData({ ...formData, bank_branch: BRANCH, bank_address: ADDRESS, bank_name: BANK });
      if (response.data.error) {
        toast.error(response.data.message);
      } else {
        toast.success('Bank details fetched successfully');
      }
    } catch (error) {
      console.error('Your IFSC Number is Incorrect');
      toast.error('Your IFSC Number is Incorrect');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/post_userbank_details`, formData);
      console.log('Bank details saved:', response.data);
      if (response.data.error) {
        toast.error(response.data.message);
      } else {
        // Reset the form data
        setFormData({
          user_id: userData.user_id,
          bank_name: '',
          account_no: '',
          ifsc_code: '',
          bank_branch: '',
          bank_address: '',
          remarks: '',
          set_default_account: 'Yes',
        });
  
        // Fetch updated bank details
        const fetchUserBankDetails = async () => {
          try {
            const response = await axios.post(`${apiUrl}/get_userbank_details`, { user_id: formData.user_id });
            if (response.data.error === false && response.data.result.length > 0) {
              setUserBankDetails(response.data.result);
            } else {
              setUserBankDetails(null);
            }
          } catch (error) {
            console.error('Error fetching user bank details:', error);
            // toast.error('An error occurred while fetching user bank details');
          } finally {
            setIsLoading(false);
          }
        };
  
        fetchUserBankDetails();
  
        toast.success('Bank details saved successfully');
      }
    } catch (error) {
      console.error('Error saving bank details:', error);
      toast.error('An error occurred while saving bank details');
    }
  };
  
  console.log(userBankDetails)

  const handleDefaultAccountChange = () => {
    const newValue = formData.set_default_account === 'Yes' ? 'No' : 'Yes';
    setFormData({ ...formData, set_default_account: newValue });
  };



  const handleDeleteBankDetails = async (bank_idxd) => {
    try {
      const response = await axios.post(
        `${apiUrl}/bank_detail_delete`,
        { id: bank_idxd }, 
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      toast.success("Bank Details Deleted Successfully");

      const fetchUserBankDetailsdsfsd = async () => {
        try {
          const response = await axios.post(`${apiUrl}/get_userbank_details`, { user_id: formData.user_id });
          if (response.data.error === false && response.data.result.length > 0) {
            setUserBankDetails(response.data.result);
  
          } else {
            setUserBankDetails(null);
          }
        } catch (error) {
          // toast.error('An error occurred while fetching user bank details');
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchUserBankDetailsdsfsd();

    } catch (error) {
      toast.error("Try Again");
    }
  };
  return (
    <>
      <Navbar />
      <div id="profilesecmainacpl">
      <AccountNavtop />
        <div id="pfcplx1">
          <div id="locapthnavtolf">
            <div id="lfo1">
              <CiBank />
              Bank Details
            </div>
            <div id="lfo2">
              <Link to={'/'}>Home</Link> <TfiAngleRight />
              <span id="lf03">Add Bank Details</span>
            </div>
          </div>

          <div id="bankdetailssd22">
            <h2>Bank Details</h2>
            {isLoading ? (
  <Loader01 />
) : userBankDetails && userBankDetails.length > 0 ? (
  <div id='skfbanktosflebd'>
{userBankDetails.map((bankDetail, index) => (
  <div id='bankdetailsflex-sfk' key={index}>
    <p>{userData.first_name} {userData.last_name}</p>
    <p id='silverbaksbd'>Account Number: {bankDetail.account_no}</p>
    <p>IFSC Code: {bankDetail.ifsc_code}</p>
    <p>Bank Name: {bankDetail.bank_name}</p>
    <p>Bank Branch: {bankDetail.bank_branch}</p>
    {/* {bankDetail.set_default_account === "Yes"  && <p id='defaultaccbotleftbd'>Default Account</p> } */}
    <p id='botksxremarks'>Remarks: {bankDetail.remarks ? bankDetail.remarks : "Not provided"}</p>
    <p>Bank Address: {bankDetail.bank_address}</p>
    <button id='topeditbutonsk' ><CiEdit /></button>
    <button id='topeditbutonskdsjfjksd' onClick={() => handleDeleteBankDetails(bankDetail.id)}><AiOutlineDelete /></button>

  </div>
))}

  </div>
) : (
  <p>Please add your bank details.</p>
)}


 <div id="addbankdetailsdibdb">

  <img src="/Logos/bankaddlogoico.webp"  id='bankaddlogoico' alt="" />
  <h2> Add Bank Details</h2>
 <form onSubmit={handleSubmit}>
             <p> <label>Account Number</label>
              <input type="number" name="account_no" required placeholder='Enter Account Number' value={formData.account_no} onChange={handleChange} /></p>
<p>
              <label>IFSC Code</label>
             <div id="newseaifsc">
             <input placeholder='Enter IFSC Code' required type="text" name="ifsc_code" value={formData.ifsc_code} onChange={handleChange} />
              <button type="button" onClick={handleSearch}><IoSearchSharp /></button>
             </div>
              </p>

             <p> <label>Bank Name</label>
              <input readOnly disabled placeholder='Bank Name' required type="text" name="bank_name" value={formData.bank_name}  /></p>

             <p> <label>Bank Branch</label>
              <input placeholder='Bank Branch' required readOnly disabled type="text" name="bank_branch" value={formData.bank_branch}  />
</p>
              <p><label>Bank Address</label>
              <input placeholder='Bank Address' readOnly required disabled type="text" name="bank_address" value={formData.bank_address}  /></p>

             <p> <label>Notes</label>
              <input placeholder='Notes  (Optional..)' type="text" name="remarks" value={formData.remarks} onChange={handleChange} /></p>

              <div id='defaultsacdb'>
              {/* <span>
              <label>Set Default Account</label>
                <button type="button" onClick={handleDefaultAccountChange} className={formData.set_default_account === 'Yes' ? 'default-account-yes' : 'default-account-no'}>
                  {formData.set_default_account}
                </button>
              </span> */}
              <button id='btnmbsdaddbankdetails' type="submit">Save Bank Details</button>
              </div>

            </form>
 </div>
          </div>
        </div>
        <div id="pfcplx2">
          <Addsection01 />
        </div>
      </div>

<Toaster />
      <Footer />
    </>
  );
};

export default BankDetails;
