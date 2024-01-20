import React from "react";
function Card({ img, text1 , text2, btn }) {
  return (
    <div className="card1">
      <img className="imgCard1" src={img}></img>
      <div className="details1">
      <h5 className="heading1">
        Our <span>Services</span>
      </h5>
        <p className="txt1">{text1}</p>
        <p className="txt1">{text2}</p>
        <button className="btn1">{btn}</button>
      </div>
    </div>
  );
}

export default Card;
