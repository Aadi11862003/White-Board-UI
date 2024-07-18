import React from 'react';

const ErrorCard = ({ errorMessage }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200" style={{ backgroundColor: '#e8e8e8' }}>
      <div className="w-[30rem] h-[20rem] mx-auto bg-red-100 p-8 rounded-[2.12rem] shadow-custom-top-bottom flex justify-center items-center text-center" style={{ backgroundColor: 'rgb(224, 224, 224)' }}>
        <div className="text-red-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-12.728 12.728M5.636 5.636l12.728 12.728" />
          </svg>
          <p className="text-xl font-semibold">{errorMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorCard;
