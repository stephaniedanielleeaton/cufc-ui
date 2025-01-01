import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ScheduleForm from './ScheduleForm';

// Helper function to get the day index (0 for Monday, 6 for Sunday)
const getDayIndex = (day) => {
  // Extract the first day if multiple days are listed
  const firstDay = day.split('&')[0].trim().toLowerCase();
  
  const dayMap = {
    'monday': 0,
    'mon': 0,
    'tuesday': 1,
    'tue': 1,
    'wednesday': 2,
    'wed': 2,
    'thursday': 3,
    'thu': 3,
    'friday': 4,
    'fri': 4,
    'saturday': 5,
    'sat': 5,
    'sunday': 6,
    'sun': 6
  };

  // Find the first word that matches a day
  const words = firstDay.split(' ');
  for (const word of words) {
    if (dayMap[word] !== undefined) {
      return dayMap[word];
    }
  }
  return 7; // Return high number for items without recognized days
};

function Schedule({ 
  scheduleItems, 
  upcomingClosures, 
  upcomingEvents, 
  isAdmin = false,
  onDeleteScheduleItem,
  onDeleteClosure,
  onDeleteEvent,
  onAddScheduleItem,
  onAddClosure,
  onAddEvent,
  onEditScheduleItem,
  onEditClosure,
  onEditEvent
}) {
  const [formState, setFormState] = useState({
    isOpen: false,
    type: null,
    initialData: null,
  });

  const handleAdd = (type) => {
    setFormState({
      isOpen: true,
      type,
      initialData: null,
    });
  };

  const handleEdit = (type, data) => {
    setFormState({
      isOpen: true,
      type,
      initialData: data,
    });
  };

  const handleFormSubmit = (formData) => {
    const { type, initialData } = formState;
    
    // Call the appropriate handler based on type and whether it's an edit or add
    switch (type) {
      case 'scheduleItem':
        if (initialData) {
          onEditScheduleItem(formData);
        } else {
          onAddScheduleItem(formData);
        }
        break;
      case 'event':
        if (initialData) {
          onEditEvent(formData);
        } else {
          onAddEvent(formData);
        }
        break;
      case 'closure':
        if (initialData) {
          onEditClosure(formData);
        } else {
          onAddClosure(formData);
        }
        break;
    }

    // Close the form
    setFormState({
      isOpen: false,
      type: null,
      initialData: null,
    });
  };

  const handleFormClose = () => {
    setFormState({
      isOpen: false,
      type: null,
      initialData: null,
    });
  };

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
            {[...scheduleItems].sort((a, b) => getDayIndex(a.day) - getDayIndex(b.day)).map((item, index) => (
              <div 
                key={index}
                className="bg-Navy-light/30 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:bg-Navy-light/40 relative"
              >
                {isAdmin && (
                  <div className="absolute top-2 right-2 flex gap-2">
                    <button
                      onClick={() => handleEdit('scheduleItem', item)}
                      className="p-1 text-LightPink hover:text-MediumPink transition-colors"
                      title="Edit class"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => onDeleteScheduleItem(item)}
                      className="p-1 text-red-400 hover:text-red-300 transition-colors"
                      title="Delete class"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                )}
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
            {isAdmin && (
              <button
                onClick={() => handleAdd('scheduleItem')}
                className="bg-Navy-light/30 backdrop-blur-sm rounded-xl p-6 border-2 border-dashed border-LightPink/30 hover:border-LightPink/50 transition-colors flex items-center justify-center"
              >
                <div className="text-LightPink flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span>Add Class</span>
                </div>
              </button>
            )}
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
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-LightPink font-bold text-xl">Upcoming Events</h4>
                {isAdmin && (
                  <button
                    onClick={() => handleAdd('event')}
                    className="text-LightPink hover:text-MediumPink transition-colors"
                    title="Add event"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                )}
              </div>
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border-l-2 border-LightPink pl-4 relative">
                    <div className="flex flex-col space-y-1">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-grow">
                          <span className="text-LightPink text-sm">{event.date}</span>
                          <h5 className="text-white font-semibold">{event.title}</h5>
                          <p className="text-gray-300 text-sm">{event.description}</p>
                        </div>
                        {isAdmin && (
                          <div className="flex gap-2 flex-shrink-0 pt-1">
                            <button
                              onClick={() => handleEdit('event', event)}
                              className="p-1 text-LightPink hover:text-MediumPink transition-colors"
                              title="Edit event"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </button>
                            <button
                              onClick={() => onDeleteEvent(event)}
                              className="p-1 text-red-400 hover:text-red-300 transition-colors"
                              title="Delete event"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Closures Card */}
            <div className="bg-Navy-light/20 backdrop-blur-sm rounded-xl p-8 border border-Navy-light/10">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-LightPink font-bold text-xl">Upcoming Closures</h4>
                {isAdmin && (
                  <button
                    onClick={() => handleAdd('closure')}
                    className="text-LightPink hover:text-MediumPink transition-colors"
                    title="Add closure"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                )}
              </div>
              <div className="space-y-4">
                {upcomingClosures.map((closure, index) => (
                  <div key={index} className="border-l-2 border-LightPink pl-4 relative">
                    <div className="flex flex-col space-y-1">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-grow">
                          <span className="text-LightPink font-medium">{closure.dates}</span>
                          <p className="text-gray-300">{closure.reason}</p>
                        </div>
                        {isAdmin && (
                          <div className="flex gap-2 flex-shrink-0 pt-1">
                            <button
                              onClick={() => handleEdit('closure', closure)}
                              className="p-1 text-LightPink hover:text-MediumPink transition-colors"
                              title="Edit closure"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </button>
                            <button
                              onClick={() => onDeleteClosure(closure)}
                              className="p-1 text-red-400 hover:text-red-300 transition-colors"
                              title="Delete closure"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Form Modal */}
      {formState.isOpen && (
        <ScheduleForm
          type={formState.type}
          initialData={formState.initialData}
          onSubmit={handleFormSubmit}
          onClose={handleFormClose}
        />
      )}
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
  isAdmin: PropTypes.bool,
  onDeleteScheduleItem: PropTypes.func,
  onDeleteClosure: PropTypes.func,
  onDeleteEvent: PropTypes.func,
  onAddScheduleItem: PropTypes.func,
  onAddClosure: PropTypes.func,
  onAddEvent: PropTypes.func,
  onEditScheduleItem: PropTypes.func,
  onEditClosure: PropTypes.func,
  onEditEvent: PropTypes.func,
};

export default Schedule;
