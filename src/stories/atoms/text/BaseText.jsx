import React from 'react';
import PropTypes from 'prop-types';

export const BaseText = ({ color, size, content, ...props }) => {
    const colorClass = `text-${color}`;
    const sizeClass = `text-${size}`;

    return (
        <p
            className={`storybook-text ${colorClass} ${sizeClass}`}
            {...props}
        >
            {content}
        </p>
    );
};

BaseText.propTypes = {
    color: PropTypes.oneOf(['lavender', 'wine', 'gunmetal', 'outerSpace', 'ashGray']),
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']),
    content: PropTypes.string.isRequired,
};

BaseText.defaultProps = {
    color: 'gunmetal',
    size: 'md',
};

export default BaseText;
