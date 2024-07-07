import React from "react";
import ImageSection from "./ImageSection";
import FormSection from "./FormSection";
import "../styles/Detail.css"; // Import CSS for styling
import { useLocation } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const { src, text, arrInd, key, items } = location.state || {};
  //   console.log("the data we get", Data);
  return (
    <div className="main-layout">
      <div className="empty"></div>
      <ImageSection src={src} text={text} arrInd={arrInd} items={items} />
      <FormSection />
    </div>
  );
};

export default Detail;
