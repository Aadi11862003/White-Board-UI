import React from 'react';

const DownloadButton = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <button className="overflow-hidden w-32 p-2 h-12 bg-black text-white border-2 border-black rounded-md text-xl font-bold cursor-pointer relative z-10 group">
        Hover me!
        <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></span>
        <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></span>
        <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
        <span className="group-hover:opacity-100 duration-1000 opacity-0 absolute top-2.5 left-6 z-10">
          Explore!
        </span>
      </button>
    </div>
  );
};

export default DownloadButton;

