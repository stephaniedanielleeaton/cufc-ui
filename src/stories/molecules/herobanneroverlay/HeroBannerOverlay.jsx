import React from 'react';
import BaseButton from '../button/BaseButton.jsx';

const HeroBannerOverlay = () => {
  function renderContent() {
    return (
      <>
        <h1 className="text-white text-4xl font-poppins font-bold leading-relaxed text-center">
          Get ready to leap into Historical Swordsmanship
        </h1>
        <p className="text-white text-s text-center mb-4">
          We have everything you need to start doing historical martial arts while fencing against a lynx
        </p>
        <BaseButton className="px-2 mt-4" text={'Sign Up'} color={'transparentDeepBlue'} border={'white'} size={'sm'} />
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
