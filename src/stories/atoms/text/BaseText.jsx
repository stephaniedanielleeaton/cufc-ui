import React from 'react';
import PropTypes from 'prop-types';

export const BaseText = ({ font, color, size, weight, content, ...props }) => {
  const fontClass = font ? `font-${font}` : '';
  const colorClass = `text-${color}`;
  const sizeClass = `text-${size}`;
  const weightClass = `font-${weight}`;

  return (
    <p className={`storybook-text ${fontClass} ${colorClass} ${sizeClass} ${weightClass}`} {...props}>
      {content}
    </p>
  );
};

BaseText.propTypes = {
  font: PropTypes.oneOf(['poppins', 'inter']),
  color: PropTypes.oneOf(['lavender', 'wine', 'gunmetal', 'outerSpace', 'ashGray']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']),
  weight: PropTypes.oneOf(['normal', 'semibold', 'bold', 'extrabold']),
  content: PropTypes.string.isRequired,
};

BaseText.defaultProps = {
  font: 'inter',
  color: 'gunmetal',
  size: 'md',
  weight: 'normal',
};

export default BaseText;
