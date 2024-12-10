import React from 'react';
import backgroundImage from '../../../assets/meyerwatercolor.png';

const Hero = ({ onNavigationClick }) => {
  function renderContent() {
    return (
      <div className="p-4 text-white font-khula relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
          <span className="md:hidden">Columbus's Premier<br />HEMA Club</span>
          <span className="hidden md:inline">Columbus Ohio's<br />Premier HEMA Club</span>
        </h1>
        <button
          className="tracking-wider bg-wine text-white text-lg font-bold px-8 py-3 rounded-lg transition-all duration-300 hover:bg-wine/90 hover:scale-105 shadow-lg"
          onClick={() => onNavigationClick('joinNow')}
        >
          JOIN NOW
        </button>
      </div>
    );
  }

  return (
    <div
      className="min-h-[600px] bg-cover bg-no-repeat relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>

      {/* Large Screen Size */}
      <div className="w-full h-full hidden md:flex">
        <div className="container mx-auto">
          <div className="w-1/2 h-full flex flex-col justify-center p-12 relative z-10">
            {renderContent()}
          </div>
        </div>
      </div>

      {/* Small and Medium Screen Size */}
      <div className="w-full h-full md:hidden">
        <div className="container mx-auto h-full flex flex-col justify-center p-8 relative z-10">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Hero;
