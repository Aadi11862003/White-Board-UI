import React from 'react';

const ProfileCardEmpty = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200" style={{ backgroundColor: '#e8e8e8' }}>
      <div className="w-96 h-96 mx-auto bg-gray-100 p-12 rounded-[2.12rem] shadow-custom-top-bottom font-bold-roboto-condensed" style={{ backgroundColor: 'rgb(224, 224, 224)' }}>
        <div className="flex justify-center items-center h-full">
          <input id="checkbox" type="checkbox" className="hidden peer" />
          <label
            htmlFor="checkbox"
            className="relative w-32 h-32 bg-gray-600 rounded-full cursor-pointer flex items-center justify-center border-2 border-gray-400 shadow-inner peer-checked:shadow-[0px_0px_1px_rgb(151,243,255)_inset,0px_0px_2px_rgb(151,243,255)_inset,0px_0px_10px_rgb(151,243,255)_inset,0px_0px_40px_rgb(151,243,255),0px_0px_100px_rgb(151,243,255),0px_0px_5px_rgb(151,243,255)] peer-checked:border-white peer-checked:bg-custom-bg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-16 h-16 peer-checked:filter peer-checked:drop-shadow-[0px_0px_5px_rgb(151,243,255)]"
            >
              <path
                className="fill-current text-gray-700 peer-checked:text-white"
                d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"
              ></path>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProfileCardEmpty;




