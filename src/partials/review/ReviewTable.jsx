import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';


function ReviewTable({ value, onRatingChange }) {
  const [stars, setStars] = useState([]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (value == 1) {
        setStars([1])
      }
      if (value == 2) {
        setStars([1, 2])
      }
      if (value == 3) {
        setStars([1, 2, 3])
      }
      if (value == 4) {
        setStars([1, 2, 3, 4])
      }
      if (value == 5) {
        setStars([1, 2, 3, 4, 5])
      }
    }, 100);
  return () => clearInterval(interval);
   }, [])
     
  return (
    <div className="star-rating" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {stars.map((star, index) => (
        <FaStar
          key={index}
          className={index <= 4 ? 'star-filled' : 'star'}
        />
      ))}
    </div>
  );
}

export default ReviewTable;
