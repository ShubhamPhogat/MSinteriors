import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CardStyle.css";
import ImageGallery from "../components/ImageGallery";
import { bd1, bd2, kt1, wardrobeImg } from "../assesets";
const ImageCard = ({ type }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [filteredArray, setFilteredArray] = useState({});

  // useEffect(() => {
  //   setIsLoading(true);
  //   axios
  //     .get("http://localhost:5000/api/images")
  //     .then((response) => {
  //       setData(response.data);
  //       setIsLoading(false);

  //       if (type) {
  //         setFilteredArray(() => {
  //           return data.filter((item) => {
  //             return item.type === type;
  //           });
  //         });
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data: ", error);
  //       setError(error);
  //       setIsLoading(false);
  //     });
  // }, []);

  let filteredArray = [
    {
      id: 34985734,
      src: bd1,
      decription: "good cosy bedroom",
      color: "red",
      finish: "wooden",
      theme: "modern",
    },
    {
      id: 9989734,
      src: bd2,
      decription: "good cosy bedroom 2",
      color: "blue",
      finish: "wooden",
      theme: "luxuary",
    },
    {
      id: 7587578734,
      src: kt1,
      decription: "good cosy kithcen",
      color: "cream",
      finish: "matt",
      theme: "luxuary",
    },
    {
      id: 12111734,
      src: wardrobeImg,
      decription: "good cosy bedroom",
      color: "black",
      finish: "glass",
      theme: "modern",
    },
  ];

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data!</p>;

  return (
    // <div className="card">
    //   <img src={data?.src} alt={data?.description} />
    //   <div className="card-body">
    //     <h5 className="card-title">{data?.description}</h5>
    //     <p className="card-text">Color: {data?.color}</p>
    //     <p className="card-text">Finish: {data?.finish}</p>
    //     <p className="card-text">Theme: {data?.theme}</p>
    //   </div>
    // </div>
    <ImageGallery items={filteredArray} />
  );
};

export default ImageCard;
