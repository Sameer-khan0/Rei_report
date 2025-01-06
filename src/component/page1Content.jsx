import { useState } from "react";
import "./page1.css";
import {
  FaBed,
  FaBath,
  FaHome,
  FaCalendar,
  FaDollarSign,
  FaWarehouse,
} from "react-icons/fa";
import houseimage from "./utils/houspic.png";

const Page1Content = () => {
  const [selectedSeason, setSelectedSeason] = useState("Annual");
  const [selectedButton, setSelectedButton] = useState("cheapest");

  const contentData = {
    profileTitle: "Home Profile",
    propertyInfo: [
      { icon: <FaBed color="green" className="icon" />, label: "2 Bed" },
      { icon: <FaBath color="green" className="icon" />, label: "3.5 Bath" },
      { icon: <FaHome color="green" className="icon" />, label: "Single Family Property" },
      { icon: <FaCalendar color="green" className="icon" />, label: "1997 Year Built" },
      { icon: <FaDollarSign color="green" className="icon" />, label: "$170 Price/Sqft" },
      { icon: <FaWarehouse color="green" className="icon" />, label: "Wood/Tile/Flat Roof" },
    ],
  };

  const handleSeasonClick = (season) => {
    setSelectedSeason(season);
  };

  const handleButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
  };

  return (
    <div className="container">
      <div className="topContent">
        <div className="profileBox">
          <p className="profileTitle">{contentData.profileTitle}</p>
          <div className="propertyGrid">
            {contentData.propertyInfo.map((item, index) => (
              <div key={index} className="propertyItem">
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          <p className="centerText">Estimated Home Value</p>
          <button className="Fbutton">$456k</button>
        </div>
        <div className="imageBox">
          <img src={houseimage} style={{width:"100%",height:"100%",objectFit:"fill"}} alt="house" />
        </div>
      </div>
      <div className="dropdownsRow">
        <button className="button">Heating and Cooling</button>
        <select className="dropdown">
          <option>Application</option>
          <option>Range</option>
          <option>Clothes Dryer</option>
        </select>
        <select className="dropdown">
          <option>Insulation</option>
          <option>Wall Insulation</option>
          <option>Ceiling Insulation</option>
          <option>Floor Insulation</option>
        </select>
        <button className="button">Windows/Doors</button>
        <button className="button">Water Heater</button>
      </div>
      <div className="buttonRow">
        {["cheapest", "custom", "lowestCarbon"].map((btn) => (
          <button
            key={btn}
            className={`button ${selectedButton === btn ? "selected" : ""}`}
            onClick={() => handleButtonClick(btn)}
          >
            {btn === "cheapest" && "Cheapest Upgrade Option"}
            {btn === "custom" && "REI Custom Recommendation"}
            {btn === "lowestCarbon" && "Lowest Carbon Footprint"}
          </button>
        ))}
      </div>
      <div className="section">
        <div className="subSection">
          {["Summer", "Annual", "Winter"].map((season) => (
            <div
              key={season}
              className={`subItem ${selectedSeason === season ? "selected" : ""}`}
              onClick={() => handleSeasonClick(season)}
            >
              <p className="subItemHeader">{season}</p>
            </div>
          ))}
        </div>
        <div className="subSection">
          {Array.from({ length: 9 }, (_, index) => (
            <div key={index} className="subItem">
              <h3 className="greenText">Feature {index + 1}</h3>
              <p className="grayText">ibe Co2/yr</p>
              <p className="grayText">ibe Co2/yr</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page1Content;
