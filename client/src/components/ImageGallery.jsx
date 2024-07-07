import React, { useEffect } from "react";
import ImageCard from "./ImageCard";
import "../styles/ImageGallery.css";
import { Logo, bd1, bd2, bd3, kt1, kt2, kt3, pj1, pj2, pj3 } from "../assesets";
const ImageGallery = (props) => {
  console.log("bedroom ->", Logo);
  const images = [
    {
      src: bd1,
      text: "Modern Cosy Living Room",
      type: "Master Bedroom",
      index: 1,
    },
    {
      src: bd2,
      text: "Opulent Art-deco Living Room",
      type: "Master Bedroom",
      index: 2,
    },
    {
      src: bd3,
      index: 3,
      text: "A Living Room Design That Speaks Luxury",
      type: "Master Bedroom",
    },
    {
      src: kt1,
      text: "Living Room Tall Cabinet With Antique Essence",
      type: "Modular Kitchen",
      index: 4,
    },
    {
      src: kt2,
      text: "Modern Living Room Design With Grey Textured Sofa and Yellow Chairs",
      type: "Modular Kitchen",
      index: 5,
    },
    {
      src: kt3,
      text: "Contemporary Living Room Design With Beige and Turquoise U-Shaped Sofa Set",
      type: "Modular Kitchen",
      index: 6,
    },
    {
      src: "https://via.placeholder.com/300",
      text: "Contemporary Living Room Design With Blue Sectional Sofa",
      type: "Balcony",
      index: 7,
    },
    {
      src: "https://via.placeholder.com/300",
      text: "Contemporary Living Room Design With Blue Sectional Sofa",
      type: "Balcony",
      index: 8,
    },
    {
      src: "https://via.placeholder.com/300",
      text: "Contemporary Living Room Design With Blue Sectional Sofa",
      type: "Balcony",
      index: 9,
    },
    {
      src: "https://via.placeholder.com/300",
      text: "Contemporary Living Room Design With Blue Sectional Sofa",
      type: "LivingRoom",
      index: 10,
    },
    {
      src: "https://via.placeholder.com/300",
      text: "Contemporary Living Room Design With Blue Sectional Sofa",
      type: "LivingRoom",
      index: 11,
    },
    {
      src: "https://via.placeholder.com/300",
      text: "Contemporary Living Room Design With Blue Sectional Sofa",
      type: "LivingRoom",
      index: 12,
    },
    {
      src: "https://via.placeholder.com/300",
      text: "Contemporary Living Room Design With Blue Sectional Sofa",
      type: "BathRoom",
      index: 13,
    },
    {
      src: "https://via.placeholder.com/300",
      text: "Contemporary Living Room Design With Blue Sectional Sofa",
      type: "BathRoom",
      index: 14,
    },
    {
      src: "https://via.placeholder.com/300",
      text: "Contemporary Living Room Design With Blue Sectional Sofa",
      type: "BathRoom",
      index: 15,
    },
    {
      src: "https://via.placeholder.com/300",
      text: "Contemporary Living Room Design With Blue Sectional Sofa",
      type: "Kids Room",
      index: 16,
    },
    {
      src: "https://via.placeholder.com/300",
      text: "Contemporary Living Room Design With Blue Sectional Sofa",
      type: "Kids Room",
      index: 17,
    },
    {
      src: "https://via.placeholder.com/300",
      text: "Contemporary Living Room Design With Blue Sectional Sofa",
      type: "Kids Room",
      index: 18,
    },
    {
      src: pj1,
      text: "Contemporary Living Room Design With Blue Sectional Sofa",
      type: "Pooja Ghar",
      index: 19,
    },
    {
      src: pj2,
      text: "Contemporary Living Room Design With Blue Sectional Sofa",
      type: "Pooja Ghar",
      index: 20,
    },
    {
      src: pj3,
      text: "Contemporary Living Room Design With Blue Sectional Sofa",
      type: "Pooja Ghar",
      index: 21,
    },
    {
      src: "https://via.placeholder.com/300",
      text: "Contemporary Living Room Design With Blue Sectional Sofa",
      type: "Wardrobe",
      index: 22,
    },
    {
      src: "https://via.placeholder.com/300",
      text: "Contemporary Living Room Design With Blue Sectional Sofa",
      type: "Wardrobe",
      index: 23,
    },
    {
      src: "https://via.placeholder.com/300",
      text: "Contemporary Living Room Design With Blue Sectional Sofa",
      type: "Wardrobe",
      index: 24,
    },
  ];
  //   console.log(filteredItems);
  console.log("this is des", props.value.item);
  //   let index = 1;
  let filteredItems = images.filter((item) => item.type === props.value.item);

  return (
    <div className="image-gallery">
      {filteredItems.map((image, index) => (
        //   console.log("randering card", image.index),
        <ImageCard
          key={image.index}
          arrInd={index}
          src={image.src}
          items={filteredItems}
          text={image.text}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
