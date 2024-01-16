import React from 'react';
import PropTypes from 'prop-types';
import TopNavBar from '../../molecules/topnavbar/TopNavBar.jsx';
import About from '../../molecules/about/About.jsx';

const AdminPage = () => {
  return (
    <div>
      <TopNavBar />

    </div>
  );
};

AdminPage.propTypes = {
  imageOptions: PropTypes.shape({
    src: PropTypes.any, // Adjust according to the expected type
    alt: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    objectFit: PropTypes.string,
    objectPosition: PropTypes.string,
  }),
  buttonTexts: PropTypes.arrayOf(PropTypes.string),
  textContents: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string,
      body: PropTypes.string,
    })
  ),
  contactButtonText: PropTypes.string,
};

AdminPage.defaultProps = {};

export default AdminPage;
