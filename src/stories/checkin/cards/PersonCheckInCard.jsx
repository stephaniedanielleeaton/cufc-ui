import React from 'react';
import PropTypes from 'prop-types';

const PersonCheckInCard = ({ id, lastName, firstName, onCheckIn, checkedIn }) => {
  const handleClick = () => {
    onCheckIn(id);
  };

  return (
    <div
      onClick={handleClick}
      className={`flex items-center p-4 shadow-sm rounded-lg cursor-pointer border ${
        checkedIn 
          ? 'bg-checkInCardBg border-DeepRed text-LightGray' 
          : 'bg-white hover:bg-gray-50 border-gray-200'
      }`}
    >
      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0
        ${checkedIn ? 'bg-DeepRed' : 'bg-gray-300'}`}
      >
        {checkedIn && (
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <div className="ml-4">
        <div className={`text-xl ${checkedIn ? 'text-white' : 'text-gray-900'}`}>
          <span className="font-normal">{lastName}, </span>
          <span className="font-bold">{firstName}</span>
        </div>
      </div>
    </div>
  );
};

PersonCheckInCard.propTypes = {
  id: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  onCheckIn: PropTypes.func.isRequired,
  checkedIn: PropTypes.bool.isRequired,
};

export default PersonCheckInCard;
