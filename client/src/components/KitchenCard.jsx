import React from "react";
import "../styles/KitchenCard.css";
import { useNavigate } from "react-router-dom";
const KitchenCard = ({ image, title, description, detail, vastu }) => {
  const navigate = useNavigate();
  function handleClick(detail, vastu, title) {
    // console.log("kithcen detail", detail, vastu);
    let data = { detail, vastu, title };
    navigate("/KitchenTypeInfo", { state: data });
  }
  return (
    <div className="kitchen-card">
      <img src={image} alt={`${title} layout`} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a onClick={() => handleClick(detail, vastu, title)} href="#">
        Read More →
      </a>
    </div>
  );
};

export default KitchenCard;
