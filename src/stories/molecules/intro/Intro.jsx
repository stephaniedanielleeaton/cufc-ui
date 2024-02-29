import React from 'react';

function Intro() {
  return (
    <div className="flex flex-col md:flex-row font-khula py-16">
      <div className="md:w-2/3 md:mr-4 md:mb-0 mx-16">
        <div className="flex flex-col space-y-4">
          <span className="font-extrabold text-xs text-DeepRed">ABOUT US</span>
          <h2 className="font-bold text-2xl text-Navy">Columbus United Fencing Club</h2>
          <span className="font-light text-sm">
            An inclusive historical fencing club located in Columbus, Ohio, Columbus United Fencing Club welcomes fencers of all levels and backgrounds to train in the art of the blade. Whether you want to learn a new skill, improve your fitness, compete in Historical European Martial Arts tournaments, or join a supportive community, you've found the right place.
          </span>
        </div>
        <button className="tracking-wider border-2 border-black text-sm font-bold my-4 px-4 py-2 rounded-none md:w-auto hover:bg-black hover:text-white hover:border-white">
          LEARN MORE
        </button>
      </div>
      <div className="md:w-1/3 flex items-center mx-16">
        <div>
          <p className="font-bold text-Navy">Disciplines</p>
          <ul className="list-disc pl-4 font-light text-sm">
            <li>Saber</li>
            <li>Longsword</li>
            <li>Footwork & Thrusting Weapons</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Intro;
