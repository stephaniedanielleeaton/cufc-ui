import React from 'react';
import PropTypes from 'prop-types';

const BaseButton = ({ text, onClick }) => {
  const buttonClasses = "bg-white text-black text-sm font-bold px-4 py-2 hover:bg-black hover:text-white hover:border-white border-2 border-black transition duration-300 ease-in-out";

  return (
    <button className={buttonClasses} onClick={onClick}>
      {text}
    </button>
  );
};

BaseButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

BaseButton.defaultProps = {
  onClick: () => {},
};

export default BaseButton;
