import React from 'react';

export const Header = () => {
  return (
    <div className="relative h-[220px] p-5 bg-gradient-to-b from-blue-600 to-blue-500">
      <button 
        className="absolute text-[#212129] font-bold text-sm bg-white px-5 py-2 rounded-[20px] right-5 top-5 hover:bg-gray-100 transition-colors"
      >
        Log In
      </button>
      <div className="text-white tracking-[6px] text-center pt-5 font-medium">
        ScoutElite
      </div>
    </div>
  );
};