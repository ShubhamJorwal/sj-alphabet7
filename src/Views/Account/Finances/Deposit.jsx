import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../../Components/Navbar/Navbar';
import AccountNavtop from '../../../Components/AccountNavtop/AccountNavtop';
import Footer from '../../../Components/Footer/Footer';
import FormDepositProof from './FormDepositProof';
import { Link } from 'react-router-dom';
import { CiBank } from 'react-icons/ci';
// import { ToastContainer, toast } from 'react-toastify';
import { Toaster, toast } from 'react-hot-toast';

import { BsCopy } from 'react-icons/bs';

import 'react-toastify/dist/ReactToastify.css';
import { TfiAngleRight } from 'react-icons/tfi';
import Loader01 from '../../../Components/Loaders/Loader01';
import Addsection01 from '../../../Components/Addsecrights/Addsection01';
import Loader03 from '../../../Components/Loaders/Loader03';

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
const bASEUrl = import.meta.env.VITE_REACT_BASEURL;

const CopyToClipboardButton = ({ text }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast.success('Text copied to clipboard successfully!');
      })
      .catch(error => console.error('Error copying to clipboard:', error));
  };

  return (
    <button onClick={copyToClipboard}><BsCopy /></button>
  );
};

const Deposit = () => {
  const [paymentTypes, setPaymentTypes] = useState([]);
  const [selectedPaymentType, setSelectedPaymentType] = useState(null);
  const [bankDetails, setBankDetails] = useState([]);
  const [selectedBankDetail, setSelectedBankDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiUrlPaymentType = `${apiUrl}/get_payment_type`;
  const apiUrlBankDetail = `${apiUrl}/get_bank_detail`;

  useEffect(() => {
    setLoading(true);
    axios.get(apiUrlPaymentType)
      .then(response => {
        const { data } = response;
        if (data && data.error === false) {
          setPaymentTypes(data.result);
          if (data.result.length > 0) {
            const defaultPaymentTypeId = data.result[0].id;
            setSelectedPaymentType(defaultPaymentTypeId);
            localStorage.setItem('payment_type_id', defaultPaymentTypeId); // Set default payment_type_id in localStorage
            fetchBankDetails(defaultPaymentTypeId);
          }
        } else {
          console.error('Error fetching payment types:', data.message);
        }
      })
      .catch(error => {
        console.error('Error fetching payment types:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  

  

  const fetchBankDetails = (paymentTypeId) => {
    const requestBody = { payment_type_id: paymentTypeId };
    setLoading(true);
    axios.post(apiUrlBankDetail, requestBody)
      .then(response => {
        const { data } = response;
        if (data && data.error === false) {
          setBankDetails(data.result);
          console.log(data.result)
          setSelectedBankDetail(data.result[0].id)
          
    localStorage.setItem('bank_detail_id', data.result[0].id);
        } else {
          console.error('Error fetching bank details:', data.message);
        }
      })
      .catch(error => {
        console.error('Error fetching bank details:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handlePaymentTypeClick = (paymentTypeId) => {
    setSelectedPaymentType(paymentTypeId);
    fetchBankDetails(paymentTypeId);
    localStorage.setItem('payment_type_id', paymentTypeId);
  };

  const handleBankDetailClick = (bankId) => {
    setSelectedBankDetail(bankId);
    localStorage.setItem('bank_detail_id', bankId);
  };

  return (
    <>
      <Navbar />
      

      <div id="profilesecmainacpl">
      <AccountNavtop activeLink="Deposit"/>
        <div id="pfcplx1">
          <div id="locapthnavtolf">
            <div id="lfo1">
              <CiBank />
              Finances
            </div>
            <div id="lfo2">
              <Link to={'/'}>Home</Link> <TfiAngleRight />
              <span id="lf03">Deposit Money</span>
            </div>
          </div>

          <div id="locapthnavtolfx56">
            <h2>Available Payment Types</h2>
            <div id="threecardspp">
              {
                paymentTypes.map(type => (
                  <div
                    key={type.id}
                    id={`payment-type-${type.id}`}
                    className={`paymenttypesdr ${selectedPaymentType === type.id ? 'selected-payment-type' : ''}`}
                    onClick={() => handlePaymentTypeClick(type.id)}
                  >
                    <img width={"50px"} src={type.image} alt={type.name} />
                    <span>{type.name}</span>
                  </div>
                )
              )}
            </div>
          </div>

          <div id="locapthnavtolfx57">
            {selectedPaymentType && (
              <div className="bank-detailsxwesre">
                <h3>Bank Details for {paymentTypes.find(type => type.id === selectedPaymentType)?.name}</h3>
                <p id='pbelj357'>Select one bank and make a payment</p>
                {loading ? (
                  <Loader03 />
                ) : bankDetails.length > 0 ? (
                  <ul>
                    {bankDetails.map(bank => (
                      <li
                        onClick={() => handleBankDetailClick(bank.id)}
                        key={bank.id}
                        className={selectedBankDetail === bank.id ? 'selected-bank-detail' : ''}
                      >
                        {bank.bank_name && <p>Bank Name: <span>{bank.bank_name} <CopyToClipboardButton text={bank.bank_name} /></span></p>}
                        {bank.account_no && <p>Account Number: <span>{bank.account_no} <CopyToClipboardButton text={bank.account_no} /></span></p>}
                        {bank.ifsc_code && <p>IFSC Code: <span>{bank.ifsc_code} <CopyToClipboardButton text={bank.ifsc_code} /></span></p> }
                        {bank.account_holder && <p>Account Holder: <span>{bank.account_holder} <CopyToClipboardButton text={bank.account_holder} /></span></p>}
                        {bank.upi_id && <p>Upi id: <span>{bank.upi_id}  <CopyToClipboardButton text={bank.upi_id} /></span></p> }
                        {bank.qr_scan_image && bank.qr_scan_image !== `${bASEUrl}/uploads/bank`&& <p><img id='newdepqrcoimg' src={bank.qr_scan_image} alt="" /></p>}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No bank details available.</p>
                )}
              </div>
            )}

            <div id="deposiskofoint">
              <FormDepositProof />
            </div>
          </div>
          <div id="x2s558e2233s">
            <p>Choose Payment Type, make payment, send screenshot, get wallet credit.</p>
            <p>Please make sure to check the payment details before depositing money into our bank account, as they might change sometimes. Alphabet7 won't be responsible if you send money to an old or inactive account by mistake.</p>
            <p>If your deposit doesn't match what we asked, it's cheating. Funds will be withheld. For example, if you deposit ₹500 but request ₹1000, it won't be credited or returned.</p>
            <p>We only credit the amount that matches both the screenshot and the requested amount.</p>
          </div>
        </div>
        <div id="pfcplx2">
          <Addsection01 />
        </div>
      </div>
      <Footer />
      {/* <Toaster /> */}
      <Toaster />

    </>
  )
}

export default Deposit;
