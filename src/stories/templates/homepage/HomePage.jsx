import React from 'react';
import BaseButton from '../../molecules/button/BaseButton.jsx';
import BaseText from '../../atoms/text/BaseText.jsx';
import PropTypes from 'prop-types';
import NavHero from '../../organisms/navhero/NavHero.jsx';

const HomePage = ({ textContents, contactButtonText }) => {
  return (
    <div>
      <NavHero />
      <div className="flex flex-col justify-center w-full">
        {textContents.map(({ header, body }, index) => (
          <div key={index} className="mt-2 flex flex-col">
            <BaseText content={header} size={'2xl'} />
            {body.split('\n').map((line, lineIndex) => (
              <React.Fragment key={lineIndex}>
                <BaseText content={line} />
                {lineIndex < body.split('\n').length - 1}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
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
