import React from 'react';

function Intro({onNavigationClick}) {
  return (
    <div className="bg-white">
      <div className="container mx-auto flex flex-col md:flex-row font-khula py-16 md:py-24 px-6 md:px-8">
        <div className="md:w-2/3 md:pr-12 mb-8 md:mb-0">
          <div className="flex flex-col space-y-6">
            <span className="inline-block px-4 py-1 bg-wine/10 text-wine font-semibold text-sm rounded-full w-fit">ABOUT US</span>
            <h2 className="font-bold text-3xl md:text-4xl text-Navy leading-tight">Columbus United<br />Fencing Club</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              An inclusive historical fencing club located in Columbus, Ohio, Columbus United Fencing Club (CUFC) welcomes fencers of all levels and backgrounds to train in the art of the blade. Whether you want to learn a new skill, improve your fitness, compete in Historical European Martial Arts tournaments, or join a supportive community, you've found the right place.
            </p>
            <div>
              <button 
                onClick={() => onNavigationClick('about')} 
                className="inline-flex items-center px-6 py-3 bg-Navy text-white font-bold rounded-lg transition-all duration-300 hover:bg-Navy/90 hover:scale-105 shadow-md"
              >
                LEARN MORE
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 bg-gray-50 rounded-2xl p-8">
          <h3 className="font-bold text-xl text-Navy mb-6">Disciplines</h3>
          <div className="space-y-4">
            {['Saber', 'Longsword', 'Footwork & Thrusting Weapons'].map((discipline, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="min-w-[8px] h-[8px] mt-2 bg-wine rounded-full shrink-0"></div>
                <span className="text-gray-700 text-lg leading-relaxed">{discipline}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
