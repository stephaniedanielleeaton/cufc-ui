import React from 'react';
import BaseButton from '../button/BaseButton.jsx';

const Hero = () => {
  function renderContent() {
    return (
      <div className="p-4 text-white font-khula">
        <h1 className="text-4xl font-bold leading-16 mb-4">
          Get ready to leap into historical swordsmanship
        </h1>
        <button className="tracking-wider border-2 border-white text-sm font-bold px-4 py-2 rounded-none hover:bg-white hover:text-black hover:border-black"> JOIN NOW </button>
      </div>
    );
  }
  return (
    <div className="h-full p-20 bg-gray-600">
      {/* Large Screen Size */}
      <div className="w-full h-full hidden md:flex">
        <div className="w-1/2 h-full flex flex-col justify-center p-8 items-center">{renderContent()}</div>
      </div>

      {/* Small and Medium Screen Size */}
      <div className="w-full h-full md:hidden">
        <div className="flex flex-col justify-center items-center text-center">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Hero;
