import React from "react";
import { Heading01 } from "../../../Components/Headings/Heading01";
import { Link } from "react-router-dom";
import Heading02 from "../../../Components/Headings/Heading02";

const Comp04 = () => {
  const dataArray = [
    {
      id: 1,
      imageUrl: "/assets/bronzecardimg.webp",
      heading: "Bronze Level",
      className: "bronzelevelrev",
      desc: "0 TO 1 LAKH",
    },
    {
      id: 2,
      imageUrl: "/assets/silvercardimglevel.webp",
      heading: "Silver Level",
      className: "silverlevelrev",
      desc: "1 LAKH TO 5 LAKH",
    },
    {
      id: 3,
      imageUrl: "/assets/goldcardlevel.webp",
      heading: "Gold Level",
      className: "goldlevelrev",
      desc: "5 LAKH TO 10 LAKH",
    },
    {
      id: 4,
      imageUrl: "/assets/titancardlevel.webp",
      heading: "Titan Level",
      className: "Titanlevelrev",
      desc: "10 LAKH TO 25 LAKH",
    },
    {
      id: 5,
      imageUrl: "/assets/platinumcardlevel.webp",
      heading: "Diamond Level",
      className: "Diamondlevelrev",
      desc: "25 Lakh TO 1 Crore",
    },
  ];
  return (
    <div id="compo04">
      {/* <Heading02 heading02val={"LOYALTY"} /> */}
      <h2 className="sdc5w5ch3adfkls4">LOYALTY</h2>

      <div id="loayltycards">
        {dataArray.map((data) => (
          <div key={data.id} className={`card ${data.className}`}>
            <div className={`img-cont ${data.className}`}>
              {/* <span className="drop-down-window">See Your Level</span> */}
              <img className="img" src={data.imageUrl} alt={`Image ${data.id}`} />
            </div>
            <div className="content-cont">
              <span className="card-header">{data.heading}</span>
              <span className="card-body">{data.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comp04;
