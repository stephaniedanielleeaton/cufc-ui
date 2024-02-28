import React from 'react';

function Schedule() {
  return (
    <div className="flex flex-col w-full font-khula bg-Navy px-16">
      {/* First div */}
      <div className="flex justify-between items-center w-full py-4">
        <div>
          <span className="font-bold text-2xl text-white">Class Schedule</span>
        </div>
        <div>
          <button
            className="tracking-wider border-2 border-white text-white text-sm font-bold px-4 py-2 rounded-none md:w-auto hover:bg-white hover:text-black hover:border-black">
            SEE EVENTS
          </button>
        </div>
      </div>

      {/* Second div */}
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/4 bg-gray-200">Column 1</div>
        <div className="w-full md:w-1/4 bg-gray-300">Column 2</div>
        <div className="w-full md:w-1/4 bg-gray-400">Column 3</div>
        <div className="w-full md:w-1/4 bg-gray-500">Column 4</div>
      </div>
    </div>
  );
}

export default Schedule;
