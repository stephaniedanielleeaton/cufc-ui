import React from 'react';

const HeroBannerOverlay = () => {
  function renderContent() {
    return (
      <>
        <h1 className="text-white text-4xl font-poppins font-bold leading-relaxed text-center">
          Get ready to leap into Historical Swordsmanship
        </h1>
        <p className="text-white text-s text-center">
          We have everything you need to start doing historical martial arts while fencing against a lynx
        </p>
        <button className="bg-white text-blue-900 px-4 py-2 mt-4 rounded">
          Your Button
        </button>
      </>
    );
  }
  return (
    <div>
      {/* Large Screen Size */}
      <div className="w-full h-80vh bg-gradient-to-r from-deepSeaBlue to-transparent hidden lg:flex">
        <div className="w-1/2 h-full flex flex-col justify-center p-8 items-center">
          {renderContent()}
        </div>
      </div>

      {/* Small and Medium Screen Size */}
      <div className="w-full h-80vh bg-gradient-to-b from-deepSeaBlue to-transparent lg:hidden">
        <div className="flex flex-col justify-center items-center">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default HeroBannerOverlay;
