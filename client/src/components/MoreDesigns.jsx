import React, { useState } from "react";
import "../styles/MoreDesigns.css";
import Card from "./Card";
import ImageCard from "./ImageCard";
const MoreDesigns = ({ array }) => {
  const [color, setColor] = useState(null);
  const [finish, setFinish] = useState(null);
  const [theme, setTheme] = useState(null);
  const [fileterdArray, setFilteredArray] = useState(array);

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleFinishChange = (event) => {
    setFinish(event.target.value);
  };

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected Values:", { color, finish, theme });
    setFilteredArray((prevArray) => {
      return prevArray.filter((item) => {
        return (
          (color ? item.color === color : true) &&
          (finish ? item.finish === finish : true) &&
          (theme ? item.theme === theme : true)
        );
      });
    });
  };

  return (
    <div className="DesingContainer">
      <h1>More Related Designs For You</h1>

      <form className="filters-container" onSubmit={handleSubmit}>
        <div className="filterOptions">
          <div className="filter">
            <label htmlFor="color">Color:</label>
            <select
              id="color"
              name="color"
              value={color}
              onChange={handleColorChange}
            >
              <option value="">Select Color</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
              <option value="black">Black</option>
            </select>
          </div>

          <div className="filter">
            <label htmlFor="finish">Finish:</label>
            <select
              id="finish"
              name="finish"
              value={finish}
              onChange={handleFinishChange}
            >
              <option value="">Select Finish</option>
              <option value="marble">Marble</option>
              <option value="wood">Wood</option>
              <option value="glassy">Glassy</option>
              <option value="matte">Matte</option>
            </select>
          </div>

          <div className="filter">
            <label htmlFor="theme">Theme:</label>
            <select
              id="theme"
              name="theme"
              value={theme}
              onChange={handleThemeChange}
            >
              <option value="">Select Theme</option>
              <option value="traditional">Traditional</option>
              <option value="contemporary">Contemporary</option>
              <option value="luxury">Luxury</option>
              <option value="modern">Modern</option>
            </select>
          </div>

          <button className="submitBtn" type="submit">
            Apply
          </button>
        </div>
      </form>

      <div className="relatedOptions">
        {fileterdArray.map((item, index) => (
          <ImageCard
            key={index}
            arrInd={index}
            src={item.src}
            text={item.text}
            items={fileterdArray}
          />
        ))}
      </div>
    </div>
  );
};

export default MoreDesigns;
