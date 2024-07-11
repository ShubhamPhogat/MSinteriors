import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CardStyle.css'; 
const ImageCard = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios.get('http://localhost:5000/api/images')
      .then(response => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data!</p>;

  return (
    <div className="card">
      <img src={data?.src} alt={data?.description} />
      <div className="card-body">
        <h5 className="card-title">{data?.description}</h5>
        <p className="card-text">Color: {data?.color}</p>
        <p className="card-text">Finish: {data?.finish}</p>
        <p className="card-text">Theme: {data?.theme}</p>
      </div>
    </div>
  );
};

export default ImageCard;
