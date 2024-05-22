import React from 'react';
import PropTypes from 'prop-types';
import PersonCheckInCardContainer from '../../organisms/containers/personcheckincards/PersonCheckInCardContainer.jsx';
//import AdminMembership from '../../molecules/adminMembership/AdminMembership.jsx';

const PersonCheckInPage = ({ members, onCheckIn }) => {
  const handleCheckIn = (_id) => {
    onCheckIn(_id);
  };

  return (
    <div className="person-check-in-page">
      <h1 className="text-2xl font-bold mt-2 pl-4 text-deepSeaBlue">Member Check-In</h1>
      <PersonCheckInCardContainer members={members} onCheckIn={handleCheckIn} />
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
