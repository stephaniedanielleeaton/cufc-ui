import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faCity,
  faEnvelope,
  faMapPin,
  faMobilePhone,
  faStreetView,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

const iconDefs = [
  { ref: 'faUser', value: faUser },
  { ref: 'faEnvelope', value: faEnvelope },
  { ref: 'faCalendar', value: faCalendar },
  { ref: 'faStreetView', value: faStreetView },
  { ref: 'faCity', value: faCity },
  { ref: 'faMapPin', value: faMapPin },
  { ref: 'faMobilePhone', value: faMobilePhone },
  { ref: 'none', value: '' },
];

const BaseTextInput = ({ placeholder, onChange, value, faIcon, name, type }) => {
  const icon = iconDefs.find((entry) => entry.ref === faIcon)?.value;

  const handleChange = (e) => {
    onChange(name, e.target.value);
  };

  return (
    <div className="w-full p-2 text-sm">
      <div className="flex items-center relative">
        <input
          className="w-full border rounded-md pl-10 h-12 p-3 focus:outline-none focus:border-periwinkle"
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          name={name} // Pass the name prop to the input
        />
        {faIcon !== '' ? (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <FontAwesomeIcon icon={icon} className="w-4 h-4 text-outerSpace inline" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default BaseTextInput;

BaseTextInput.propTypes = {
  faIcon: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
};

BaseTextInput.defaultProps = {
  faIcon: 'faUser',
  placeholder: 'Sample Text',
  type: 'text',
  onChange: () => {},
  value: '',
  name: '',
};
