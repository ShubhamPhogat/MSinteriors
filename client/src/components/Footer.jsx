import React, { useEffect, useRef } from "react";
import "../styles/Footer.css";

const Footer = () => {
  const logos = [
    { src: "path_to_logo/anchor.png", alt: "Anchor" },
    { src: "path_to_logo/asianpaints.png", alt: "Asian Paints" },
    { src: "path_to_logo/berger.png", alt: "Berger" },
    { src: "path_to_logo/ebco.png", alt: "Ebco" },
    { src: "path_to_logo/elica.png", alt: "Elica" },
    { src: "path_to_logo/hettich.png", alt: "Hettich" },
    { src: "path_to_logo/eglu.png", alt: "Eglu" },
  ];

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;
    const scrollStep = 2;
    const scrollInterval = setInterval(() => {
      scrollAmount += scrollStep;
      scrollContainer.scrollLeft += scrollStep;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
        scrollContainer.scrollLeft = 0;
      }
    }, 20);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="footer">
      <div className="brand-partners">
        <h2>Our Brand Partners</h2>
        <p>An elite list of partners who strengthen our brand promise</p>
        <div className="logos-container" ref={scrollContainerRef}>
          {logos.map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.alt} className="logo" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
