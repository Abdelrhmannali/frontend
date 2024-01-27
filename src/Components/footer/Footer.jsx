import React from "react";
import img1 from "../../assets/footer.jpeg";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="heading">
          <h4>Servfix</h4>
          <p>Visit Help Center</p>
        </div>
        <div className="services">
          <h4>Services</h4>
          <div className="links">
            <a href="">Electricity</a>
            <a href="">Smith</a>
            <a href="">Plumbing</a>
            <a href="">Carpontery</a>
            <a href="">Cleanliness</a>
          </div>
        </div>
        <div className="contact">
          <h4>Contact Us</h4>
          <div className="links">
            <a href="">+3040402010204202</a>
            <a href="">+3040402010204202</a>
            <a href="">+3040402010204202</a>
            <a href="">+3040402010204202</a>
            <a href="">+3040402010204202</a>
          </div>
        </div>
        <div className="last">
          <h5>Servifix Application</h5>
          <img
            style={{
              width: "40px ",
              height: "40px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
            src={img1}
            alt="footer"
          />
        </div>
      </div>
      <div className="rights">All rights reserved servifix @2024</div>
    </div>
  );
}

export default Footer;
