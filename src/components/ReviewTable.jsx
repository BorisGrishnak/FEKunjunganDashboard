import React from 'react';
import { FaStar } from 'react-icons/fa';


function ReviewTable({ value, onRatingChange }) {
  const stars = [1, 2, 3, 4, 5];
     
  return (
    <div className="star-rating" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {stars.map((star, index) => (
        <FaStar
          key={star}
          className={index <= 4 ? 'star-filled' : 'star'}
          onClick={() => onRatingChange(star)}
        />
      ))}
    </div>
  );
}

export default ReviewTable;
