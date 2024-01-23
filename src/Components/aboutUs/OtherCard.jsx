import React from "react";
function OtherCard({ img, text1, text2, btn, border }) {
  return (
    <div className="card1" style={{backgroundColor:'rgba(51, 102, 153, 0.1)'}}>
      <div className="details1">
        <h5 className="heading1">
          Our <span>Services</span>
        </h5>
        <p className="txt1">{text1}</p>
        <p className="txt1">{text2}</p>
        <button className="btn1">{btn}</button>
        </div>
      <img
        className="imgCard1"
        style={{ borderRadius: border ? "50%" : "0" }}
        src={img}
        alt="description"
      />
    </div>
  );
}

export default OtherCard;
