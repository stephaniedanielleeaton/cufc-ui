import React from 'react';
import PropTypes from 'prop-types';

const PersonCheckInCard = ({ id, displayName, onCheckIn }) => {
  const handleClick = () => {
    onCheckIn(id);
  };

  return (
    <div
      onClick={handleClick}
      className={'flex items-center p-4 shadow-md rounded-lg cursor-pointer mt-4 border hover:border-hoverWine'}
    >
      <div className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0"></div>
      <div className="flex flex-row w-full justify-between">
        <div className="ml-4">
          <div className="text-2xl font-medium text-deepSeaBlue">{displayName}</div>
        </div>
      </div>
    </div>
  );
};

PersonCheckInCard.propTypes = {
  id: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  onCheckIn: PropTypes.func.isRequired,
};

export default PersonCheckInCard;
