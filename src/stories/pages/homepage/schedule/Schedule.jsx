import React from 'react';

function Schedule() {
  const scheduleItems = [
    {
      discipline: 'Saber',
      day: 'Monday',
      time: '7:00pm - 9:00pm',
    },
    {
      discipline: 'Longsword',
      subtitle: '(Beginner & Open Class)',
      day: 'Wednesday',
      time: '6:30pm - 8:30pm',
    },
    {
      discipline: 'Footwork & Thrusting Weapons',
      day: 'Thursday',
      time: '7:00pm - 9:00pm',
    },
    {
      discipline: 'Open Floor',
      day: 'Saturday',
      time: '11:00am - 1:00pm',
    },
  ];

  return (
    <div className="bg-Navy">
      <div className="container mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div className="space-y-2">
            <h2 className="font-bold text-3xl md:text-4xl text-white">HEMA Class Schedule</h2>
            <p className="text-gray-300">Join us for regular training sessions throughout the week</p>
          </div>
        </div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scheduleItems.map((item, index) => (
            <div 
              key={index}
              className="bg-Navy-light/20 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-300 hover:scale-105"
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
    </div>
  );
}

export default Schedule;
