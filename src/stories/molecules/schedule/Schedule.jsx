import React from 'react';
function Schedule() {
  return (
    <div className="flex flex-col w-full font-khula bg-Navy px-16 py-8">
      {/* First div */}
      <div className="flex justify-between items-center w-full py-4 mb-8">
        <div>
          <span className="font-bold text-2xl text-white">Class Schedule</span>
        </div>
        <div>
          <button
            className="tracking-wider border-2 border-white text-white text-xs font-bold px-4 py-2 rounded-none md:w-auto hover:bg-white hover:text-black hover:border-black">
            SEE EVENTS
          </button>
        </div>
      </div>

      {/* Second div */}
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/4 flex flex-col">
          <span className="text-LightPink font-bold text-sm mb-2">Saber</span>
          <span className="text-white font-bold text-sm">Monday</span>
          <span className="text-white text-xs font-light">7:00pm - 9:00pm</span>
        </div>
        <div className="w-full md:w-1/4 flex flex-col">
          <span className="text-LightPink font-bold text-sm">Longsword</span>
          <span className="text-LightPink font-bold text-sm mb-2">(Beginner & Open Class)</span>
          <span className="text-white font-bold text-sm">Wednesday</span>
          <span className="text-white text-xs font-light">6:30pm - 8:30pm</span>
        </div>
        <div className="w-full md:w-1/4 flex flex-col">
          <span className="text-LightPink font-bold text-sm mb-2">Footwork, Thrusting & Weapons</span>
          <span className="text-white font-bold text-sm">Thursday</span>
          <span className="text-white text-xs font-light">7:00pm - 9:00pm</span>
        </div>
        <div className="w-full md:w-1/4 flex flex-col">
          <span className="text-LightPink font-bold text-sm mb-2">Open Floor</span>
          <span className="text-white font-bold text-sm">Saturday</span>
          <span className="text-white text-xs font-light">11:00am - 1:00pm</span>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
