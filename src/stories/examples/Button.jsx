import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, ' p-8 text-2xl', mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      <span className="text-sm text-lavender">This is a test</span>
      <span className="text-md text-wine">This is a test</span>
      <span className="text-lg text-gunmetal">This is a test</span>
      <span className="text-xl text-outerSpace">This is a test</span>
      <span className="text-2xl text-ashGray">This is a test</span>
      <span className="text-3xl text-wine">This is a test</span>
      <span className="text-4xl text-wine">This is a test</span>
     {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
