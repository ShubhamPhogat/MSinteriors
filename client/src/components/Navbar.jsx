import React, { useState } from "react";
import "../styles/navbar.css";
import { TiShoppingCart } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { HiOutlineBars4 } from "react-icons/hi2";
import { useAuth } from "../Context/auth";

const Navbar = ({ setScroll }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, isAdmin, logout } = useAuth();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const displayDropdown = () => {
    const ele = document.getElementById("desdrop");
    ele.classList.toggle("show");
    ele.classList.toggle("hide");
  };

  const handleNavItemClick = (path) => {
    navigate(path);
  };

  return (
    <div>
      <div className="main-nav">
        <div onClick={() => handleNavItemClick("/")} className="logo">
          <span>MS</span>interiors
        </div>
        <div className="nav-options hide-mob">
          <ul>
            {!isAdmin && (
              <>
                <li
                  onClick={displayDropdown}
                  className="options hide-mob desIdea"
                >
                  Design idea
                  <span>
                    <IoMdArrowDropdown />
                  </span>
                  <div id="desdrop" className="des_dropdown hide">
                    <ul className="list">
                      <li
                        onClick={() => setScroll("Living Room")}
                        className="list-item"
                      >
                        Living room
                      </li>
                      <li
                        onClick={() => setScroll("Wardrobe")}
                        className="list-item"
                      >
                        Wardrobe
                      </li>
                      <li
                        onClick={() => setScroll("Master Bedroom")}
                        className="list-item"
                      >
                        Bedroom
                      </li>
                      <li
                        onClick={() => setScroll("Modular Kitchen")}
                        className="list-item"
                      >
                        Kitchen
                      </li>
                      <li
                        onClick={() => setScroll("Kids Room")}
                        className="list-item"
                      >
                        Kids Room
                      </li>
                      <li
                        onClick={() => setScroll("Balcony")}
                        className="list-item"
                      >
                        Balcony
                      </li>
                      <li
                        onClick={() => setScroll("Pooja Ghar")}
                        className="list-item"
                      >
                        Pooja Ghar
                      </li>
                      <li
                        onClick={() => setScroll("Living Room")}
                        className="list-item"
                      >
                        Bathroom
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="options hide-mob">trends</li>
                <li className="options hide-mob">guides</li>
                <li
                  onClick={() => handleNavItemClick("/kitchenSizeCalc")}
                  className="options"
                >
                  Kitchen Price calculator
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="store">
          <div className="cart hide-mob">
            <TiShoppingCart />
          </div>
          {isLoggedIn ? (
            <>
              {isAdmin && (
                <div
                  className="profile cart options hide-mob"
                  onClick={() => handleNavItemClick("/admin")}
                >
                  <CgProfile /> Dashboard
                </div>
              )}
              <div className="profile cart options hide-mob" onClick={logout}>
                <CgProfile /> Logout
              </div>
            </>
          ) : (
            <>
              <div
                className="profile cart options hide-mob"
                onClick={() => handleNavItemClick("/login")}
              >
                <CgProfile /> Sign In
              </div>
              <div
                className="sign-up options hide-mob"
                onClick={() => handleNavItemClick("/register")}
              >
                <CgProfile /> Sign Up
              </div>
            </>
          )}
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
          {!isAdmin && (
            <>
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
            </>
          )}
          {isLoggedIn ? (
            <>
              {isAdmin && (
                <li
                  className="sidebar-item"
                  onClick={() => handleNavItemClick("/admin")}
                >
                  Dashboard
                </li>
              )}
              <li className="sidebar-item" onClick={logout}>
                Logout
              </li>
            </>
          ) : (
            <>
              <li
                className="sidebar-item"
                onClick={() => handleNavItemClick("/login")}
              >
                Sign In
              </li>
              <li
                className="sidebar-item"
                onClick={() => handleNavItemClick("/register")}
              >
                Sign Up
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
