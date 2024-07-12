import React from "react";
import "../styles/ImageCard.css";
import { useNavigate } from "react-router-dom";

const ImageCard = ({ src, text, key, items, arrInd }) => {
  const navigate = useNavigate();
  function renderForm() {
    const url = `/imgView/${key}`;
    console.log(key, "key");
    const Data = { src: src, text: text, items: items, arrInd: arrInd };
    // console.log("the data to sned", Data);
    navigate(url, { state: { src, text, key, items, arrInd } });
  }
  return (
    <div onClick={() => renderForm()} className="image-card">
      <img src={src} alt={text} id={key} className="image-card-img" />
      <div className="image-card-overlay">
        <div className="image-card-text">{text}</div>
      </div>
    </div>
  );
};

export default ImageCard;
