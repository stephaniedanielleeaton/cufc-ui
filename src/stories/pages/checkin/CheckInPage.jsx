import React from 'react';
import PropTypes from 'prop-types';
import PersonCheckInCardContainer from '../../organisms/containers/personcheckincards/PersonCheckInCardContainer.jsx';
//import AdminMembership from '../../molecules/adminMembership/AdminMembership.jsx';

const PersonCheckInPage = ({ members, onCheckIn }) => {
  const handleCheckIn = (id) => {
    onCheckIn(id);
  };

  return (
    <>
      <div className="person-check-in-page ml-52">
        <h1 className="text-2xl font-bold mt-2 pl-4 text-deepSeaBlue">Member Check-In</h1>
        <PersonCheckInCardContainer members={members} onCheckIn={handleCheckIn} />
      </div>
    </>
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
