import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { Heading01 } from "../../Components/Headings/Heading01";
import './gamesdesigncard.scss'
import { SpecBetGamesNew } from "../OnlineCasinoGames/betgames/BetGames";

const EvolutionV1 = () => {
  // Define an array of JSON objects
  const dataArray = [
    // {
    //   id: 16,
    //   imageUrl: "/assets/BETGAMES/skyward.webp",
    //   urlparam: 27,
    //   heading: "Heading 3",
    // },
    {
      id: 1,
      imageUrl: "/assets/BETGAMES/wheeloffortune.webp",
      urlparam: 7,
      heading: "Heading 1",
    },
    {
      id: 2,
      imageUrl: "/assets/BETGAMES/dueldice.webp",
      urlparam: 10,
      heading: "Heading 2",
    },
    {
      id: 3,
      imageUrl: "/assets/BETGAMES/lucky5.webp",
      urlparam: 3,
      heading: "Heading 3",
    },
    {
      id: 4,
      imageUrl: "/assets/BETGAMES/lucky6.webp",
      urlparam: 9,
      heading: "Heading 3",
    },
    {
      id: 5,
      imageUrl: "/assets/BETGAMES/lucky7.webp",
      urlparam: 1,
      heading: "Heading 3",
    },
    {
      id: 6,
      imageUrl: "/assets/BETGAMES/speedy7.webp",
      urlparam: 11,
      heading: "Heading 3",
    },
    // {
    //   id: 7,
    //   imageUrl: "/assets/BETGAMES/6pluspoker.webp",
    //   urlparam: 12,
    //   heading: "Heading 3",
    // },
    {
      id: 8,
      imageUrl: "/assets/BETGAMES/warofbets.webp",
      urlparam: 8,
      heading: "Heading 3",
    },
    {
      id: 9,
      imageUrl: "/assets/BETGAMES/betonpoker.webp",
      urlparam: 5,
      heading: "Heading 3",
    },
    {
      id: 10,
      imageUrl: "/assets/BETGAMES/betsonbaraccat.webp",
      urlparam: 6,
      heading: "Heading 3",
    },
    {
      id: 11,
      imageUrl: "/assets/BETGAMES/classicwheelrng.webp",
      urlparam: 16,
      heading: "Heading 3",
    },
    // {
    //   id: 12,
    //   imageUrl: "/assets/BETGAMES/tbasket.webp",
    //   urlparam: 25,
    //   heading: "Heading 3",
    // },
    // {
    //   id: 13,
    //   imageUrl: "/assets/BETGAMES/tkick.webp",
    //   urlparam: 24,
    //   heading: "Heading 3",
    // },
    {
      id: 14,
      imageUrl: "/assets/BETGAMES/footballgrid.webp",
      urlparam: 17,
      heading: "Heading 3",
    },
    {
      id: 15,
      imageUrl: "/assets/BETGAMES/instantlucky7.webp",
      urlparam: 26,
      heading: "Heading 3",
    },

    // {
    //   id: 17,
    //   imageUrl: "/assets/BETGAMES/classicroulette.webp",
    //   urlparam: 27,
    //   heading: 'Heading 3'
    // },
    // {
    //   id: 10,
    // imageUrl: "/assets/BETGAMES/wheeloffortune.webp",
    //   urlparam: 12,
    //   heading: 'Heading 3'
    // },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedGameId, setSelectedGameId] = useState(null);

  const togglePopup = (urlparam) => {
    setSelectedGameId(urlparam); // Set the selected game ID
    setIsOpen(!isOpen);
  };

  return (
    <div id="gamescardssectionc21s" className="c45w56sdc56sdfsdfds">
      {/* <Heading01 /> */}
     <img className="x5s65esdx5" src="/assets/UniqueAssets/comingsoonbanner.png" alt="" /> 
      <div id="gamescardchildren">
        {/* {dataArray.map((data) => (
          <div id="sdjfksdjlkc2023" onClick={() => togglePopup(data.urlparam)}key={data.id} className="card slow_zoom" >
            <div className="staff_image_holder">
              <span className="image">
                <img src={data.imageUrl} alt={`Image ${data.id}`} />
              </span>
            </div>
          </div>
        ))} */}
      </div>

      {isOpen && (
        <div className="popupsdfdselayover" onClick={() => togglePopup(null)}>
          <div
            className="popupcontentxcfsdfjklsd"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              id="crossbtnsjcom3"
              onClick={() => togglePopup(null)}
              className="close-button"
            >
              <RxCross2 />
            </button>
            <SpecBetGamesNew GameId={selectedGameId} />{" "}
          </div>
        </div>
      )}
    </div>
  );
};





export default EvolutionV1
