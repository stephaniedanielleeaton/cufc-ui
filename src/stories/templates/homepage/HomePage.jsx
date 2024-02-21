import React from 'react';
import PropTypes from 'prop-types';
import About from '../../molecules/about/About.jsx';

const HomePage = () => {
  return (
    <div>
      <About />
    </div>
  );
};

HomePage.propTypes = {
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

HomePage.defaultProps = {};

export default HomePage;
