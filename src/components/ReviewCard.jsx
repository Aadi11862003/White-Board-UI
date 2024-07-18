import React, { useState } from 'react';

const ReviewCard = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200" style={{ backgroundColor: '#e8e8e8' }}>
      <div className="w-[30rem] mx-auto bg-gray-100 p-8 rounded-[2.12rem] shadow-custom-top-bottom font-bold-roboto-condensed" style={{ backgroundColor: 'rgb(224, 224, 224)' }}>
        <div className="rating flex justify-center items-center space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <React.Fragment key={star}>
              <input
                type="radio"
                id={`star${star}`}
                name="rate"
                value={star}
                className="hidden"
                checked={rating === star}
                onChange={() => handleRating(star)}
              />
              <label htmlFor={`star${star}`} title={`${star} star`} className="cursor-pointer">
                <svg
                  viewBox="0 0 576 512"
                  height="2em"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`star-solid fill-current ${
                    rating >= star ? 'text-yellow-500' : 'text-gray-600'
                  } transition duration-300 ease-in-out`}
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                </svg>
              </label>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;



