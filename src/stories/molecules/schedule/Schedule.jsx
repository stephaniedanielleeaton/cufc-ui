import React from 'react';
function Schedule() {
  return (
    <div className="w-full font-khula bg-Navy px-20 py-8">
      {/* First div */}
      <div className="flex justify-between items-center w-full py-4 mb-6">
        <div>
          <span className="font-bold text-2xl text-white px-4">Class Schedule</span>
        </div>
        <div>
          {/*<button*/}
          {/*  className="tracking-wider border-2 border-white text-white text-xs font-bold px-4 py-2 rounded-none md:w-auto hover:bg-white hover:text-black hover:border-black">*/}
          {/*  SEE EVENTS*/}
          {/*</button>*/}
        </div>
      </div>

      {/* Schedule Entries */}
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="flex flex-col p-4 rounded-lg md:bg-transparent bg-gray-600">
          <span className="text-LightPink font-bold text-sm mb-1">Saber</span>
          <span className="text-white font-bold text-sm">Monday</span>
          <span className="text-white text-xs font-light">7:00pm - 9:00pm</span>
        </div>
        <div className="flex flex-col p-4 rounded-lg md:bg-transparent bg-gray-600">
          <span className="text-LightPink font-bold text-sm mb-1">Longsword</span>
          <span className="text-LightPink font-bold text-sm mb-1">(Beginner & Open Class)</span>
          <span className="text-white font-bold text-sm">Wednesday</span>
          <span className="text-white text-xs font-light">6:30pm - 8:30pm</span>
        </div>
        <div className="flex flex-col p-4 rounded-lg md:bg-transparent bg-gray-600">
          <span className="text-LightPink font-bold text-sm mb-1">Footwork, Thrusting & Weapons</span>
          <span className="text-white font-bold text-sm">Thursday</span>
          <span className="text-white text-xs font-light">7:00pm - 9:00pm</span>
        </div>
        <div className="flex flex-col p-4 rounded-lg md:bg-transparent bg-gray-600">
          <span className="text-LightPink font-bold text-sm mb-1">Open Floor</span>
          <span className="text-white font-bold text-sm">Saturday</span>
          <span className="text-white text-xs font-light">11:00am - 1:00pm</span>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
