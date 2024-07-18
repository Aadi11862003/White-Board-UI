import React from 'react';

const LoadingCard = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="max-w-md mx-auto bg-gray-100 p-8 rounded-[2rem] shadow-custom-top-bottom font-roboto-condensed" style={{ backgroundColor: 'rgb(224, 224, 224)' }}>
        <h2 className="text-xl font-bold mb-4 text-center">Loading...</h2>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 mx-auto"></div>
        <p className="text-gray-500 mt-4 text-center">Please wait while we load...</p>
      </div>
    </div>
  );
};

export default LoadingCard;

