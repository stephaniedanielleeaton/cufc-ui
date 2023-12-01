import React from 'react';
import PropTypes from 'prop-types';

const ImageBox = ({
  src,
  alt,
  width,
  height,
  objectFit,
  objectPosition,
  loading,
  className,
  style,
  onClick,
  ButtonComponent,
}) => {
  return (
    <div className={className} style={{ position: 'relative', ...style }}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{ objectFit, objectPosition }}
        loading={loading}
        onClick={onClick}
      />
      {ButtonComponent && (
        <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
          {ButtonComponent}
        </div>
      )}
    </div>
  );
};

ImageBox.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  objectFit: PropTypes.oneOf(['cover', 'contain']),
  objectPosition: PropTypes.string,
  loading: PropTypes.oneOf(['eager', 'lazy']),
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  ButtonComponent: PropTypes.element,
};

ImageBox.defaultProps = {
  alt: '',
  objectFit: 'cover',
  loading: 'lazy',
};

export default ImageBox;
