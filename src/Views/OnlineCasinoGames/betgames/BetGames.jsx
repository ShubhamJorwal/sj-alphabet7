import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../../Components/Footer/Footer';
import { IoSearchOutline } from 'react-icons/io5';
import Navbar from '../../../Components/Navbar/Navbar';
import { TfiAngleDoubleRight } from 'react-icons/tfi';
import Loader01 from '../../../Components/Loaders/Loader01';
import Loader02 from '../../../Components/Loaders/Loader02';
import Loader03 from '../../../Components/Loaders/Loader03';

const BetGames = ({HideScrollOverflow}) => {
  const [isLoading, setIsLoading] = useState(true); // State variable to track loading state

  useEffect(() => {
    const storedUserData = localStorage.getItem('user');
    let userData = {};

    if (storedUserData) {
      userData = JSON.parse(storedUserData);
    } else {
      // Set default user data if not found in localStorage
      userData.token = "-";
      localStorage.setItem('user', JSON.stringify(userData));
    }

    console.log(userData.token);

    // const clientUrl = 'https://integrations01-webiframe.betgames.tv';
    const clientUrl = 'https://webiframe.betgames.tv';
    const script = document.createElement('script');

    script.onload = () => {  
      setTimeout(() => {
        setIsLoading(false); // Set loading state to false when script is loaded after 1000ms delay
      }, 3000);
      window.BetGames.setup({
        containerId: 'BetGamesData',
        clientUrl: clientUrl,
        // partnerCode: 'alphabet7_dev',
        partnerCode: 'alphabet7_com',
        token: userData.token,
        language: 'en',
        timezone: '0',
        defaultPage: 'lobby',
        // gameId: GameId
      });
    };

    script.type = 'text/javascript';
    script.src = `${clientUrl}/public/betgames.js?${Date.now()}`;

    document.head.appendChild(script);

    return () => {
      // Cleanup function if needed
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      {isLoading && <Loader02/> } {/* Render loader if isLoading is true */}
      <div id="BetGamesData"></div>
    </>
  );
};

export default BetGames;




export const SpecBetGames = ({}) => {
  const [isLoading, setIsLoading] = useState(true); // State variable to track loading state
  const { GameId } = useParams()
  useEffect(() => {
    const storedUserData = localStorage.getItem('user');
    let userData = {};

    if (storedUserData) {
      userData = JSON.parse(storedUserData);
    } else {
      // Set default user data if not found in localStorage
      userData.token = "-";
      localStorage.setItem('user', JSON.stringify(userData));
    }

    console.log(userData.token);

    // const clientUrl = 'https://integrations01-webiframe.betgames.tv';
    const clientUrl = 'https://webiframe.betgames.tv';
    const script = document.createElement('script');

    script.onload = () => {  
      setTimeout(() => {
        setIsLoading(false); // Set loading state to false when script is loaded after 1000ms delay
      }, 3000);
      window.BetGames.setup({
        containerId: 'BetGamesData',
        clientUrl: clientUrl,
        // partnerCode: 'alphabet7_dev',
        partnerCode: 'alphabet7_com',
        token: userData.token,
        language: 'en',
        timezone: '0',
        gameId: GameId
      });
    };

    script.type = 'text/javascript';
    script.src = `${clientUrl}/public/betgames.js?${Date.now()}`;

    document.head.appendChild(script);

    return () => {
      // Cleanup function if needed
      document.head.removeChild(script);
    };
  }, []);









  // extragames
  const  providerName = "BetGames"

  const providers = [
    // { name: "All Games", imgUrl: "/Logos/alphalogo.png", provider: "AllGames" },
    // { name: "Ezugi", imgUrl: "/Logos/ezugi_icon.webp", provider: "Ezugi" },
    // {
    //   name: "EvolutionGaming",
    //   imgUrl: "/Logos/evolution_icon.webp",
    //   provider: "EvolutionGaming",
    // },
    // { name: "AG", imgUrl: "/Logos/amazing_gaming.webp", provider: "AG" },
    { name: "BetGames", imgUrl: "/Logos/bettv.webp", provider: "BetGames" },
    // { name: "TV Bet", imgUrl: "/Logos/tvbet_icon.webp", provider: "TVBet" },
    // {
    //   name: "Supernova",
    //   imgUrl: "/Logos/supernowa.webp",
    //   provider: "Supernova",
    // },
    // { name: "Mplay", imgUrl: "/Logos/mplayicon.webp", provider: "Mplay" },
    // { name: "7Mojos", imgUrl: "/Logos/7mojos.webp", provider: "7Mojos" },
    // { name: "Macaw", imgUrl: "/Logos/macawicon.webp", provider: "Macaw" },
    // {
    //   name: "KingMaker",
    //   imgUrl: "/Logos/kingmkersicon.webp",
    //   provider: "KingMaker",
    // },
  ];

  console.log(providerName);

  const ProviderComponent = () => {
    switch (providerName) {
      case "BetGames":
        return ;

      default:
        return null;
    }
  };

  return (
    <>
    <Navbar />
      <div id="maincontcasinoxsjk">
        <div id="s2conxjsk">
          <div className="searchbar">
            {" "}
            <IoSearchOutline />
            <input type="text" placeholder="Search Games Here" />{" "}
          </div>
          <h3 id="s32h3sdl">Providers</h3>

          <ul>
            {providers.map((provider) => (
              <Link
                key={provider.name}
                to={`/online-casino-games/${provider.provider}`}
                className={
                  provider.provider === providerName ? "activeprovider" : ""
                }
              >
                <img src={provider.imgUrl} alt="" />
                {provider.name}
          <ProviderComponent />
                <TfiAngleDoubleRight />
              </Link>
            ))}
          </ul>
        </div>
        <div id="s1conxjsk">
        {isLoading && <Loader02/> }
      <div id="BetGamesData"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};















export const SpecBetGamesNew = ({GameId}) => {
  const [isLoading, setIsLoading] = useState(true); // State variable to track loading state
  useEffect(() => {
    const storedUserData = localStorage.getItem('user');
    let userData = {};

    if (storedUserData) {
      userData = JSON.parse(storedUserData);
    } else {
      // Set default user data if not found in localStorage
      userData.token = "-";
      localStorage.setItem('user', JSON.stringify(userData));
    }

    console.log(userData.token);

    // const clientUrl = 'https://integrations01-webiframe.betgames.tv';
    const clientUrl = 'https://webiframe.betgames.tv';
    const script = document.createElement('script');

    script.onload = () => {  
      setTimeout(() => {
        setIsLoading(false); // Set loading state to false when script is loaded after 1000ms delay
      }, 3000);
      window.BetGames.setup({
        containerId: 'BetGamesData',
        clientUrl: clientUrl,
        // partnerCode: 'alphabet7_dev',
        partnerCode: 'alphabet7_com',
        token: userData.token,
        language: 'en',
        timezone: '0',
        gameId: GameId
      });
    };

    script.type = 'text/javascript';
    script.src = `${clientUrl}/public/betgames.js?${Date.now()}`;

    document.head.appendChild(script);

    return () => {
      // Cleanup function if needed
      document.head.removeChild(script);
    };
  }, []);










  return (
    <>

        <div id="">
        {isLoading && <Loader03/> }
      <div id="BetGamesData"></div>
        </div>




















        
    </>
  );
};

