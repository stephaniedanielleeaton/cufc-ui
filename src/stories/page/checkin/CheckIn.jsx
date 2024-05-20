import React from 'react';
import PropTypes from 'prop-types';
import PersonCheckInCardContainer from '../../organisms/container/personcheckincards/PersonCheckInCardContainer';

const PersonCheckInPage = ({ members, onCheckIn }) => {
  const handleCheckIn = (id) => {
    onCheckIn(id);
  };

  return (
    <div className="person-check-in-page">
      <h1 className="text-2xl font-bold mb-4">Check In Members</h1>
      <PersonCheckInCardContainer members={members} onCheckIn={handleCheckIn} />
    </div>
  );
};

PersonCheckInPage.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
      portraitUrl: PropTypes.string,
    })
  ).isRequired,
  onCheckIn: PropTypes.func.isRequired,
};

export default PersonCheckInPage;
