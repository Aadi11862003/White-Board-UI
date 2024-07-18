import React from 'react';

const ProfileCardEmpty = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200" style={{ backgroundColor: '#e8e8e8' }}>
      <div className="max-w-xl mx-auto p-12 rounded-[2.12rem] shadow-custom-top-bottom font-roboto-condensed" style={{ backgroundColor: 'rgb(224, 224, 224)' }}>
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Profile</h2> {/* Added Profile title */}
        <div className="flex items-center space-x-8 space-y-6">
          <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center shadow-inner">
            {/* Placeholder for image */}
            <svg
              className="w-16 h-16 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="block w-full px-4 py-2 mt-2 bg-gray-300 border border-gray-400 rounded-[2rem] shadow-inner focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="block w-full mt-2 px-4 py-2 bg-gray-300 border border-gray-400 rounded-[2rem] shadow-inner focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white"
            />
            <textarea
              placeholder="Enter any other information..."
              rows="3"
              className="block w-full mt-2 px-4 py-2 bg-gray-300 border border-gray-400 rounded-[1.5rem] shadow-inner focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCardEmpty;




