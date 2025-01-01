import React from 'react';
import PropTypes from 'prop-types';

function ScheduleForm({ 
  type, 
  initialData = null, 
  onSubmit, 
  onClose 
}) {
  const [formData, setFormData] = React.useState(() => {
    if (initialData) return { ...initialData };
    
    // Default values based on type
    switch (type) {
      case 'scheduleItem':
        return {
          discipline: '',
          subtitle: '',
          day: '',
          time: '',
        };
      case 'event':
        return {
          date: '',
          title: '',
          description: '',
        };
      case 'closure':
        return {
          dates: '',
          reason: '',
        };
      default:
        return {};
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getTitle = () => {
    const action = initialData ? 'Edit' : 'Add New';
    switch (type) {
      case 'scheduleItem':
        return `${action} Class`;
      case 'event':
        return `${action} Event`;
      case 'closure':
        return `${action} Closure`;
      default:
        return 'Form';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-lg w-full mx-4 overflow-hidden">
        {/* Header */}
        <div className="bg-Navy px-6 py-4 flex justify-between items-center">
          <h3 className="text-white font-bold text-xl">{getTitle()}</h3>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {type === 'scheduleItem' && (
            <>
              <div>
                <label htmlFor="discipline" className="block text-sm font-medium text-gray-700 mb-1">
                  Class Name
                </label>
                <input
                  type="text"
                  id="discipline"
                  name="discipline"
                  value={formData.discipline}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-Navy focus:border-Navy"
                  required
                />
              </div>
              <div>
                <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700 mb-1">
                  Subtitle (Optional)
                </label>
                <input
                  type="text"
                  id="subtitle"
                  name="subtitle"
                  value={formData.subtitle || ''}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-Navy focus:border-Navy"
                />
              </div>
              <div>
                <label htmlFor="day" className="block text-sm font-medium text-gray-700 mb-1">
                  Day(s)
                </label>
                <input
                  type="text"
                  id="day"
                  name="day"
                  value={formData.day}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-Navy focus:border-Navy"
                  required
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                  Time
                </label>
                <input
                  type="text"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-Navy focus:border-Navy"
                  required
                />
              </div>
            </>
          )}

          {type === 'event' && (
            <>
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <input
                  type="text"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-Navy focus:border-Navy"
                  required
                />
              </div>
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-Navy focus:border-Navy"
                  required
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-Navy focus:border-Navy"
                  required
                />
              </div>
            </>
          )}

          {type === 'closure' && (
            <>
              <div>
                <label htmlFor="dates" className="block text-sm font-medium text-gray-700 mb-1">
                  Dates
                </label>
                <input
                  type="text"
                  id="dates"
                  name="dates"
                  value={formData.dates}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-Navy focus:border-Navy"
                  required
                />
              </div>
              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                  Reason
                </label>
                <input
                  type="text"
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-Navy focus:border-Navy"
                  required
                />
              </div>
            </>
          )}

          {/* Form Actions */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-Navy text-white font-medium rounded-lg hover:bg-Navy/90 transition-colors"
            >
              {initialData ? 'Save Changes' : 'Add Item'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

ScheduleForm.propTypes = {
  type: PropTypes.oneOf(['scheduleItem', 'event', 'closure']).isRequired,
  initialData: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ScheduleForm;
