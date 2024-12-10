import React from 'react';

function NuggetCTA({ onNavigationClick }) {
  return (
    <div className="bg-MediumPink">
      <div className="container mx-auto py-4 px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          <div className="text-white font-medium text-center sm:text-left">
            Beginner's course enrollment is now open!
          </div>
          <button
            onClick={() => onNavigationClick('intro')}
            className="inline-flex items-center px-6 py-2 bg-white text-MediumPink font-bold rounded-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105 text-sm"
          >
            View Start Dates
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NuggetCTA;
