import React, { useState } from "react";
import {
  balcony,
  bedroom,
  falseCieling,
  kidsRoom,
  kitchen,
  livingRoom,
  ss1,
  tvUnit,
  wardrobe,
} from "../assesets";
import "../styles/body.css";
import Card from "../components/Card";
import HorizontalScrollMenu from "../components/HorizontalScrollMenu";
import ImageGallery from "../components/ImageGallery.jsx";
const Body = ({ selectedScroll }) => {
  const [Design, setDesign] = useState("Bedroom");

  return (
    <div>
      <div className="img">
        <img src={ss1} />
      </div>
      <div className="features">
        <h1>Interior Design Services Under One Roof</h1>
        <h3>
          From ideation to execution, we offer functional design solutions for
          your home.
        </h3>
        <div className="itemList">
          <div className="cards">
            <Card data={bedroom} text="bedroom" />
          </div>
          <div className="cards">
            <Card data={kidsRoom} text="Kids-Room" />
          </div>
          <div className="cards">
            <Card data={kitchen} text="Kitchen" />
          </div>
          <div className="cards">
            <Card data={livingRoom} text="Living-Room" />
          </div>
          <div className="cards">
            <Card data={balcony} text="Baclony" />
          </div>
          <div className="cards">
            <Card data={falseCieling} text="False-cieling" />
          </div>
          <div className="cards">
            <Card data={tvUnit} text="Tv-Unit" />
          </div>
          <div className="cards">
            <Card data={livingRoom} text="Living-Room" />
          </div>
          <div className="cards">
            <Card data={wardrobe} text="Wardrobe" />
          </div>
        </div>
      </div>
      <div className="scrollBar">
        <h1>Design Ideas for Every Space</h1>
        <h3>Because every corner holds a unique design potential.</h3>
        <HorizontalScrollMenu
          func={setDesign}
          selectedScroll={selectedScroll}
          funcVal={Design}
        />
      </div>
      <div className="imgGallery">
        {/* {console.log("this is des", Design)} */}
        <ImageGallery value={Design} />
      </div>
    </div>
  );
};

export default Body;
