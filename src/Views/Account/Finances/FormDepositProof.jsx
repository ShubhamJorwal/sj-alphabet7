import axios from 'axios';
import React, { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast';
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
import './financesec.scss'










const FormDepositProof = () => {
    const [amount, setAmount] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [uploadDoc, setUploadDoc] = useState(null);
    const [fileName, setFileName] = useState('');
    const [uploaded, setUploaded] = useState(false);
    const [success, setSuccess] = useState(false);
  
    const handleAmountChange = (event) => {
      setAmount(event.target.value);
    };
  
    const handleTransactionIdChange = (event) => {
      setTransactionId(event.target.value);
    };
  
    const handleFormSubmit = async (event) => {
        event.preventDefault();
      
        // Retrieve payment type ID from localStorage
        const paymentTypeId = localStorage.getItem('payment_type_id');
        if (!paymentTypeId) {
          toast.error('Payment type ID not found in localStorage.');
          return;
        }
      
        const paymentBankId = localStorage.getItem('bank_detail_id');
        if (!paymentBankId) {
          toast.error('Payment type ID not found in localStorage.');
          return;
        }
      
        const storedUserData = localStorage.getItem('user');
        const userData = JSON.parse(storedUserData);
      
        const formData = new FormData();
        formData.append('user_id', userData.user_id);
        formData.append('payment_type_id', paymentTypeId);
        formData.append('bank_details_id', paymentBankId);
        formData.append('amount', amount);
        formData.append('transaction_id', transactionId);
        formData.append('upload_doc', uploadDoc);
      
        try {
          const response = await axios.post(`${apiUrl}/post_userbank_deposit`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
      
          if (response.data.error) {
            toast.error(response.data.message);
            return; // Stop further execution
          }
      
          console.log(response)
          console.log(formData)
      
          toast.success(response.data.message);
          // Reset the form after successful submission
          setAmount('');
          setTransactionId('');
          setUploadDoc(null);
          setFileName('');
          setUploaded(false);
          setSuccess(false);
      
          // Handle success, display a success message or redirect to another page
        } catch (error) {
          console.error('Error depositing:', error);
          toast.error('Failed to deposit. Please try again.');
        }
      };
      
  
    const handleUploadDocChange = (event) => {
      setUploadDoc(event.target.files[0]);
      const filename = event.target.files[0].name;
      setFileName(filename);
  
      if (filename !== "") {
        setTimeout(() => {
          setUploaded(true);
        }, 600);
        setTimeout(() => {
          setUploaded(false);
          setSuccess(true);
        }, 1600);
      }
    };
    
    


    
  return (
    <>
                <div id="sdfew252x">
                <h3>Deposit Funds</h3>
        <form onSubmit={handleFormSubmit}>
          <div className='sectionforiskd252'>
            <input required placeholder='Amount' type="number" value={amount} onChange={handleAmountChange} />
          </div>
          <div className='sectionforiskd252'>
            <input required placeholder='Transaction ID' type="text" value={transactionId} onChange={handleTransactionIdChange} />
          </div>
          <div className="main-wrapperxsdrewre">
            <p>Upload Payment Reciept</p>
            <div className="upload-main-wrapper">
              <div className={success ? "upload-wrapper success" : "upload-wrapper"}>
                <input type="file" required id="upload-file" onChange={handleUploadDocChange} />
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="224.3881704980842 176.8527621722847 221.13266283524905 178.8472378277154" width="221.13" height="178.85">
                  <defs>
                    <path d="M357.38 176.85C386.18 176.85 409.53 204.24 409.53 238.02C409.53 239.29 409.5 240.56 409.42 241.81C430.23 246.95 445.52 264.16 445.52 284.59C445.52 284.59 445.52 284.59 445.52 284.59C445.52 309.08 423.56 328.94 396.47 328.94C384.17 328.94 285.74 328.94 273.44 328.94C246.35 328.94 224.39 309.08 224.39 284.59C224.39 284.59 224.39 284.59 224.39 284.59C224.39 263.24 241.08 245.41 263.31 241.2C265.3 218.05 281.96 199.98 302.22 199.98C306.67 199.98 310.94 200.85 314.93 202.46C324.4 186.96 339.88 176.85 357.38 176.85Z" id="b1aO7LLtdW"></path>
                    <path d="M306.46 297.6L339.79 297.6L373.13 297.6L339.79 255.94L306.46 297.6Z" id="c4SXvvMdYD"></path>
                    <path d="M350.79 293.05L328.79 293.05L328.79 355.7L350.79 355.7L350.79 293.05Z" id="b11si2zUk"></path>
                  </defs>
                  <g><g><g><use xlinkHref="#b1aO7LLtdW" opacity="1" fill="#ffffff" fillOpacity="1"></use></g><g><g><use xlinkHref="#c4SXvvMdYD" opacity="1" fill="#363535" fillOpacity="1"></use></g><g><use xlinkHref="#b11si2zUk" opacity="1" fill="#363535" fillOpacity="1"></use></g></g></g></g></svg>
                <span className={uploaded ? "file-upload-text" : "file-upload-text visible"}>{uploaded ? "" : "Upload File"}</span>
                <div className={success ? "file-success-text visible" : "file-success-text"}>
                  <svg version="1.1" id="check" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" xmlSpace="preserve">
                    <circle style={{ fill: 'rgba(0,0,0,0)', stroke: '#ffffff', strokeWidth: '10', strokeMiterlimit: '10' }} cx="49.799" cy="49.746" r="44.757" />
                    <polyline style={{ fill: 'rgba(0,0,0,0)', stroke: '#ffffff', strokeWidth: '10', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: '10' }} points="27.114,51 41.402,65.288 72.485,34.205" />
                  </svg>
                  <span>Successfully</span>
                </div>
              </div>
              <p id="file-upload-name">{fileName}</p>
            </div>
            
            <p>Image must be clear and less than 5 MB</p>
          </div>
          <button className='sectionforiskd252' type="submit">Deposit</button>
        </form>
      </div>
      <Toaster />
    </>
  )
}

export default FormDepositProof
