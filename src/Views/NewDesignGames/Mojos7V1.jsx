import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
// import { HideScrollOverflow } from "../../Utils/HideScrollOverflow";
import { Heading01 } from "../../Components/Headings/Heading01";
import './gamesdesigncard.scss'
import allgamesdataofpfslw from '../Home/allgamesdataofpfslw.json';
import SevenMojos from "../OnlineCasinoGames/SevenMojos/SevenMojos";

  const Mojos7V1 = ({currentBalance, handleSearchClick , HideScrollOverflow, DirectFromSearch}) => {
  // Define an array of JSON objects











  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGameId, setSelectedGameId] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState("All Games");
  const [filteredGames, setFilteredGames] = useState([]);
  const [filteredGamesx2, setFilteredGamesx2] = useState([]);
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
        game.provider === "7mojosLogo" &&
        game.categories.includes(selectedCategory)
    );
    const filteredx02 = allgamesdataofpfslw.filter(
      (game) =>
        game.provider === "7mojosLogo" &&
      game.categories.includes("Slots Games")
    );

    setFilteredGames(filtered);

    setFilteredGamesx2(filteredx02);
  }, [selectedCategory]);

  useEffect(() => {
    const uniqueCategories = new Set();
    allgamesdataofpfslw.forEach((game) => {
      if (game.provider === "7mojosLogo") {
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


      {/* <div className="x155w6s156w"><img src="/Final_Assets/Icons/Black Jack.svg" alt="" />Black Jack</div> */}
      {/* <div className="x155w6s156w"><img src="/Final_Assets/Icons/Teen Patti.svg" alt="" />Teen Patti</div> */}
      {/* <div className="x155w6s156w"><img src="/Final_Assets/Icons/Crash Games.svg" alt="" />Crash Games</div> */}
    </div>

    <div id="parentscardssectionc21s">
    <div id="gamescardssectionc21s">
      {/* <Heading01 /> */}












      <div className="x485456s58ws45w">
      <h2 className="h2ofx78w65s"><img src="/Final_Assets/Icons/casinoico1.svg" alt="" />Online Casino</h2>
      {/* <h2 className="x3226wsdse"> View All (17) <FaAngleRight /> </h2> */}
      </div>
      <div id="gamescardchildren">
        
              {/* pls apply first filter here only dispaly all games here excluding slots category games */}
        {filteredGames.map((data) => (
          <div id="sdjfksdjlkc2023"  key={data.id} className="" >
            <div className="staff_image_holder">
            <button onClick={() => togglePopup(data.urlparam)}   className="play_button">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
    </button>
              <span className="spanofc15s265wimg" >
                <img className="abs15x5w6532sdf63sdx2" src="/Logos/CompanyLogos/7mojosLogo.png" alt="" />
                <img className="c15s265wimg" src={data.imageUrl} alt={`Image ${data.imageUrl}`} />
              </span>
              <div className="dataofgamex">
                <p className="scksw55x5s">7 Mojos</p>
                <p className="scksw55x5s2">{data.heading}</p>
              </div>
            </div>
          </div>
        ))}
      </div>


























      {selectedCategory === "All Games" && (
        <>
      <div className="x485456s58ws45w">
      <h2 className="h2ofx78w65s"><img src="/Final_Assets/Icons/casinoico1.svg" alt="" />SLOTS GAMES</h2>
      {/* <h2 className="x3226wsdse"> View All (17) <FaAngleRight /> </h2> */}
      </div>
      <div id="gamescardchildren">

              {/* pls apply second filter here only dispaly those games here which have slots category */}
        {filteredGamesx2.map((data) => (
          <div id="sdjfksdjlkc2023"  key={data.id} className="" >
            <div className="staff_image_holder">
            <button onClick={() => togglePopup(data.urlparam)}   className="play_button">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
    </button>
              <span className="spanofc15s265wimg"
              //  id="spanofc15s265wimgx2"
               >
                <img className="abs15x5w6532sdf63sdx2" src="/Logos/CompanyLogos/7mojosLogo.png" alt="" />
                <img className="c15s265wimg" src={data.imageUrl} alt={`Image ${data.imageUrl}`} />
              </span>
              <div className="dataofgamex">
                <p className="scksw55x5s">7 Mojos</p>
                <p className="scksw55x5s2">{data.heading}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </>
      )}
















      {isOpen && (
              <div className="popupsdfdselayover"
              // onClick={() => togglePopup(null)}
              >
      
                    <div className="xs48w5sd3225">
                    <h2 className="h2ofxsfew65s"><img src="/Final_Assets/Icons/casinoico1.svg" alt="" />Online Casino</h2>
                    <h2 className="zx58we65se23s"><img src="/Logos/CompanyLogos/7mojosLogo.png" alt="" /></h2>
                  
                  <div className="s45s52ccrossbsjcom4">
                    
                     <p>Balance: ₹{currentBalance}</p> 
                     <input readOnly type="text" placeholder="Search Games"  onClick={() => { handleSearchClick(true); HideScrollOverflow(true); } }/>
                    <button id="crossbtnsjcom3" onClick={() => togglePopup(null)} className="close-button"><RxCross2 />
                    </button></div>
                    </div>
                <div className="popupcontentxcfsdfjklsd" onClick={(e) => e.stopPropagation()}>
      
                  <SevenMojos GameId={selectedGameId} />{" "}
                  {/* Pass selected game ID */}
                </div>
              </div>
      )}
    </div>
    </div>
    </>
  );
};



export default Mojos7V1