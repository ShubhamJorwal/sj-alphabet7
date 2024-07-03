import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { SpecBetGamesNew } from "../OnlineCasinoGames/betgames/BetGames";
import './gamesdesigncard.scss';
import allgamesdataofpfslw from '../Home/allgamesdataofpfslw.json';

const BetGamesV1 = ({ currentBalance, handleSearchClick, HideScrollOverflow, DirectFromSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGameId, setSelectedGameId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All Games");
  const [filteredGames, setFilteredGames] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (DirectFromSearch) {
      setSelectedGameId(DirectFromSearch); // Set the game ID if DirectFromSearch has a value
      setIsOpen(true); // Open the popup
    }
  }, [DirectFromSearch]);

  const togglePopup = (urlparam) => {
    setSelectedGameId(urlparam); // Set the selected game ID
    setIsOpen(!isOpen); // Toggle the popup state

    // Reload the page if DirectFromSearch has a value
    if (DirectFromSearch) {
      window.location.reload();
    }
  };

  useEffect(() => {
    HideScrollOverflow(isOpen);

    // Cleanup function
    return () => {
      HideScrollOverflow(false);
    };
  }, [isOpen]);

  useEffect(() => {
    const filtered = allgamesdataofpfslw.filter(
      (game) =>
        game.provider === "betgames" &&
        game.categories.includes(selectedCategory)
    );
    setFilteredGames(filtered);
  }, [selectedCategory]);

  useEffect(() => {
    const uniqueCategories = new Set();
    allgamesdataofpfslw.forEach((game) => {
      if (game.provider === "betgames") {
        game.categories.forEach((category) => {
          uniqueCategories.add(category);
        });
      }
    });
    setCategories([ ...Array.from(uniqueCategories)]);
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="sec45x9wjklca5w">
        {categories.map((category) => (
          <div
            key={category}
            className={`x155w6s156w ${selectedCategory === category ? "activec18s" : ""}`}
            onClick={() => handleCategoryClick(category)}
          >
            <img src={`/Final_Assets/Icons/${category.replace(" ", "%20")}.svg`} alt="" />
            {category}
          </div>
        ))}
      </div>

      <div id="parentscardssectionc21s">
        <div id="gamescardssectionc21s">
          <div className="x485456s58ws45w">
            <h2 className="h2ofx78w65s">
              <img src="/Final_Assets/Icons/casinoico1.svg" alt="" />
              Online Casino
            </h2>
          </div>
          <div id="gamescardchildren">
            {filteredGames.map((data) => (
              <div id="sdjfksdjlkc2023" key={data.id} className="">
                <div className="staff_image_holder">
                  <button onClick={() => togglePopup(data.urlparam)} className="play_button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                  </button>
                  <span className="spanofc15s265wimg">
                    <img className="abs15x5w6532sdf63sd" src="/Logos/CompanyLogos/betgames.png" alt="" />
                    <img className="c15s265wimg" src={data.imageUrl} alt={`Image ${data.imageUrl}`} />
                  </span>
                  <div className="dataofgamex">
                    <p className="scksw55x5s">Bet Games</p>
                    <p className="scksw55x5s2">{data.heading}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {isOpen && (
            <div className="popupsdfdselayover">
              <div className="xs48w5sd3225">
                <h2 className="h2ofxsfew65s">
                  <img src="/Final_Assets/Icons/casinoico1.svg" alt="" />Online Casino
                </h2>
                <h2 className="zx58we65se23s">
                  <img src="/Logos/CompanyLogos/betgames.png" alt="" />
                </h2>
                <div className="s45s52ccrossbsjcom4">
                  <p>Balance: ₹{currentBalance}</p>
                  <input readOnly type="text" placeholder="Search Games" onClick={() => { handleSearchClick(true); HideScrollOverflow(true); }} />
                  <button id="crossbtnsjcom3" onClick={() => togglePopup(null)} className="close-button">
                    <RxCross2 />
                  </button>
                </div>
              </div>
              <div className="popupcontentxcfsdfjklsd" onClick={(e) => e.stopPropagation()}>
                <SpecBetGamesNew GameId={selectedGameId} DirectFromSearch={DirectFromSearch} />
                {/* Pass selected game ID */}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BetGamesV1;
