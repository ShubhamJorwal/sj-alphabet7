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
import NetentV1 from "../NewDesignGames/NetentV1";
import RedtigerV1 from "../NewDesignGames/RedtigerV1";
import NolimitcityV1 from "../NewDesignGames/NolimitcityV1";
import BigtimegamingV1 from "../NewDesignGames/BigtimegamingV1";





const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  // const [selectedComponent, setSelectedComponent] = useState("BetGames");
  const [selectedComponent, setSelectedComponent] = useState("Ezugi");

  
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
  



















  const [GamesOfEzugi, setGamesOfEzugi] = useState([]);
  const [GamesOfEvolution, setGamesOfEvolution] = useState([]);
  const [GamesOfRedtiger, setGamesOfRedtiger] = useState([]);
  const [GamesOfNetEnt, setGamesOfNetEnt] = useState([]);
  const [GamesOfnolimitcity, setGamesOfnolimitcity] = useState([]);
  const [GamesOfBigtimeGaming, setGamesOfBigtimeGaming] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      const apiUrl = 'https://admin.alphabet7.com/public/api/games';

      try {
        const response = await axios.get(apiUrl);

        // Filter games where the Merchant name is "Ezugi"
        const filteredGamesx1 = (response.data.gameresponse || []).filter(
          (game) => game.MerchantName === 'Ezugi'
        );
        setGamesOfEzugi(filteredGamesx1);

        const filteredGamesx2 = (response.data.gameresponse || []).filter(
          (game) => game.MerchantName === 'Evolution'
        );
        setGamesOfEvolution(filteredGamesx2);

        const filteredGamesx3 = (response.data.gameresponse || []).filter(
            (game) => game.MerchantName === 'EvoOSSAsia' && game.SubMerchantName === 'RedTigerOSSAsia'
        );
        setGamesOfRedtiger(filteredGamesx3);

        const filteredGamesx4 = (response.data.gameresponse || []).filter(
         (game) => game.MerchantName === 'EvoOSSAsia' && game.SubMerchantName === 'NetEntOSSAsia'
        );
        setGamesOfNetEnt(filteredGamesx4);

        const filteredGamesx5 = (response.data.gameresponse || []).filter(
           (game) => game.MerchantName === 'EvoOSSAsia' && game.SubMerchantName === 'NLCOSSAsia'
        );
        setGamesOfnolimitcity(filteredGamesx5);

        const filteredGamesx6 = (response.data.gameresponse || []).filter(
           (game) => game.MerchantName === 'EvoOSSAsia' && game.SubMerchantName === 'BTGOSSAsia'
        );
        setGamesOfBigtimeGaming(filteredGamesx6);




        
        if (response.data.url) {
          window.open(response.data.url, '_blank', 'noopener,noreferrer');
        }
      } catch (error) {
        console.error('Error fetching games:', error);
        setError('Failed to fetch games');
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);



  


    
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
        return <EzugiV1 GamesOfEzugi={GamesOfEzugi} loading={loading} currentBalance={currentBalance} handleSearchClick={handleSearchClick}  HideScrollOverflow={HideScrollOverflow}/>;
      case "Evolution":
        return <EvolutionV1 GamesOfEvolution={GamesOfEvolution} loading={loading} currentBalance={currentBalance} handleSearchClick={handleSearchClick}  HideScrollOverflow={HideScrollOverflow}/>;
      case "Netent":
        return <NetentV1 GamesOfNetEnt={GamesOfNetEnt} loading={loading}currentBalance={currentBalance} handleSearchClick={handleSearchClick}  HideScrollOverflow={HideScrollOverflow}/>;
      case "Redtigerlogo":
        return <RedtigerV1 GamesOfRedtiger={GamesOfRedtiger} loading={loading} currentBalance={currentBalance} handleSearchClick={handleSearchClick}  HideScrollOverflow={HideScrollOverflow}/>;
      case "Nolimitcity":
        return <NolimitcityV1 GamesOfnolimitcity={GamesOfnolimitcity} loading={loading} currentBalance={currentBalance} handleSearchClick={handleSearchClick}  HideScrollOverflow={HideScrollOverflow}/>;
      case "Bigtimegaming":
        return <BigtimegamingV1 GamesOfBigtimeGaming={GamesOfBigtimeGaming}  loading={loading}currentBalance={currentBalance} handleSearchClick={handleSearchClick}  HideScrollOverflow={HideScrollOverflow}/>;
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
    { name: "Netent", logo: "/Logos/CompanyLogos/netent.png" },
    { name: "Redtigerlogo", logo: "/Logos/CompanyLogos/redtigerlogo.png" },
    { name: "Nolimitcity", logo: "/Logos/CompanyLogos/nolimitcity.png" },
    { name: "Bigtimegaming", logo: "/Logos/CompanyLogos/bigtimegaming.png" },
    { name: "7mojos", logo: "/Logos/CompanyLogos/7mojosLogo.png" },
    { name: "BetGames", logo: "/Logos/CompanyLogos/betgames.png" },
    // { name: "Spribe", logo: "/Logos/CompanyLogos/Spribe.png" },
    // { name: "microgaming", logo: "/Logos/CompanyLogos/microgaming.png" },
    // { name: "digitain", logo: "/Logos/CompanyLogos/digitain.png" },
    // { name: "supernowa", logo: "/Logos/CompanyLogos/supernowa.png" },
  ];
  


  // navigationcls4

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 9; // Number of visible items at a time
  
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
            <img src="/Final_Assets/Icons/search.svg" alt=""  onClick={() => { handleSearchClick(true); HideScrollOverflow(true); } }/>
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
