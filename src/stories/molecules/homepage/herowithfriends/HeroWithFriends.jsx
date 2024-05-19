import React from 'react';
import backgroundImage from '../../../assets/meyerwatercolor.png';

const HeroWithFriends = ({onNavigationClick}) => {
  function renderContent() {
    return (
      <div className="p-4 text-white font-khula relative z-10">
        <h1 className="text-4xl font-bold leading-16 mb-4">Get ready to leap into historical swordsmanship</h1>
        <button className="tracking-wider border-2 border-white text-sm font-bold px-4 py-2 rounded-none hover:bg-white hover:text-black hover:border-black" onClick={() => onNavigationClick('joinNow')}> JOIN NOW </button>
      </div>
    );
  }

  return (
    <div className="h-full p-20 bg-cover bg-no-repeat relative" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: '25% 25%' }}>
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Large Screen Size */}
      <div className="w-full h-full hidden md:flex">
        <div className="w-1/2 h-full flex flex-col justify-center p-8 items-center relative z-10">{renderContent()}</div>
      </div>

      {/* Small and Medium Screen Size */}
      <div className="w-full h-full md:hidden">
        <div className="flex flex-col justify-center items-center text-center relative z-10">{renderContent()}</div>
      </div>
    </div>
  );
};

export default HeroWithFriends;
