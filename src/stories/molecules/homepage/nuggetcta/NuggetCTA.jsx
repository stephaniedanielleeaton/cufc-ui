import React from 'react';

function NuggetCTA({ onNavigationClick }) {
  return (
    <div className="flex flex-col font-khula bg-DeepRed text-white py-4 px-6">
      <div className="w-full flex items-center justify-center text-center">
        <span className="text-base md:text-lg">
          Beginner's course enrollment is now open! Learn about our start dates{' '}
          <button
            onClick={() => onNavigationClick('startDates')}
            className="underline text-white hover:text-gray-300"
          >
            HERE
          </button>
        </span>
      </div>
    </div>
  );
}

export default NuggetCTA;