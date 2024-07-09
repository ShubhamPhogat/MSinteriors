import React from "react";
import "../styles/FooterBottomSection.css";

const FooterBottomSection = () => {
  return (
    <footer className="footer">
      <div className="top-section">
        <div className="guarantee">
          <h4>Lowest Price Guaranteed</h4>
          <p>
            No false claims. You get what you see. Lowest Price Guaranteed on
            home interiors.
          </p>
        </div>
        <div className="delivery">
          <h4>Timely Delivery Assurance</h4>
          <p>
            Promised Timeline = Actual Date of Delivery. We strictly follow the
            timelines promised to you.
          </p>
        </div>
        <div className="emi">
          <h4>No Cost EMI Option Available Up to 10 Lacs**</h4>
          <p>Get in touch with our designers to know more...</p>
        </div>
      </div>
      <div className="bottom-section">
        <div className="logo">
          <img src="path_to_logo/interior-company-logo.png" alt="MSinteriors" />
        </div>
        <div className="links">
          <div className="column">
            <h4>Overview</h4>
            <ul>
              <li>Interior Designer</li>
              <li>Trends</li>
            </ul>
          </div>
          <div className="column">
            <h4>Network Sites</h4>
            <ul>
              <li>Square Yards India</li>
              <li>Prop VR</li>
              <li>Prop AMC</li>
              <li>Square Yards UAE</li>
              <li>Square Yards Canada</li>
              <li>Urban Money</li>
              <li>UM Oceania</li>
            </ul>
          </div>
          <div className="column">
            <h4>Contact Us</h4>
            <ul>
              <li>Call us on, toll free no. 1800 208 3344</li>
              <li>Write to us at MSinteriorArts.com</li>
            </ul>
          </div>
          <div className="column">
            <h4>Address</h4>
            <address>
              3B, Rajendra Nagar, Pusa Road, <br />
              New Delhi, Central Delhi DL <br />
              110060 IN
            </address>
          </div>
          <div className="column">
            <h4>Interior</h4>
            <ul>
              <li>FAQs</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="column">
            <h4>More</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Contact Us</li>
              <li>Lending Partners</li>
              <li>Refer And Earn</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="column">
            <h4>Keep in Touch</h4>
            <div className="social-media">
              <a href="#">
                <img src="path_to_social_icon/facebook.png" alt="Facebook" />
              </a>
              <a href="#">
                <img src="path_to_social_icon/instagram.png" alt="Instagram" />
              </a>
              <a href="#">
                <img src="path_to_social_icon/linkedin.png" alt="LinkedIn" />
              </a>
              <a href="#">
                <img src="path_to_social_icon/pinterest.png" alt="Pinterest" />
              </a>
              <a href="#">
                <img src="path_to_social_icon/youtube.png" alt="YouTube" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBottomSection;