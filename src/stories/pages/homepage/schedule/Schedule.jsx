import React from 'react';
import PropTypes from 'prop-types';

function Schedule({ scheduleItems, upcomingClosures, upcomingEvents }) {
  return (
    <div className="bg-Navy">
      <div className="container mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-bold text-3xl md:text-4xl text-white mb-4">HEMA Class Schedule</h2>
          <p className="text-gray-300 mb-4">Join us for our regular training sessions throughout the week</p>
          <a 
            href="/classes" 
            className="inline-flex items-center gap-2 text-LightPink hover:text-MediumPink transition-colors font-semibold"
          >
            Learn more about our classes
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Weekly Schedule */}
        <div className="relative">
          {/* Background Accent */}
          <div className="absolute inset-0 bg-LightPink/5 -skew-y-3 rounded-3xl" />
          
          <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-6 p-6">
            {scheduleItems.map((item, index) => (
              <div 
                key={index}
                className="bg-Navy-light/30 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:bg-Navy-light/40"
              >
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-LightPink font-bold text-lg">{item.discipline}</h3>
                    {item.subtitle && (
                      <p className="text-LightPink/90 text-sm">{item.subtitle}</p>
                    )}
                  </div>
                  <div className="space-y-1">
                    <p className="text-white font-bold">{item.day}</p>
                    <p className="text-gray-300 text-sm">{item.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Announcements Section */}
        <div className="mt-24">
          <h3 className="text-center text-2xl font-bold text-white mb-12">
            Announcements & Special Events
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Upcoming Events Card */}
            <div className="bg-Navy-light/20 backdrop-blur-sm rounded-xl p-8 border border-Navy-light/10">
              <h4 className="text-LightPink font-bold text-xl mb-6">Upcoming Events</h4>
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border-l-2 border-LightPink pl-4">
                    <div className="flex flex-col space-y-1">
                      <span className="text-LightPink text-sm">{event.date}</span>
                      <h5 className="text-white font-semibold">{event.title}</h5>
                      <p className="text-gray-300 text-sm">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Closures Card */}
            <div className="bg-Navy-light/20 backdrop-blur-sm rounded-xl p-8 border border-Navy-light/10">
              <h4 className="text-LightPink font-bold text-xl mb-6">Upcoming Closures</h4>
              <div className="space-y-4">
                {upcomingClosures.map((closure, index) => (
                  <div key={index} className="border-l-2 border-LightPink pl-4">
                    <div className="flex flex-col space-y-1">
                      <span className="text-LightPink font-medium">{closure.dates}</span>
                      <p className="text-gray-300">{closure.reason}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Schedule.propTypes = {
  scheduleItems: PropTypes.arrayOf(
    PropTypes.shape({
      discipline: PropTypes.string.isRequired,
      day: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
    })
  ).isRequired,
  upcomingClosures: PropTypes.arrayOf(
    PropTypes.shape({
      dates: PropTypes.string.isRequired,
      reason: PropTypes.string.isRequired,
    })
  ).isRequired,
  upcomingEvents: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Schedule;
