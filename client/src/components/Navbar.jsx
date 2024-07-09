import React, { useState } from "react";
import "../styles/navbar.css";
import { TiShoppingCart } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";
import { json, useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { HiOutlineBars4 } from "react-icons/hi2";

const Navbar = ({ setScroll }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  function displayDropdown() {
    var ele = document.getElementById("desdrop");
    ele.classList.toggle("show");
    ele.classList.toggle("hide");
    console.dir(ele);
  }

  function handleCLick() {
    navigate("/kitchenSizeCalc");
  }

  function naviToHome() {
    navigate("/");
  }

  function skipToMain(data) {
    const ele = document.getElementById("scrollBar");
    localStorage.setItem("selectedItem", JSON.stringify(data));
    setScroll(data);
    ele.scrollIntoView({ behavior: "smooth" });
  }

  function handleSignIn() {
    navigate("/login");
  }

  function handleSignUp() {
    navigate("/register");
  }

  function goToGuide() {
    navigate("/kitchenGuide");
  }

  return (
    <div>
      <div className="main-nav">
        <div onClick={naviToHome} className="logo">
          <span>MS</span>interiors
        </div>
        <div className="nav-options hide-mob">
          <ul>
            <li onClick={displayDropdown} className="options hide-mob desIdea ">
              Design idea
              <span>
                <IoMdArrowDropdown />
              </span>
              <div id="desdrop" className="des_dropdown hide">
                <ul className="list">
                  <li
                    onClick={() => skipToMain("Living Room")}
                    className="list-item"
                  >
                    Living room
                  </li>
                  <li
                    onClick={() => skipToMain("Wardrobe")}
                    className="list-item"
                  >
                    Wardrobe
                  </li>
                  <li
                    onClick={() => skipToMain("Master Bedroom")}
                    className="list-item"
                  >
                    Bedroom
                  </li>
                  <li
                    onClick={() => skipToMain("Modular Kitchen")}
                    className="list-item"
                  >
                    Kitchen
                  </li>
                  <li
                    onClick={() => skipToMain("Kids Room")}
                    className="list-item"
                  >
                    Kids Room
                  </li>
                  <li
                    onClick={() => skipToMain("Balcony")}
                    className="list-item"
                  >
                    Balcony
                  </li>
                  <li
                    onClick={() => skipToMain("Pooja Ghar")}
                    className="list-item"
                  >
                    Pooja Ghar
                  </li>
                  <li
                    onClick={() => skipToMain("Living Room")}
                    className="list-item"
                  >
                    Bathroom
                  </li>
                </ul>
              </div>
            </li>
            <li className="options hide-mob">trends</li>
            <li onClick={goToGuide} className="options hide-mob">
              guides
            </li>
            <li onClick={handleCLick} className="options">
              Kitchen Price calculator
            </li>
          </ul>
        </div>
        <div className="store">
          <div className="cart hide-mob">
            <TiShoppingCart />
          </div>
          <div className="profile cart options hide-mob" onClick={handleSignIn}>
            <CgProfile /> Sign In
          </div>
          <div className="sign-up options hide-mob" onClick={handleSignUp}>
            <CgProfile /> Sign Up
          </div>
          <div onClick={toggleSidebar} className="toggleIcon">
            <HiOutlineBars4 />
          </div>
        </div>
      </div>

      {/* ***********mob-nav*********** */}

      <div id="mob-nav" className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          <RxCross1 />
        </button>

        <ul>
          <li className="sidebar-item">
            <a href="#design-ideas">Design Ideas</a>
          </li>
          <li className="sidebar-item">
            <a href="#trends">Trends</a>
          </li>
          <li className="sidebar-item">
            <a href="#guides">Guides</a>
          </li>
          <li className="sidebar-item">
            <a href="#kitchen-calculator">Kitchen Calculator</a>
          </li>
          <li className="sidebar-item" onClick={handleSignIn}>
            Sign In
          </li>
          <li className="sidebar-item" onClick={handleSignUp}>
            Sign Up
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
