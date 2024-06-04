import React from 'react';
import PropTypes from 'prop-types';
import PersonCheckInCardContainer from '../../organisms/containers/personcheckincards/PersonCheckInCardContainer.jsx';

const PersonCheckInPage = ({ members, onCheckIn }) => {
  const handleCheckIn = (_id) => {
    onCheckIn(_id);
  };

  return (
    <div className="flex flex-row justify-center w-full">
      <div className="w-full lg:w-3/4">
        <h1 className="text-2xl font-bold mt-2 pl-4 text-deepSeaBlue">Fencer Check-In</h1>
        <PersonCheckInCardContainer members={members} onCheckIn={handleCheckIn} />
      </div>
    </div>
  );
};

PersonCheckInPage.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      display_first_name: PropTypes.string.isRequired,
      display_last_name: PropTypes.string.isRequired,
      portraitUrl: PropTypes.string,
    })
  ).isRequired,
  onCheckIn: PropTypes.func.isRequired,
};

export default PersonCheckInPage;
