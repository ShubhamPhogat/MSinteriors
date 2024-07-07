import React, { useState } from "react";
import "../styles/ImageSection.css"; // Import CSS for styling

// const images = [
//   {
//     src: "balcony1.jpg",
//     description: "Simple Rustic Balcony Design With Wicker Furniture",
//   },
//   {
//     src: "balcony2.jpg",
//     description: "Simple Rustic Balcony Design with a Glass Coffee Table",
//   },
// Add more images as needed
// ];

const ImageSection = ({ src, text, arrInd, items }) => {
  //   console.log("data get", src, text, arrInd, items);
  //   console.log("renderd", Data);
  const [currentIndex, setCurrentIndex] = useState(arrInd);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  return (
    <div className="image-section">
      <img
        src={items[currentIndex].src}
        // src={src}
        alt={items[currentIndex].description}
        className="main-image"
      />
      <div className="image-description">
        {items[currentIndex].text}
        {/* {text} */}
      </div>
      <div className="navigation-buttons">
        <button onClick={handlePrevClick}>Previous Design</button>
        <button onClick={handleNextClick}>Next Design</button>
      </div>
    </div>
  );
};

export default ImageSection;
