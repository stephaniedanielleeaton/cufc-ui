import React from 'react';
import PropTypes from 'prop-types';
import PersonCheckInCardContainer from '../../organisms/containers/personcheckincards/PersonCheckInCardContainer.jsx';
import Nav from '../../molecules/nav/Nav.jsx';
import Footer from '../../molecules/footer/Footer.jsx';
//import AdminMembership from '../../molecules/adminMembership/AdminMembership.jsx';

const PersonCheckInPage = ({ members, onCheckIn }) => {
  const handleCheckIn = (id) => {
    onCheckIn(id);
  };

  return (
    <>
      <Nav />
      <div className="person-check-in-page">
        <h1 className="text-2xl font-bold mb-4">Member Check-In</h1>
        <PersonCheckInCardContainer members={members} onCheckIn={handleCheckIn} />
      </div>
      <Footer />
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
