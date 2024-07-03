import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import HomeSlider from "./HomeSlider/HomeSlider";
import './home.scss';
import Comp01 from "./Extracomponents/Comp01";
import Comp02 from "./Extracomponents/Comp02";
import Comp03 from "./Extracomponents/Comp03";
import Comp04 from "./Extracomponents/Comp04";
import Comp05 from "./Extracomponents/Comp05";
import BetGames from "../OnlineCasinoGames/betgames/BetGames";
import { Link } from "react-router-dom";
import BetGamesV1 from "../NewDesignGames/BetGamesV1";
import Mojos7V1 from "../NewDesignGames/Mojos7V1";
import EzugiV1 from "../NewDesignGames/EzugiV1";
import EvolutionV1 from "../NewDesignGames/EvolutionV1";
import { HideScrollOverflow } from "../../Utils/HideScrollOverflow";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Loader01 from "../../Components/Loaders/Loader01";
import Loader02 from "../../Components/Loaders/Loader02";
import Loader03 from "../../Components/Loaders/Loader03";
import axios from "axios";
import MainSearchbar from "./MainSearchbar";
import AllGamesV1 from "../NewDesignGames/AllGamesV1";





const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState("BetGames");

  
  const [userData, setUserData] = useState(null);


  const fetchUserData = () => {
    const storedUserData = localStorage.getItem('user');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      if (userData && userData.access_token) {
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











  useEffect(() => {
    const popupDisplayed = localStorage.getItem('popupDisplayed');
    if (!popupDisplayed) {
      setShowPopup(true);
    }
  }, []);

  const handleClosePopup = () => {
    localStorage.setItem('popupDisplayed', 'true');
    setShowPopup(false);
  };

  const handleLinkClick = (name) => {
    setSelectedComponent(name);
  };
  


    
  const currentBalance =  userData?.result?.balance || "0.00"
  
  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case "All Games":
        return <AllGamesV1 currentBalance={currentBalance} handleSearchClick={handleSearchClick}  HideScrollOverflow={HideScrollOverflow} />;
      case "BetGames":
        return <BetGamesV1 currentBalance={currentBalance} handleSearchClick={handleSearchClick}  HideScrollOverflow={HideScrollOverflow} />;
      case "7mojos":
        return <Mojos7V1 currentBalance={currentBalance} handleSearchClick={handleSearchClick}  HideScrollOverflow={HideScrollOverflow} />;
      case "Ezugi":
        return <EzugiV1 />;
      case "Evolution":
        return <EvolutionV1 />;
      default:
        return null;
    }
  };

  const handleSearchClick = () => {
    setShowPopup(true);
  };






























  const dataArrayx2 = [
    { name: "All Games", logo: "/Logos/CompanyLogos/allgames.png" },
    { name: "Ezugi", logo: "/Logos/CompanyLogos/ezugi.png" },
    { name: "Evolution", logo: "/Logos/CompanyLogos/evolutoin.png" },
    { name: "7mojos", logo: "/Logos/CompanyLogos/7mojosLogo.png" },
    { name: "BetGames", logo: "/Logos/CompanyLogos/betgames.png" },
    { name: "Spribe", logo: "/Logos/CompanyLogos/Spribe.png" },
    { name: "netent", logo: "/Logos/CompanyLogos/netent.png" },
    { name: "redtigerlogo", logo: "/Logos/CompanyLogos/redtigerlogo.png" },
    { name: "microgaming", logo: "/Logos/CompanyLogos/microgaming.png" },
    { name: "digitain", logo: "/Logos/CompanyLogos/digitain.png" },
    { name: "supernowa", logo: "/Logos/CompanyLogos/supernowa.png" },
  ];
  


  // navigationcls4

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 8; // Number of visible items at a time
  
  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, dataArrayx2.length - visibleCount));
  };
  
  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };
  return (
    <>
      <Navbar />
      <div className="tobsecondbargamesx5s">
    

      <div className="seclkx41-navigation">
      <button onClick={handlePrev} disabled={startIndex === 0}><MdChevronLeft /></button>

        <div className="seclkx41">
        {dataArrayx2.slice(startIndex, startIndex + visibleCount).map((item, index) => (
            <div key={index} className={`xjksw5x1 ${selectedComponent === item.name ? "selectedlinkofc5ax5" : ""}`} onClick={() => handleLinkClick(item.name)}>
              <img src={item.logo} alt={item.name} />
            </div>
          ))}
        </div>

        <button onClick={handleNext} disabled={startIndex >= dataArrayx2.length - visibleCount}><MdChevronRight /></button>
      </div>

      
      <div className="seclkx42">
          <span>
            <input readOnly type="text" placeholder="Search Games"  onClick={() => { handleSearchClick(true); HideScrollOverflow(true); } }/>
            <img src="/Final_Assets/Icons/search.svg" alt="" />
          </span>
        </div>


        
      </div>
      <HomeSlider />
      <div className="selected-component">
        {renderSelectedComponent()}
      </div>
      <Comp02 />
      <Comp04 />
      {/* <Comp05 /> */}
      <Comp01 />
      <Footer />
      <MainSearchbar handleSearchClick={handleSearchClick} HideScrollOverflow={HideScrollOverflow} handleClosePopup={handleClosePopup} showPopup={showPopup} currentBalance={currentBalance}/>
    </>
  );
};

export default Home;
