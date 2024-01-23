import React from "react";
import "./AboutUs.css";
import img1 from "../../assets/WhatsApp Image 2024-01-17 at 4.23.42 PM.jpeg";
import img2 from "../../assets/WhatsApp Image 2024-01-17 at 4.23.42 PM (3).jpeg";
import img3 from "../../assets/WhatsApp Image 2024-01-17 at 4.23.42 PM (1).jpeg";
import img5 from "../../assets/WhatsApp Image 2024-01-17 at 4.23.42 PM (2).jpeg";
import img4 from "../../assets/WhatsApp Image 2024-01-17 at 4.23.41 PM (1).jpeg";
import Card from "./Card";
import OtherCard from "./OtherCard";

function AboutUs() {
  return (
    <div className="about">
      <div className="ServicesSection">
        <Card
          img={img1}
          btn={"Electricity"}
          text1={"Preparing all electrical "}
          text2={"faults"}
        />
        <OtherCard
          img={img2}
          btn={"Smith"}
          text1={"Prepare anything related to "}
          text2={"mettal in your home"}
        />
        <Card
          img={img3}
          btn={"Plumping"}
          text1={"Plumping and water problems "}
          text2={"will be fixed"}
        />
        <OtherCard
          img={img4}
          border={true}
          btn={"Carpently"}
          text1={"Fix any carpently problem "}
        />
          <Card
          img={img5}
          btn={"Cleanliness"}
          text1={"The best home "}
          text2={"Cleaning"}
        />
      </div>
    </div>
  );
}

export default AboutUs;
