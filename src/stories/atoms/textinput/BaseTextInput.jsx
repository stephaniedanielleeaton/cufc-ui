import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

const iconDefs = [
  { ref: 'faUser', value: faUser },
  { ref: 'faEnvelope', value: faEnvelope },
  { ref: 'faCalendar', value: faCalendar },
];

const BaseTextInput = ({ placeholder, onChange, value, faIcon }) => {
  const icon = iconDefs.find((entry) => entry.ref === faIcon)?.value;
  return (
    <div className="w-full">
      <span className="absolute left-5 top-1/2 transform -translate-y-1/2 w-full">
        <FontAwesomeIcon icon={icon} className="w-4 h-4 text-outerSpace inline" />
      </span>
      <input
        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default BaseTextInput;

BaseTextInput.propTypes = {
  faIcon: PropTypes.string,
  placeholder: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl']),
  onChange: PropTypes.oneOf(['pill', 'rectangle']),
  value: PropTypes.oneOf(['lavender', 'wine', 'gunmetal', 'outerSpace', 'ashGray', 'transparentDeepBlue']),
};

BaseTextInput.defaultProps = {
  faIcon: 'faUser',
  placeholder: 'md',
  onChange: 'gunmetal',
  value: 'pill',
};
