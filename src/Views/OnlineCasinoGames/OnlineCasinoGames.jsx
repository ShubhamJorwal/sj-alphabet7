import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link, useParams } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { TfiAngleDoubleRight } from "react-icons/tfi";
import BetGamesV1 from "../NewDesignGames/BetGamesV1";
import EzugiV1 from "../NewDesignGames/EzugiV1";
import EvolutionV1 from "../NewDesignGames/EvolutionV1";
import Mojos7V1 from "../NewDesignGames/Mojos7V1";
import axios from "axios";
import Loader01 from "../../Components/Loaders/Loader01";
import Loader02 from "../../Components/Loaders/Loader02";
import Loader03 from "../../Components/Loaders/Loader03";
import { HideScrollOverflow } from "../../Utils/HideScrollOverflow";
import "./onlinecasinogames.scss";
import MainSearchbar from "../Home/MainSearchbar";
import AllGamesV1 from "../NewDesignGames/AllGamesV1";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const OnlineCasinoGames = () => {
  const { providerName } = useParams();
  const [showPopup, setShowPopup] = useState(false);
  const [userData, setUserData] = useState(null);

  const fetchUserData = () => {
    const storedUserData = localStorage.getItem("user");
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      if (userData && userData.access_token) {
        const accessToken = userData.access_token;
        const headers = {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        };
        const apiUrlxs = `${apiUrl}/user-profile`;
        axios
          .get(apiUrlxs, { headers })
          .then((response) => {
            setUserData(response.data);
          })
          .catch((error) => {
            console.error("There was a problem fetching the user profile:", error);
          });
      }
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);



  useEffect(() => {
    const popupDisplayed = localStorage.getItem("popupDisplayed");
    if (!popupDisplayed) {
      setShowPopup(true);
    }
  }, []);

  const handleClosePopup = () => {
    localStorage.setItem("popupDisplayed", "true");
    setShowPopup(false);
  };

  const currentBalance = userData?.result?.balance || "0.00";

  const providers = [
    { name: "All Games", imgUrl: "/Logos/alphalogo.png", provider: "AllGames" },
    { name: "BetGames", imgUrl: "/Logos/bettv.webp", provider: "BetGames" },
    { name: "7Mojos", imgUrl: "/Logos/7mojos.webp", provider: "7Mojos" },
    { name: "Ezugi", imgUrl: "/Logos/ezugi_icon.webp", provider: "Ezugi" },
    { name: "EvolutionGaming", imgUrl: "/Logos/evolution_icon.webp", provider: "EvolutionGaming" },
    
    

    { name: "AG", imgUrl: "/Logos/amazing_gaming.webp", provider: "AG" },
    { name: "TV Bet", imgUrl: "/Logos/tvbet_icon.webp", provider: "TVBet" },
    {
      name: "Supernova",
      imgUrl: "/Logos/supernowa.webp",
      provider: "Supernova",
    },
    { name: "Mplay", imgUrl: "/Logos/mplayicon.webp", provider: "Mplay" },
    { name: "Macaw", imgUrl: "/Logos/macawicon.webp", provider: "Macaw" },
    {
      name: "KingMaker",
      imgUrl: "/Logos/kingmkersicon.webp",
      provider: "KingMaker",
    },






  ];

  const ProviderComponent = () => {
    switch (providerName) {
      case "AllGames":
        return <AllGamesV1 currentBalance={currentBalance} handleSearchClick={handleSearchClick} HideScrollOverflow={HideScrollOverflow} />;
      case "BetGames":
        return <BetGamesV1 currentBalance={currentBalance} handleSearchClick={handleSearchClick} HideScrollOverflow={HideScrollOverflow} />;
      case "7Mojos":
        return <Mojos7V1 currentBalance={currentBalance} handleSearchClick={handleSearchClick} HideScrollOverflow={HideScrollOverflow} />;
      case "Ezugi":
        return <EzugiV1 />;
      case "EvolutionGaming":
        return <EvolutionV1 />;
      default:
        return null;
    }
  };

  const handleSearchClick = () => {
    setShowPopup(true);
  };

  return (
    <>
      <Navbar />
      <div id="maincontcasinoxsjk">
        <div id="s2conxjsk">
          <div className="searchbar">
            <IoSearchOutline />
            <input type="text" placeholder="Search Games Here" onClick={() => { handleSearchClick(true); HideScrollOverflow(true); }} />
          </div>
          <h3 id="s32h3sdl">Providers</h3>
          <ul>
            {providers.map((provider) => (
              <Link
                key={provider.name}
                to={`/online-casino-games/${provider.provider}`}
                className={provider.provider === providerName ? "activeprovider" : ""}
              >
                <img src={provider.imgUrl} alt="" />
                {provider.name}
                <TfiAngleDoubleRight />
              </Link>
            ))}
          </ul>
        </div>
        <div id="s1conxjsk">
          <ProviderComponent />
        </div>
      </div>
      <Footer />
      <MainSearchbar handleSearchClick={handleSearchClick} HideScrollOverflow={HideScrollOverflow} handleClosePopup={handleClosePopup} showPopup={showPopup} currentBalance={currentBalance} />
    </>
  );
};

export default OnlineCasinoGames;
