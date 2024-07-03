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




  return (
    <>
      <LoadingBar
        color="#fe9f23"
        height="3px"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      <nav id="navbar">

        <div className="bottombarx5s36">

        
        <Link to={"/online-casino-games/BetGames"} className="mbsidbarnavx4s-menu-button">
          <svg height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg" id="fi_1714090"><path d="m512 256c0 141.386719-114.613281 256-256 256s-256-114.613281-256-256 114.613281-256 256-256 256 114.613281 256 256zm0 0" fill="#937661"></path><path d="m406.070312 256c0 82.878906-67.191406 150.070312-150.070312 150.070312s-150.070312-67.191406-150.070312-150.070312 67.191406-150.070312 150.070312-150.070312 150.070312 67.191406 150.070312 150.070312zm0 0" fill="#937661"></path><path d="m432.464844 123.496094-61.972656 35.753906c-5.324219-6.476562-11.265626-12.417969-17.742188-17.742188l35.753906-61.972656c16.613282 12.554688 31.40625 27.347656 43.960938 43.960938zm0 0" fill="#424852"></path><path d="m388.503906 79.535156-35.753906 61.972656c-13.539062-11.574218-29.0625-20.605468-45.816406-26.660156l35.664062-61.792968c16.296875 6.972656 31.707032 15.863281 45.90625 26.480468zm0 0" fill="#eb5463"></path><path d="m342.597656 53.054688-35.664062 61.792968c-7.941406-2.871094-16.125-5.027344-24.449219-6.445312v-71.414063c20.710937 2.402344 40.964844 7.816407 60.113281 16.066407zm0 0" fill="#424852"></path><path d="m282.484375 36.988281v71.414063c-17.503906-3.296875-35.464844-3.296875-52.96875 0v-71.414063c17.585937-2.238281 35.382813-2.238281 52.96875 0zm0 0" fill="#eb5463"></path><path d="m229.515625 36.988281v71.414063c-8.324219 1.417968-16.507813 3.574218-24.449219 6.445312l-35.664062-61.792968c19.148437-8.25 39.402344-13.664063 60.113281-16.066407zm0 0" fill="#424852"></path><path d="m205.066406 114.847656c-16.753906 6.054688-32.277344 15.085938-45.816406 26.660156l-35.753906-61.972656c14.199218-10.617187 29.609375-19.507812 45.90625-26.480468zm0 0" fill="#eb5463"></path><path d="m159.25 141.507812c-6.476562 5.324219-12.417969 11.265626-17.742188 17.742188l-61.972656-35.753906c12.554688-16.613282 27.347656-31.40625 43.960938-43.960938zm0 0" fill="#424852"></path><path d="m141.507812 159.25c-11.574218 13.539062-20.605468 29.0625-26.660156 45.816406l-61.792968-35.664062c6.972656-16.296875 15.863281-31.707032 26.480468-45.90625zm0 0" fill="#eb5463"></path><path d="m114.847656 205.066406c-2.871094 7.941406-5.027344 16.125-6.445312 24.449219h-71.414063c2.402344-20.710937 7.816407-40.964844 16.066407-60.113281zm0 0" fill="#424852"></path><path d="m105.929688 256c-.027344 8.886719.800781 17.753906 2.472656 26.484375h-71.414063c-2.238281-17.585937-2.238281-35.382813 0-52.96875h71.414063c-1.671875 8.730469-2.5 17.597656-2.472656 26.484375zm0 0" fill="#eb5463"></path><path d="m114.847656 306.933594-61.792968 35.664062c-8.25-19.148437-13.664063-39.402344-16.066407-60.113281h71.414063c1.417968 8.324219 3.574218 16.507813 6.445312 24.449219zm0 0" fill="#424852"></path><path d="m141.507812 352.75-61.972656 35.753906c-10.617187-14.199218-19.507812-29.609375-26.480468-45.90625l61.792968-35.664062c6.054688 16.753906 15.085938 32.277344 26.660156 45.816406zm0 0" fill="#eb5463"></path><path d="m159.25 370.492188-35.753906 61.972656c-16.613282-12.554688-31.40625-27.347656-43.960938-43.960938l61.972656-35.753906c5.324219 6.476562 11.265626 12.417969 17.742188 17.742188zm0 0" fill="#424852"></path><path d="m205.066406 397.152344-35.664062 61.792968c-16.296875-6.972656-31.707032-15.863281-45.90625-26.480468l35.753906-61.972656c13.539062 11.574218 29.0625 20.605468 45.816406 26.660156zm0 0" fill="#eb5463"></path><path d="m229.515625 403.683594v71.328125c-20.710937-2.402344-40.964844-7.816407-60.113281-16.066407l35.664062-61.792968c7.953125 2.859375 16.132813 5.042968 24.449219 6.53125zm0 0" fill="#424852"></path><path d="m282.484375 403.683594v71.328125c-17.585937 2.238281-35.382813 2.238281-52.96875 0v-71.328125c17.515625 3.179687 35.453125 3.179687 52.96875 0zm0 0" fill="#eb5463"></path><path d="m342.597656 458.945312c-19.148437 8.25-39.402344 13.664063-60.113281 16.066407v-71.328125c8.316406-1.488282 16.496094-3.671875 24.449219-6.53125zm0 0" fill="#424852"></path><path d="m388.503906 432.464844c-14.199218 10.617187-29.609375 19.507812-45.90625 26.480468l-35.664062-61.792968c16.753906-6.054688 32.277344-15.085938 45.816406-26.660156zm0 0" fill="#eb5463"></path><path d="m432.464844 388.503906c-12.554688 16.613282-27.347656 31.40625-43.960938 43.960938l-35.753906-61.972656c6.476562-5.324219 12.417969-11.265626 17.742188-17.742188zm0 0" fill="#424852"></path><path d="m458.945312 342.597656c-6.972656 16.296875-15.863281 31.707032-26.480468 45.90625l-61.972656-35.753906c11.574218-13.539062 20.605468-29.0625 26.660156-45.816406zm0 0" fill="#eb5463"></path><path d="m475.011719 282.484375c-2.402344 20.710937-7.816407 40.964844-16.066407 60.113281l-61.792968-35.664062c2.859375-7.953125 5.042968-16.132813 6.53125-24.449219zm0 0" fill="#424852"></path><path d="m476.691406 256c.023438 8.855469-.539062 17.703125-1.679687 26.484375h-71.328125c3.179687-17.515625 3.179687-35.453125 0-52.96875h71.328125c1.140625 8.78125 1.703125 17.628906 1.679687 26.484375zm0 0" fill="#eb5463"></path><path d="m475.011719 229.515625h-71.328125c-1.488282-8.316406-3.671875-16.496094-6.53125-24.449219l61.792968-35.664062c8.25 19.148437 13.664063 39.402344 16.066407 60.113281zm0 0" fill="#424852"></path><path d="m458.945312 169.402344-61.792968 35.664062c-6.054688-16.753906-15.085938-32.277344-26.660156-45.816406l61.972656-35.753906c10.617187 14.199218 19.507812 29.609375 26.480468 45.90625zm0 0" fill="#eb5463"></path><g fill="#fdcd56"><path d="m282.484375 256c.015625 3.015625-.523437 6.007812-1.589844 8.828125-2.597656 7.542969-8.523437 13.46875-16.066406 16.066406-5.695313 2.117188-11.960937 2.117188-17.65625 0-7.542969-2.597656-13.46875-8.523437-16.066406-16.066406-2.117188-5.695313-2.117188-11.960937 0-17.65625 2.597656-7.542969 8.523437-13.46875 16.066406-16.066406 5.695313-2.117188 11.960937-2.117188 17.65625 0 7.542969 2.597656 13.46875 8.523437 16.066406 16.066406 1.066407 2.820313 1.605469 5.8125 1.589844 8.828125zm0 0"></path><path d="m273.65625 176.550781c0 9.75-7.90625 17.65625-17.65625 17.65625s-17.65625-7.90625-17.65625-17.65625 7.90625-17.652343 17.65625-17.652343 17.65625 7.902343 17.65625 17.652343zm0 0"></path><path d="m273.65625 335.449219c.007812 7.992187-5.355469 14.992187-13.074219 17.066406s-15.867187-1.292969-19.867187-8.214844c-4-6.917969-2.851563-15.664062 2.796875-21.316406 5.652343-5.652344 14.394531-6.804687 21.316406-2.808594 5.449219 3.160157 8.808594 8.972657 8.828125 15.273438zm0 0"></path><path d="m194.207031 256c.015625 8.859375-6.535156 16.359375-15.320312 17.53125-8.78125 1.171875-17.070313-4.34375-19.378907-12.898438-2.308593-8.550781 2.078126-17.492187 10.253907-20.898437 8.179687-3.40625 17.617187-.226563 22.0625 7.4375 1.558593 2.683594 2.378906 5.726563 2.382812 8.828125zm0 0"></path><path d="m353.101562 256c0 9.75-7.902343 17.65625-17.652343 17.65625s-17.65625-7.90625-17.65625-17.65625 7.90625-17.65625 17.65625-17.65625c9.738281.03125 17.625 7.917969 17.652343 17.65625zm0 0"></path></g><path d="m512 256c0 141.386719-114.613281 256-256 256-3.882812 0-7.769531-.089844-11.652344-.351562 135.972656-7.152344 242.558594-119.488282 242.558594-255.648438s-106.585938-248.496094-242.558594-255.648438c3.882813-.2617182 7.769532-.351562 11.652344-.351562 141.386719 0 256 114.613281 256 256zm0 0" fill="#846956"></path><path d="m406.070312 256c0 82.878906-67.191406 150.070312-150.070312 150.070312-2.914062 0-5.914062-.089843-8.828125-.265624 79.28125-4.714844 141.15625-70.386719 141.15625-149.804688s-61.875-145.089844-141.15625-149.804688c2.914063-.175781 5.914063-.265624 8.828125-.265624 82.878906 0 150.070312 67.191406 150.070312 150.070312zm0 0" fill="#846956"></path><path d="m264.828125 256c.007813 1.003906-.171875 2-.53125 2.941406-.863281 2.515625-2.839844 4.492188-5.355469 5.355469-1.898437.707031-3.984375.707031-5.882812 0-2.515625-.863281-4.492188-2.839844-5.355469-5.355469-.707031-1.898437-.707031-3.984375 0-5.882812.863281-2.515625 2.839844-4.492188 5.355469-5.355469 1.898437-.707031 3.984375-.707031 5.882812 0 2.515625.863281 4.492188 2.839844 5.355469 5.355469.359375.941406.539063 1.9375.53125 2.941406zm0 0" fill="#ffd67b"></path><path d="m386.117188 150.246094-15.625 9.003906c-5.324219-6.476562-11.265626-12.417969-17.742188-17.742188l9.003906-15.625c8.980469 7.214844 17.148438 15.382813 24.363282 24.363282zm0 0" fill="#353a42"></path><path d="m361.753906 125.882812-9.003906 15.625c-13.539062-11.574218-29.0625-20.605468-45.816406-26.660156l8.917968-15.539062c16.617188 6.359375 32.113282 15.332031 45.902344 26.574218zm0 0" fill="#d94452"></path><path d="m315.851562 99.308594-8.917968 15.539062c-7.941406-2.871094-16.125-5.027344-24.449219-6.445312v-18.007813c11.40625 1.769531 22.59375 4.761719 33.367187 8.914063zm0 0" fill="#353a42"></path><path d="m282.484375 90.394531v18.007813c-17.503906-3.296875-35.464844-3.296875-52.96875 0v-18.007813c17.542969-2.824219 35.425781-2.824219 52.96875 0zm0 0" fill="#d94452"></path><path d="m229.515625 90.394531v18.007813c-8.324219 1.417968-16.507813 3.574218-24.449219 6.445312l-8.917968-15.539062c10.773437-4.152344 21.960937-7.144532 33.367187-8.914063zm0 0" fill="#353a42"></path><path d="m205.066406 114.847656c-16.753906 6.054688-32.277344 15.085938-45.816406 26.660156l-9.003906-15.625c13.789062-11.242187 29.285156-20.214843 45.902344-26.574218zm0 0" fill="#d94452"></path><path d="m159.25 141.507812c-6.476562 5.324219-12.417969 11.265626-17.742188 17.742188l-15.625-9.003906c7.214844-8.980469 15.382813-17.148438 24.363282-24.363282zm0 0" fill="#353a42"></path><path d="m141.507812 159.25c-11.574218 13.539062-20.605468 29.0625-26.660156 45.816406l-15.539062-8.917968c6.359375-16.617188 15.332031-32.113282 26.574218-45.902344zm0 0" fill="#d94452"></path><path d="m114.847656 205.066406c-2.871094 7.941406-5.027344 16.125-6.445312 24.449219h-18.007813c1.769531-11.40625 4.761719-22.59375 8.914063-33.367187zm0 0" fill="#353a42"></path><path d="m105.929688 256c-.027344 8.886719.800781 17.753906 2.472656 26.484375h-18.007813c-2.824219-17.542969-2.824219-35.425781 0-52.96875h18.007813c-1.671875 8.730469-2.5 17.597656-2.472656 26.484375zm0 0" fill="#d94452"></path><path d="m114.847656 306.933594-15.539062 8.917968c-4.152344-10.773437-7.144532-21.960937-8.914063-33.367187h18.007813c1.417968 8.324219 3.574218 16.507813 6.445312 24.449219zm0 0" fill="#353a42"></path><path d="m141.507812 352.75-15.625 9.003906c-11.242187-13.789062-20.214843-29.285156-26.574218-45.902344l15.539062-8.917968c6.054688 16.753906 15.085938 32.277344 26.660156 45.816406zm0 0" fill="#d94452"></path><path d="m159.25 370.492188-9.003906 15.625c-8.980469-7.214844-17.148438-15.382813-24.363282-24.363282l15.625-9.003906c5.324219 6.476562 11.265626 12.417969 17.742188 17.742188zm0 0" fill="#353a42"></path><path d="m205.066406 397.152344-8.917968 15.539062c-16.617188-6.359375-32.113282-15.332031-45.902344-26.574218l9.003906-15.625c13.539062 11.574218 29.0625 20.605468 45.816406 26.660156zm0 0" fill="#d94452"></path><path d="m229.515625 403.683594v17.921875c-11.40625-1.769531-22.59375-4.761719-33.367187-8.914063l8.917968-15.539062c7.953125 2.859375 16.132813 5.042968 24.449219 6.53125zm0 0" fill="#353a42"></path><path d="m282.484375 403.683594v17.921875c-17.542969 2.824219-35.425781 2.824219-52.96875 0v-17.921875c17.515625 3.179687 35.453125 3.179687 52.96875 0zm0 0" fill="#d94452"></path><path d="m315.851562 412.691406c-10.773437 4.152344-21.960937 7.144532-33.367187 8.914063v-17.921875c8.316406-1.488282 16.496094-3.671875 24.449219-6.53125zm0 0" fill="#353a42"></path><path d="m361.753906 386.117188c-13.789062 11.242187-29.285156 20.214843-45.902344 26.574218l-8.917968-15.539062c16.753906-6.054688 32.277344-15.085938 45.816406-26.660156zm0 0" fill="#d94452"></path><path d="m386.117188 361.753906c-7.214844 8.980469-15.382813 17.148438-24.363282 24.363282l-9.003906-15.625c6.476562-5.324219 12.417969-11.265626 17.742188-17.742188zm0 0" fill="#353a42"></path><path d="m412.691406 315.851562c-6.359375 16.617188-15.332031 32.113282-26.574218 45.902344l-15.625-9.003906c11.574218-13.539062 20.605468-29.0625 26.660156-45.816406zm0 0" fill="#d94452"></path><path d="m421.605469 282.484375c-1.769531 11.40625-4.761719 22.59375-8.914063 33.367187l-15.539062-8.917968c2.859375-7.953125 5.042968-16.132813 6.53125-24.449219zm0 0" fill="#353a42"></path><path d="m423.722656 256c.011719 8.871094-.695312 17.726562-2.117187 26.484375h-17.921875c3.179687-17.515625 3.179687-35.453125 0-52.96875h17.921875c1.421875 8.757813 2.128906 17.613281 2.117187 26.484375zm0 0" fill="#d94452"></path><path d="m421.605469 229.515625h-17.921875c-1.488282-8.316406-3.671875-16.496094-6.53125-24.449219l15.539062-8.917968c4.152344 10.773437 7.144532 21.960937 8.914063 33.367187zm0 0" fill="#353a42"></path><path d="m412.691406 196.148438-15.539062 8.917968c-6.054688-16.753906-15.085938-32.277344-26.660156-45.816406l15.625-9.003906c11.242187 13.789062 20.214843 29.285156 26.574218 45.902344zm0 0" fill="#d94452"></path><path d="m264.828125 191.824219v39.28125c-5.695313-2.117188-11.960937-2.117188-17.65625 0v-39.28125c5.457031 3.175781 12.199219 3.175781 17.65625 0zm0 0" fill="#f2a149"></path><path d="m229.515625 256c-.015625 3.015625.523437 6.007812 1.589844 8.828125h-39.28125c3.175781-5.457031 3.175781-12.199219 0-17.65625h39.28125c-1.066407 2.820313-1.605469 5.8125-1.589844 8.828125zm0 0" fill="#f2a149"></path><path d="m264.828125 280.894531v39.28125c-5.457031-3.175781-12.199219-3.175781-17.65625 0v-39.28125c5.695313 2.117188 11.960937 2.117188 17.65625 0zm0 0" fill="#f2a149"></path><path d="m317.792969 256c.003906 3.101562.828125 6.144531 2.382812 8.828125h-39.28125c2.117188-5.695313 2.117188-11.960937 0-17.65625h39.28125c-1.554687 2.683594-2.378906 5.726563-2.382812 8.828125zm0 0" fill="#f2a149"></path><path d="m256 485.515625c-126.757812 0-229.515625-102.757813-229.515625-229.515625s102.757813-229.515625 229.515625-229.515625 229.515625 102.757813 229.515625 229.515625c-.140625 126.699219-102.816406 229.375-229.515625 229.515625zm0-441.378906c-117.007812 0-211.863281 94.855469-211.863281 211.863281s94.855469 211.863281 211.863281 211.863281 211.863281-94.855469 211.863281-211.863281c-.136719-116.953125-94.910156-211.726562-211.863281-211.863281zm0 0" fill="#f4f6f8"></path></svg>
          <p>Casino</p>
        </Link>


        <Link to={"/player/bet-details"} className="mbsidbarnavx4s-menu-button">
       <svg enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" id="fi_11317575"><g id="_x30_9_Game"><g fill="#ecedef"><path d="m445.873 448.869c-30.2 15.054-69.543 9.051-93.741-14.315-16.346-15.793-25.49-37.589-40.821-54.305-28.722-31.308-79.425-39.62-116.644-19.21-44.071 24.248-70.986 87.952-125.049 90.046-30.2 1.201-59.292-23.366-63.171-53.288-3.879-30.015 17.917-61.139 47.471-67.696 43.496-9.904 54.76-30.413 12.653-74.253-21.538-22.198-35.98-47-13.207-76.932 20.8-26.882 66.504-36.85 105.562-12.93 64.668 39.772 9.823 35.921 61.786-37.865 48.981-70.225 103.826-20.774 138.163-16.901 32.139 3.787 63.817-16.347 95.772-11.083 49.486 8.18 68.867 69.975 32.693 104.916-23.181 22.442-60.215 23.735-85.983 42.945-20.931 15.643-17.735 35.407 2.494 42.668 128.604 46.171 90.741 133.694 42.022 158.203z"></path><path d="m107.217 54.89c-26.179.43-36.876 29.645-4.233 53.755 35.676 26.351 62.16 6.736 61.848-11.89-.281-16.737-25.264-42.396-57.615-41.865z"></path></g><g><path d="m386.562 201.023-88.209 155.927c-8.485 15-27.524 20.281-42.524 11.795l-94.493-53.456c-15-8.486-20.28-27.524-11.795-42.524l88.209-155.927c8.485-15 27.524-20.281 42.524-11.795l94.493 53.456c15 8.485 20.28 27.524 11.795 42.524z" fill="#fdce06"></path><path d="m292.353 200.64v179.149c0 17.234-13.971 31.204-31.204 31.204h-108.566c-17.234 0-31.204-13.971-31.204-31.204v-179.149c0-17.234 13.971-31.204 31.204-31.204h108.566c17.233 0 31.204 13.97 31.204 31.204z" fill="#fff"></path><path d="m163.874 297.145c0-29.331 42.962-53.435 42.962-53.435s43.021 24.103 43.021 53.434c0 13.551-11.007 24.558-24.558 24.558-7.338 0-13.965-3.255-18.463-8.403-4.438 5.148-11.066 8.403-18.404 8.403-13.551.001-24.558-11.006-24.558-24.557z" fill="#cfcfd1"></path><g fill="#3e3e3e"><path d="m377.226 154.147-94.492-53.457c-17.363-9.822-39.512-3.689-49.336 13.687l-28.318 50.059h-52.497c-19.961 0-36.201 16.243-36.201 36.206v179.148c0 19.963 16.24 36.204 36.201 36.204h108.564c19.966 0 36.206-16.24 36.206-36.204v-13.27c6.075-6.307 1.506-1.19 93.56-163.036 9.854-17.403 3.734-39.485-13.687-49.337zm-89.873 225.642c0 14.448-11.758 26.204-26.206 26.204h-108.565c-14.448 0-26.201-11.755-26.201-26.204v-179.148c0-14.451 11.753-26.206 26.201-26.206h108.564c14.448 0 26.206 11.755 26.206 26.206v179.148zm94.858-181.228-84.858 150.006v-147.926c0-19.963-16.24-36.206-36.206-36.206h-44.582l25.534-45.137c7.118-12.577 23.083-17.052 35.713-9.902l94.492 53.457c12.598 7.122 17.041 23.098 9.907 35.708z"></path><path d="m362.431 181.107c-.894-.504-4.79-2.359-7.383 2.896l-3.096 5.476c-1.362 2.402-.513 5.454 1.89 6.814 2.391 1.353 5.45.519 6.812-1.892.283-.5 2.629-4.893 3.501-6.526 1.577-3.506 1.225-5.098-1.724-6.768z"></path><path d="m261.542 195.187c-2.764 0-5 2.239-5 5v7.446c0 2.761 2.236 5 5 5s5-2.239 5-5v-7.446c0-2.761-2.236-5-5-5z"></path><path d="m152.187 367.794c-2.764 0-5 2.239-5 5v7.446c0 2.761 2.236 5 5 5s5-2.239 5-5v-7.446c0-2.761-2.237-5-5-5z"></path><path d="m209.282 239.347c-1.523-.85-3.369-.852-4.893.002-1.86 1.042-45.513 25.903-45.513 57.795 0 21.84 23.147 36.437 42.959 26.255v13.318c0 2.761 2.236 5 5 5s5-2.239 5-5v-13.343c19.849 10.217 43.022-4.352 43.022-26.23.001-31.894-43.715-56.754-45.575-57.797zm1.193 70.571c-1.043-1.124-2.417-1.619-3.64-1.619-1.506-.128-2.809.594-3.789 1.736-11.63 13.496-34.17 5.155-34.17-12.891 0-22.251 29.209-42.141 37.959-47.603 8.765 5.459 38.022 25.352 38.022 47.603.001 17.288-21.301 26.852-34.382 12.774z"></path></g></g></g><g id="Layer_1"></g></svg>
          <p>My Bets</p>
        </Link>
{/* 
        <Link to={"/player/profile"} className="mbsidbarnavx4s-menu-button">
        <VscAccount />
          <p>Profile</p>
        </Link> */}

                
<Link to={"/player/profile"} className="mbsidbarnavx4s-menu-button">
        <VscAccount />
          <p>Profile</p>
        </Link>

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
                <div id="nav-linksx0s2">
                  <div className="loginbuttonnavsxkk">
                  <button onClick={() => { setShowLoginPopup(true); HideScrollOverflow(true); }}>Login</button>
                  </div>
                  <div className="signupbuttonnavsxkk">
                    <button onClick={() => { setShowSignupPopup(true); HideScrollOverflow(true); }}>Sign-up</button>

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
        <button 
          className="mbsidbarnavx4s-close-button" 
          onClick={toggleSidebar}
        >
          Close
        </button>
        <ul className="mbsidbarnavx4s-sidebar-links">
          <li><Link to="/home" onClick={toggleSidebar}>Home</Link></li>
          <li><Link to="/profile" onClick={toggleSidebar}>Profile</Link></li>
          <li><Link to="/settings" onClick={toggleSidebar}>Settings</Link></li>
          <li><Link to="/logout" onClick={toggleSidebar}>Logout</Link></li>
        </ul>
      </div>

      <div 
        className={`mbsidbarnavx4s-overlay ${isOpen ? 'open' : ''}`} 
        onClick={toggleSidebar}
      ></div>








      <WhatsappIco01 />

      {showLoginPopup && <LoginPopup popupchange={setShowSignupPopup} onClose={() => { setShowLoginPopup(false); HideScrollOverflow(false); }} />}
{showSignupPopup && <SignupPopup popupchange={setShowLoginPopup} onClose={() => { setShowSignupPopup(false); HideScrollOverflow(false); }} />}
<Toaster />

    </>
  );
}

export default Navbar
