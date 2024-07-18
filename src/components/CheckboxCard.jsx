import React, { useState } from 'react';

const CheckboxCard = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200" style={{ backgroundColor: '#e8e8e8' }}>
      <div className="w-[30rem] h-[20rem] mx-auto bg-gray-100 p-8 rounded-[2.12rem] shadow-custom-top-bottom flex justify-center items-center" style={{ backgroundColor: 'rgb(224, 224, 224)' }}>
        <label className="container relative flex justify-center items-center">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="absolute opacity-0 cursor-pointer h-0 w-0"
          />
          <div className={`checkmark w-[50px] h-[50px] ${isChecked ? 'bg-[#191A1E]' : 'bg-red-600'} rounded-full cursor-pointer p-[5px] text-white ${isChecked ? 'shadow-inset-active' : 'shadow-active'}`}>
            {isChecked ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-full h-full opacity-100 transition-opacity ease-linear duration-300" viewBox="0 0 512 512">
                <title>Checkmark</title>
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M416 128L192 384l-96-96"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-full h-full opacity-100 transition-opacity ease-linear duration-300" viewBox="0 0 512 512">
                <title>Cross</title>
                <line x1="368" y1="368" x2="144" y2="144" stroke="currentColor" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round"></line>
                <line x1="368" y1="144" x2="144" y2="368" stroke="currentColor" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round"></line>
              </svg>
            )}
          </div>
        </label>
      </div>
    </div>
  );
};

export default CheckboxCard;



