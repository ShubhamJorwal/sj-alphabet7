import React, { useState, useEffect } from 'react';
import allgamesdataofpfslw from './allgamesdataofpfslw.json';
import { RxCross2 } from 'react-icons/rx';
import NosearchAv from '../../Animations/NosearchAv.json';
import Lottie from 'react-lottie';
import { LuRefreshCcw } from 'react-icons/lu';
import BetGamesV1 from '../NewDesignGames/BetGamesV1';
import Mojos7V1 from '../NewDesignGames/Mojos7V1';

const MainSearchbar = ({ handleSearchClick, showPopup, HideScrollOverflow, handleClosePopup, currentBalance }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProviders, setSelectedProviders] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showProviders, setShowProviders] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [totalGames, setTotalGames] = useState(allgamesdataofpfslw.length);

  useEffect(() => {
    const filteredGamesCount = allgamesdataofpfslw.filter((game) => {
      const matchesSearch = game.heading.toLowerCase().includes(searchTerm) || game.provider.toLowerCase().includes(searchTerm);
      const matchesProvider = selectedProviders.length > 0 ? selectedProviders.includes(game.provider) : true;
      const matchesCategory = selectedCategories.length > 0 ? selectedCategories.some(cat => game.categories.includes(cat)) : true;
      return matchesSearch && matchesProvider && matchesCategory;
    }).length;

    setTotalGames(filteredGamesCount);
  }, [searchTerm, selectedProviders, selectedCategories]);

  const handleSearchChange = (e) => setSearchTerm(e.target.value.toLowerCase());

  const handleProviderClick = (provider) => {
    setSelectedProviders((prevSelected) =>
      prevSelected.includes(provider)
        ? prevSelected.filter((p) => p !== provider)
        : [...prevSelected, provider]
    );
  };

  const handleCategoryClick = (category) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((c) => c !== category)
        : [...prevSelected, category]
    );
  };

  const handleGameCardClick = (game) => {
    setSelectedGame(game);
  };

  const filteredGames = allgamesdataofpfslw.filter((game) => {
    const matchesSearch = game.heading.toLowerCase().includes(searchTerm) || game.provider.toLowerCase().includes(searchTerm);
    const matchesProvider = selectedProviders.length > 0 ? selectedProviders.includes(game.provider) : true;
    const matchesCategory = selectedCategories.length > 0 ? selectedCategories.some(cat => game.categories.includes(cat)) : true;
    return matchesSearch && matchesProvider && matchesCategory;
  });

  const providers = [...new Set(allgamesdataofpfslw.map((game) => game.provider))];
  const categories = [...new Set(allgamesdataofpfslw.flatMap((game) => game.categories))];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: NosearchAv,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  if (selectedGame) {
    const DirectFromSearch = selectedGame.urlparam;
    
    switch (selectedGame.provider) {
      case 'betgames':
        return <BetGamesV1 DirectFromSearch={DirectFromSearch} currentBalance={currentBalance} handleSearchClick={handleSearchClick} HideScrollOverflow={HideScrollOverflow} />;
      case '7mojosLogo':
        return <Mojos7V1 DirectFromSearch={DirectFromSearch} currentBalance={currentBalance} handleSearchClick={handleSearchClick} HideScrollOverflow={HideScrollOverflow} />;
      default:
        return <div>Unsupported provider</div>;
    }
  }

  return (
    <>
      {showPopup && (
        <div className="xssearchpopup">
          <div className="overlaydivx489s" onClick={() => { handleClosePopup(true); HideScrollOverflow(false); }}></div>
          <div className="popup-content">
            <div className="insidecontentx4w">
              <button className="close-buttonx54w65" onClick={() => { handleClosePopup(true); HideScrollOverflow(false); }}>
                <RxCross2 />
              </button>
              <h1 className="heading1x515w51">Search for games <p>Total Games: {totalGames}</p></h1>
              
              <div className="sec15xw1s6">
                <div className="searchks45x45s">
                  <input type="text" placeholder="Search Games" onChange={handleSearchChange} />
                  <img src="/Final_Assets/Icons/search.svg" alt="" />
                </div>

                <div className="x4566w8143x">
                  <div className={`drofilterofproviders ${selectedProviders.length > 0 ? 'filterxs5w65ereapplied' : ''}`} onClick={() => setShowProviders(!showProviders)}>
                    <h1>
                      <img className="iconofx5soviders" src="/Final_Assets/Icons/filterproviders.svg" alt="" />Providers
                    </h1>
                    <img className="iconofdroparrow" src="/Final_Assets/Icons/down-arrow.svg" alt="" />
                  </div>

                  <div className={`drofilterofcategories ${selectedCategories.length > 0 ? 'filterxs5w65ereapplied' : ''}`} onClick={() => setShowCategories(!showCategories)}>
                    <h1>
                      <img className="iconofx5scategories" src="/Final_Assets/Icons/categoryprovbxks.svg" alt="" />Categories
                    </h1>
                    <img className="iconofdroparrow" src="/Final_Assets/Icons/down-arrow.svg" alt="" />
                  </div>
                </div>
              </div>

              {showProviders && (
                <div className="filterlistofsearchcontainer">
                  <div
                    className="provcategorytem cs4ef54sd5f56sw51235"
                    onClick={() => setSelectedProviders([])}
                  ><LuRefreshCcw />
                    All Providers
                  </div>
                  {providers.map((provider) => (
                    <div
                      key={provider}
                      className={`provcategorytem ${selectedProviders.includes(provider) ? 'selectedprovcat' : ''}`}
                      onClick={() => handleProviderClick(provider)}
                    >
                      <img src={`/Logos/CompanyLogos/${provider}.png`} alt="" />
                    </div>
                  ))}

                  <button className='crosbtoscfiltercate85w' onClick={() => setShowProviders(!showProviders)}><RxCross2 /></button>
                </div>
              )}

              {showCategories && (
                <div className="filterlistofsearchcontainer">
                  <div
                    className="provcategorytemx2 cs4ef54sd5f56sw51235"
                    onClick={() => setSelectedCategories([])}
                  ><LuRefreshCcw />
                    All Categories
                  </div>
                  {categories.map((category) => (
                    <div
                      key={category}
                      className={`provcategorytemx2 ${selectedCategories.includes(category) ? 'selectedprovcat' : ''}`}
                      onClick={() => handleCategoryClick(category)}
                    >
                      <img src={`/Final_Assets/Icons/${category}.svg`} alt="" />
                      {category}
                    </div>
                  ))}

                  <button className='crosbtoscfiltercate85w' onClick={() => setShowCategories(!showCategories)}><RxCross2 /></button>
                </div>
              )}

              <div className="gamecardsx4w65s6w">
                {filteredGames.length > 0 ? (
                  filteredGames.map((data) => (
                    <div id="sdjfksdjlkc2023" key={data.id} className="">
                      <div className="staff_image_holder">
                        <button onClick={() => handleGameCardClick(data)} className="play_button">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                            <path d="M0 0h24v24H0z" fill="none" />
                          </svg>
                        </button>
                        <span className="spanofc15s265wimg">
                          <img className="abs15x5w6532sdf63sd" src={`/Logos/CompanyLogos/${data.provider}.png`} alt="" />
                          <img className="c15s265wimg" src={data.imageUrl} alt={`Image ${data.imageUrl}`} />
                        </span>
                        <div className="dataofgamex">
                          <p className="datapara11">{data.heading}</p>
                          <p className="datapara22">Provider: {data.provider}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                    <>
                    <div className="sdf2ds"></div>
                    <div className="sdf2ds"></div>
                    <div className="nosearchfoundx56434x">
                    <Lottie options={defaultOptions} height={180} width={180} />
                    <p className="appr2ve2k1nfoftheT2r4ned">No games found</p>
                  </div>
                    </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainSearchbar;

