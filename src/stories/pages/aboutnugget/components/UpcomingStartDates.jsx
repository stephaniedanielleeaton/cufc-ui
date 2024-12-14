import React from 'react';
import PropTypes from 'prop-types';

function UpcomingStartDates({ onNavigationClick }) {
  return (
    <section className="m-4 md:m-8 bg-gray-50 p-4 md:p-8 rounded-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-Navy mb-6">Upcoming Start Dates for New Fencers</h2>
      <div className="space-y-6 md:space-y-8">
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
          <div className="flex flex-wrap items-start gap-2 mb-3">
            <span className="text-lg md:text-xl font-bold text-Navy">January 9th, 2025</span>
            <span className="text-wine px-3 py-1 bg-wine/10 rounded-full text-sm">Thursday evenings</span>
          </div>
          <div className="pl-4 border-l-2 border-wine/30">
            <p className="text-gray-700">Meeting every Thursday at 7:00pm for four weeks</p>
            <p className="text-Navy font-medium mb-4">Fundamentals of HEMA through Rapier</p>
            <button
              onClick={() => onNavigationClick('joinNow')}
              className="px-4 py-2 bg-Navy text-white rounded-lg hover:bg-Navy/90 transition-colors font-semibold text-sm flex items-center gap-2"
            >
              Enroll Here
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
          <div className="flex flex-wrap items-start gap-2 mb-3">
            <span className="text-lg md:text-xl font-bold text-Navy">February 22nd, 2025</span>
            <span className="text-wine px-3 py-1 bg-wine/10 rounded-full text-sm">Saturday mornings</span>
          </div>
          <div className="pl-4 border-l-2 border-wine/30">
            <p className="text-gray-700">Meeting every Saturday at 10:00am for four weeks</p>
            <p className="text-Navy font-medium mb-4">Fundamentals of HEMA through Longsword</p>
            <button
              onClick={() => onNavigationClick('joinNow')}
              className="px-4 py-2 bg-Navy text-white rounded-lg hover:bg-Navy/90 transition-colors font-semibold text-sm flex items-center gap-2"
            >
              Enroll Here
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

UpcomingStartDates.propTypes = {
  onNavigationClick: PropTypes.func
};

export default UpcomingStartDates;
