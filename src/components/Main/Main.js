import React from "react";
import "./Main.css";
import add from "../../images/add.png";
import ResponsiveSlider from "../slider/Slider";

const Main = () => {
  return (
    <div className="mainContainer">
      <div className="upperContainer">
        <div className="balanceContainer">
          <span>Available balance</span> <br />
          <h6 className="Symbol">S$</h6> <h4 className="amount"> 3,000</h4>
        </div>
        <div></div>
       
      </div>
        <ul className="unorderlist">
            <li>My debit cards </li>
            <li> All company cards </li>
        </ul>
    <div className="cardContainer">
        {/* <span>Show card number</span> */}
       <div className="card">
       <ResponsiveSlider />
       </div>
      
    </div>

     
    </div>
  );
};

export default Main;
