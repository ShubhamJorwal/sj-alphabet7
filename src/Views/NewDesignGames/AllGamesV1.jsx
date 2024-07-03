import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { Heading01 } from "../../Components/Headings/Heading01";
import './gamesdesigncard.scss';
import { SpecBetGamesNew } from "../OnlineCasinoGames/betgames/BetGames";
import { FaAngleRight } from "react-icons/fa";
import allgamesdataofpfslw from '../Home/allgamesdataofpfslw.json';

const AllGamesV1 = ({ currentBalance, handleSearchClick, HideScrollOverflow }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGameId, setSelectedGameId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All Games");

  const togglePopup = (urlparam) => {
    setSelectedGameId(urlparam); // Set the selected game ID
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    HideScrollOverflow(isOpen);

    // Cleanup function
    return () => {
      HideScrollOverflow(false);
    };
  }, [isOpen]);

  const uniqueCategories = [
    ...new Set(allgamesdataofpfslw.flatMap(game => game.categories))
  ];

  const filteredGames = allgamesdataofpfslw.filter(game =>
    game.categories.includes(selectedCategory)
  );

  return (
    <>
      <div className="sec45x9wjklca5w">
        {uniqueCategories.map(category => (
          <div
            key={category}
            className={`x155w6s156w ${selectedCategory === category ? 'activec18s' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            <img src={`/Final_Assets/Icons/${category.replace(/\s+/g, '')}.svg`} alt="" />
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
                    <img className="abs15x5w6532sdf63sd" src={`/Logos/CompanyLogos/${data.provider}.png`} alt="" />
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
                  <img src="/Final_Assets/Icons/casinoico1.svg" alt="" />
                  Online Casino
                </h2>
                <h2 className="zx58we65se23s">
                  <img src="/Logos/CompanyLogos/betgames.png" alt="" />
                </h2>
                <div className="s45s52ccrossbsjcom4">
                  <p>Balance: ₹{currentBalance}</p>
                  <input readOnly type="text" placeholder="Search Games" onClick={() => { handleSearchClick(true); HideScrollOverflow(true); }} />
                  <button id="crossbtnsjcom3" onClick={() => togglePopup(null)} className="close-button"><RxCross2 /></button>
                </div>
              </div>
              <div className="popupcontentxcfsdfjklsd" onClick={(e) => e.stopPropagation()}>
                <SpecBetGamesNew GameId={selectedGameId} />{" "}
                {/* Pass selected game ID */}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AllGamesV1;
