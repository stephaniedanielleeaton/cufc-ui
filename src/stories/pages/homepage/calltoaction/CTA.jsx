import React from 'react';

function CTA({onNavigationClick}) {
  return (
    <div className="flex flex-col md:flex-row font-khula bg-DeepRed text-white py-12">
      <div className="md:w-2/3 md:mr-4 md:mb-0 mx-16 flex items-center justify-center">
        <span className="font-bold text-2xl my-4 px-4 py-2">Ready to become a member?</span>
      </div>
      <div className="md:w-1/3 flex items-center justify-center md:justify-start mx-16">
        <button
          className="tracking-wider bg-MediumPink text-white text-lg font-bold px-8 py-3 rounded-lg transition-all duration-300 hover:bg-MediumPink/90 hover:scale-105 shadow-lg"
          onClick={() => onNavigationClick('joinNow')}
        >
          JOIN NOW
        </button>
      </div>
    </div>
  );
}

export default CTA;
