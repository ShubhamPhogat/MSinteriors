// src/ModularKitchenCalculator.jsx
import React, { useState } from "react";
import "../styles/ModularKitchenCalculator.css";
import { useNavigate } from "react-router-dom";

const kitchenShapes = [
  {
    name: "L_Shape",
    description:
      "Efficient and flexible, L-shaped kitchens are perfect for modern homes. They offer practical working space and maximise storage while facilitating free-flow movement.",
    image: "l-shape.png", // replace with the actual path to your image
    index: 1,
  },
  {
    name: "U_Shape",
    description:
      "U-shaped kitchens provide ergonomic and effective designs with ample counter space and streamlined cabinetry. This creates organized work zones for medium and spacious kitchens.",
    image: "u-shape.png",
    index: 2,
  },
  {
    name: "Straight",
    description:
      "Straight kitchens are a linear arrangement of countertops, cabinets, and appliances along a single wall. They save space and highlight functionality, ideal for condominiums or studio apartments.",
    image: "straight.png",
    index: 3,
  },
  {
    name: "Parallel",
    description:
      "Smart and practical, Parallel kitchens have two countertops facing each other that create a coherent workflow, profuse storage, and offer increased customizability.",
    image: "parallel.png",
    index: 4,
  },
];

const ModularKitchenCalculator = () => {
  const [selectedShape, setSelectedShape] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const handleShapeSelect = (shape) => {
    setSelectedShape(shape);
  };

  const handleNextStep = () => {
    const url = `./${selectedShape}`;
    navigate(url, { state: selectedShape });
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className="calculator-container">
      <div className="empty"></div>
      <div className="steps-indicator">
        <span className={`step ${currentStep === 1 ? "active" : ""}`}>1</span>
        <span className={`step ${currentStep === 2 ? "active" : ""}`}>2</span>
        <span className={`step ${currentStep === 3 ? "active" : ""}`}>3</span>
      </div>

      <h1
        className="heading
      "
      >
        Please Select Shape of your Kitchen
      </h1>

      <div className="shapes-container">
        {kitchenShapes.map((shape, index) => (
          <div
            key={index}
            className={`shape-card ${
              selectedShape === shape.name ? "selected" : ""
            }`}
            onClick={() => handleShapeSelect(shape.name)}
          >
            <img src={shape.image} alt={shape.name} className="shape-image" />
            <h3>{shape.name}</h3>
            <p>{shape.description}</p>
            <input
              type="radio"
              name="shape"
              checked={selectedShape === shape.name}
              onChange={() => handleShapeSelect(shape.name)}
            />
          </div>
        ))}
      </div>

      <button className="next-button" onClick={handleNextStep}>
        Next &rarr;
      </button>
    </div>
  );
};

export default ModularKitchenCalculator;
