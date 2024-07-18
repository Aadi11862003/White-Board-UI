import React from 'react';

const InputCard = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200" style={{ backgroundColor: '#e8e8e8' }}>
      <div className="w-96 mx-auto bg-gray-100 p-8 rounded-[2.12rem] shadow-custom-top-bottom font-bold-roboto-condensed" style={{ backgroundColor: 'rgb(224, 224, 224)' }}>
        <div className="flex justify-center items-center">
          <input
            placeholder="Username"
            type="text"
            className="block w-full px-4 py-2 mt-2 bg-transparent border-2 border-transparent border-b-gray-500 outline-none text-gray-900 focus:border-blue-300 hover:border-blue-300 rounded-xl focus:placeholder-opacity-0 transition-all duration-300"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default InputCard;
