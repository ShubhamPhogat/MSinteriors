// src/components/SizeSelection.js
import React, { useState } from "react";
import "../styles/SizeSelection.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Lshape, Parallel, Straight, Ushape } from "../assesets";
import { IoMdTrendingUp } from "react-icons/io";

const SizeSelection = () => {
  const [sizeA, setSizeA] = useState({ feet: "", inches: "" });
  const [sizeB, setSizeB] = useState({ feet: "", inches: "" });
  const [sizeC, setSizeC] = useState({ feet: "", inches: "" });
  const location = useLocation();
  const shape = location.state || "";
  const handleSizeChange = (e, setSize) => {
    const { name, value } = e.target;
    setSize((prevState) => ({ ...prevState, [name]: value }));
  };
  const navigate = useNavigate();
  function handleClick() {
    navigate("/kitchenSizeCalc/submitForm", { state: { sizeA, sizeB, sizeC } });
  }
  function GoBack() {
    navigate(-1);
  }
  let imgUrl = "";
  if (shape === "U_Shape") imgUrl = Ushape;
  else if (shape === "L_Shape") imgUrl = Lshape;
  else if (shape === "Straight") imgUrl = Straight;
  else imgUrl = Parallel;

  return (
    <div className="size-selection-container">
      <div className="empty"></div>
      <h2>Enter Size (Length)</h2>
      <div className="size-selection-content">
        <div className="image-and-options">
          <div className="shape_img">
            <img alt="Kitchen Layout" src={imgUrl} className="kitchen-image" />
          </div>
          <div className="inputOptions">
            <div className="option">
              <span className="label">A</span>
              <select
                className="select"
                name="feet"
                onChange={(e) => handleSizeChange(e, setSizeA)}
                value={sizeA.feet}
              >
                <option className="opt" value="">
                  Choose Size (in feet)
                </option>
                <option className="opt" value="1">
                  1 ft
                </option>
                <option className="opt" value="2">
                  2 ft
                </option>
                <option className="opt" value="3">
                  3 ft
                </option>
                {/* Add more options as needed */}
              </select>
              <select
                name="inches"
                className="select"
                onChange={(e) => handleSizeChange(e, setSizeA)}
                value={sizeA.inches}
              >
                <option value="">Choose Size (in inches)</option>
                <option value="1">1 in</option>
                <option value="2">2 in</option>
                <option value="3">3 in</option>
                {/* Add more options as needed */}
              </select>
            </div>
            {shape && shape !== "Straight" ? (
              <div className="option">
                <span className="label">B</span>
                <select
                  className="select"
                  name="feet"
                  onChange={(e) => handleSizeChange(e, setSizeB)}
                  value={sizeA.feet}
                >
                  <option className="opt" value="">
                    Choose Size (in feet)
                  </option>
                  <option className="opt" value="1">
                    1 ft
                  </option>
                  <option className="opt" value="2">
                    2 ft
                  </option>
                  <option className="opt" value="3">
                    3 ft
                  </option>
                  {/* Add more options as needed */}
                </select>
                <select
                  name="inches"
                  className="select"
                  onChange={(e) => handleSizeChange(e, setSizeB)}
                  value={sizeA.inches}
                >
                  <option value="">Choose Size (in inches)</option>
                  <option value="1">1 in</option>
                  <option value="2">2 in</option>
                  <option value="3">3 in</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            ) : (
              <></>
            )}
            {shape && shape === "U_Shape" ? (
              <div className="option">
                <span className="label">C</span>
                <select
                  className="select"
                  name="feet"
                  onChange={(e) => handleSizeChange(e, setSizeC)}
                  value={sizeB.feet}
                >
                  <option value="">Choose Size (in feet)</option>
                  <option value="1">1 ft</option>
                  <option value="2">2 ft</option>
                  <option value="3">3 ft</option>
                  {/* Add more options as needed */}
                </select>
                <select
                  name="inches"
                  className="select"
                  onChange={(e) => handleSizeChange(e, setSizeC)}
                  value={sizeB.inches}
                >
                  <option value="">Choose Size (in inches)</option>
                  <option value="1">1 in</option>
                  <option value="2">2 in</option>
                  <option value="3">3 in</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <div className="buttons">
        <button onClick={GoBack} className="next-button">
          Back
        </button>
        <button onClick={handleClick} className="next-button">
          Next
        </button>
      </div>
    </div>
  );
};

export default SizeSelection;
