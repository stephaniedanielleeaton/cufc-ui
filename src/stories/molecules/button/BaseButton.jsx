import React from 'react';
import PropTypes from 'prop-types';
import BaseText from '../../atoms/text/BaseText.jsx';

const textSizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
};

const shapes = {
  pill: 'rounded-full',
  rectangle: 'rounded-md',
};

const defaultPadding = 'px-4 py-2';
const rectanglePadding = 'px-7 py-4'; // Adjust this padding for the rectangle shape

const colors = {
  lavender: 'text-lavender bg-lavender hover:text-hoverLavender hover:bg-hoverLavender',
  wine: 'text-wine bg-wine hover:text-hoverWine hover:bg-hoverWine',
  gunmetal: 'text-gunmetal bg-gunmetal hover:text-hoverGunmetal hover:bg-hoverGunmetal',
  outerSpace: 'text-outerSpace bg-outerSpace hover:text-hoverOuterSpace hover:bg-hoverOuterSpace',
  ashGray: 'text-ashGray bg-ashGray hover:text-hoverAshGray hover:bg-hoverAshGray',
  white: 'text-white bg-white hover:text-hoverWhite hover:bg-hoverWhite',
  transparent: 'text-white bg-transparent hover:bg-gunmetal hover:bg-opacity-25',
};

const borders = {
  none: '',
  white: 'border border-white',
};

const BaseButton = ({ size, color, textColor, textSize, text, shape, border, onClick }) => {
  const textSizeClass = textSizes[size];
  const colorClass = colors[color];
  const shapeClass = shapes[shape];
  const paddingClass = shape === 'rectangle' ? rectanglePadding : defaultPadding;
  const hoverTransition = 'transition duration-300 ease-in-out';
  const borderClass = borders[border];
  const buttonClasses = `${shapeClass} ${colorClass} ${paddingClass} ${hoverTransition} ${borderClass} shadow-xl flex justify-center items-center ${textSizeClass}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      <BaseText color={textColor} size={textSize} content={text} />
    </button>
  );
};

BaseButton.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl']),
  shape: PropTypes.oneOf(['pill', 'rectangle']),
  color: PropTypes.oneOf(['lavender', 'wine', 'gunmetal', 'outerSpace', 'ashGray']),
  textColor: PropTypes.oneOf(['lavender', 'wine', 'gunmetal', 'outerSpace', 'ashGray']),
  textSize: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']),
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  border: PropTypes.oneOf(['none', 'white']),
};

BaseButton.defaultProps = {
  size: 'md',
  color: 'gunmetal',
  shape: 'pill',
  textColor: 'white',
  textSize: 'md',
  border: 'none',
  onClick: () => {},
};

export default BaseButton;
