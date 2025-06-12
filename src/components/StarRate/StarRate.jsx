import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRate = () => {
  const [rating, setRating] = useState(null);
  return (
    <>
      {[...Array(5)].map((star, index) => {
        const currentRate = index + 1;
        return (
          <>
            <label>
              <input
                type="radio"
                value={currentRate}
                onClick={() => setRating(currentRate)}
              />
              <FaStar
                size={30}
                key={index}
                color={currentRate <= rating ? 'gold' : 'grey'}
              />
            </label>
          </>
        );
      })}
    </>
  );
};

export default StarRate;
