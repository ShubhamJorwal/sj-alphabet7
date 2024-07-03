import React, { useEffect, useState } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import AccountNavtop from "../../../Components/AccountNavtop/AccountNavtop";
import Footer from "../../../Components/Footer/Footer";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { TfiAngleRight } from "react-icons/tfi";
import Addsection01 from "../../../Components/Addsecrights/Addsection01";
import { Toaster, toast } from 'react-hot-toast';
import axios from "axios";
import Loader03 from "../../../Components/Loaders/Loader03";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const KycVerification = () => {
  const [documentType, setDocumentType] = useState('');
  const [documentNo, setDocumentNo] = useState('');
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [selectedDocument, setSelectedDocument] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  

  const handleDocumentTypeChange = (type) => {
    setSelectedDocument(type);
    switch (type) {
      case 'PAN':
        setDocumentType('PAN');
        break;
      case 'ADAR':
        setDocumentType('ADAR');
        break;
      case 'DRIVING':
        setDocumentType('DRIVING');
        break;
      case 'PASSPORT':
        setDocumentType('PASSPORT');
        break;
      default:
        setDocumentType('');
    }
  };

  const [fileName, setFileName] = useState('');
  const [uploaded, setUploaded] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleFrontImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFrontImage(file);
      setFileName(e.target.files[0].name); // Update file name synchronously
      setTimeout(() => {
        setUploaded(true);
      }, 600);
      setTimeout(() => {
        setUploaded(false);
        setSuccess(true);
      }, 1600);
    }
  };

  const [fileNamex1, setFileNamex1] = useState('');
  const [uploadedx1, setUploadedx1] = useState(false);
  const [successx1, setSuccessx1] = useState(false);

  const handleBackImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBackImage(file);
      setFileNamex1(e.target.files[0].name); // Update file name synchronously
      setTimeout(() => {
        setUploaded(true);
      }, 600);
      setTimeout(() => {
        setUploadedx1(false);
        setSuccessx1(true);
      }, 1600);
    }
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const storedUserData = localStorage.getItem('user');
    const userData = JSON.parse(storedUserData);
    const accessToken = userData.access_token;

    const formData = new FormData();
    formData.append('user_id', userData.user_id);
    formData.append('document_type', documentType);
    formData.append('document_no', documentNo);
    formData.append('upload_doc', frontImage);
    if (documentType !== 'PAN') {
      formData.append('upload_doc', backImage);
    }

    try {
      const response = await axios.post(`${apiUrl}/post_kyc_verification`, formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(formData)
      console.log('KYC verification response:', response.data);
      toast.success("KYC verification requested");
      setDocumentType('');
    setDocumentNo('');
    setFrontImage(null);
    setBackImage(null);
    setFileName('');
    setFileNamex1('');
    setUploaded(false);
    setSuccess(false);
    setUploadedx1(false);
    setSuccessx1(false);

      // Handle success
    } catch (error) {
      console.error('Error submitting KYC verification:', error);
      toast.error("Error submitting KYC verification");
      // Handle error
    } finally {
      setIsLoading(false); // Reset loading state after API call finishes
    }
  };
  

  const [userDataofsingle, setUserDataofsingle] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem('user');
    if (storedUserData) {
      const userDataxsdf = JSON.parse(storedUserData);
      if (userDataxsdf && userDataxsdf.access_token) {
        const accessToken = userDataxsdf.access_token;
        const headers = {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        };
        const apiUrlxs = `${apiUrl}/user-profile`;
        axios
          .get(apiUrlxs, { headers })
          .then(response => {
            console.log('User profile data:', response.data);
            setUserDataofsingle(response.data);
          })
          .catch(error => {
            console.error('There was a problem fetching the user profile:', error);
          });
      } else {
        toast.error("something went wrong");
      }
    }
  }, []);




  return (
    <>
      <Navbar />
      <div id="profilesecmainacpl">
      <AccountNavtop activeLink="Kyc_Verification"/>
        <div id="pfcplx1">
          <div id="locapthnavtolf">
            <div id="lfo1">
              <VscAccount />
              Withdraw
            </div>
            <div id="lfo2">
              <Link to={"/"}>Home</Link> <TfiAngleRight />
              <span id="lf03">Complete KYC</span>
            </div>
          </div>

          {userDataofsingle && userDataofsingle?.result?.status === "Pending" && <>
          <div id="pendingksyksld">
            <img src="/Logos/kyclogo.png" alt="" />
            <div>
            <p>Your KYC approval is pending. Please send you documents and wait for our team to review your documents.</p>
<p>If approved, you can withdraw funds. If rejected, you'll need to re-upload your documents.</p>
            </div>

          </div>
          </>}
          {userDataofsingle && userDataofsingle?.result?.status === "Confirmed" && <>
          <div id="pendingksyksld">
            <img src="/Logos/kyclogo.png" alt="" />
            <div>
            <p>Congrats your kyc is compelted</p>
<p>You can withdraw your winning amounts now</p>
            </div>

          </div>
          </>}

          {userDataofsingle && userDataofsingle?.result?.status === "Rejected" && <>
          <div id="pendingksyksld">
            <img src="/Logos/rejectedkyclogo.png" alt="" />
            <div>
            <p>Your KYC approval is rejected. Please try again with your correct documents.</p>
            </div>

          </div>

          </>}



          <div id="kycverficksxk">
            {userDataofsingle && (userDataofsingle?.result?.status === "Rejected" || userDataofsingle?.result?.status === "Pending") &&
              <>
            <h2>KYC Verification</h2>
            <form onSubmit={handleSubmit}>
              <div id="buttonskjskxe">
                <label>Select Document Type:</label>
                <div>
                  <span
                    className={selectedDocument === 'PAN' ? 'selected-document' : ''}
                    onClick={() => handleDocumentTypeChange('PAN')}
                  >
                    Pan Card
                  </span>
                  <span
                    className={selectedDocument === 'ADAR' ? 'selected-document' : ''}
                    onClick={() => handleDocumentTypeChange('ADAR')}
                  >
                    Aadhar Card
                  </span>
                  <span
                    className={selectedDocument === 'DRIVING' ? 'selected-document' : ''}
                    onClick={() => handleDocumentTypeChange('DRIVING')}
                  >
                    Driving License
                  </span>
                  <span
                    className={selectedDocument === 'PASSPORT' ? 'selected-document' : ''}
                    onClick={() => handleDocumentTypeChange('PASSPORT')}
                  >
                    Passport
                  </span>
                </div>
              </div>
             


              {/* first image */}

           

<div id="buttonsofuploadjsdkfdj">
<div className="main-wrapperxsdrewre">
                <p>Upload Front Image</p>
                <div className="upload-main-wrapper">
              <div className={success ? "upload-wrapper success" : "upload-wrapper"}>
                <input type="file" accept="image/*" required id="upload-file" onChange={handleFrontImageChange} />
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


{/* front image end */}



{/* back image */}



              {/* {documentType !== 'PAN' &&
<div className="main-wrapperxsdrewre">
<p>Upload Back Image</p>
<div className="upload-main-wrapper">
<div className={success ? "upload-wrapper success" : "upload-wrapper"}>
<input type="file" accept="image/*" required id="upload-file"  onChange={handleBackImageChange} />
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
<p id="file-upload-name">{fileNamex1}</p>
</div>

<p>Image must be clear and less than 5 MB</p>
</div>
} */}
</div>







<div id="sdjfksdjkx25s">
                <input required placeholder="Enter Document Number" type="text" value={documentNo} onChange={(e) => setDocumentNo(e.target.value)} />
                <button type="submit" disabled={isLoading}>{isLoading ? <Loader03 /> : 'Submit'}</button>
              </div>

            </form>
            </>}

<br />
            <div id="x2s558e2233s">
           <p><b>KYC for Withdrawals:</b> Complete your KYC to withdraw funds easily. It's a quick process that verifies your identity, ensuring smooth transactions.</p>
           <p>Please wait for approval from our team to finalize your KYC.</p>
          <p><b>Add Bank Details for Payments:</b> Add your bank details to receive payments. This ensures your earnings go directly to your bank account, making it simple and convenient.</p>
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

export default KycVerification;
