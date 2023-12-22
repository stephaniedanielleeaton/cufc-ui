import React from 'react';
import Navbar from '../../molecules/topnavbar/TopNavBar.jsx';
import Image from '../../molecules/imagebox/ImageBox.jsx';
import BaseButton from '../../molecules/button/BaseButton.jsx';
import BaseText from '../../atoms/text/BaseText.jsx';
import PropTypes from 'prop-types';

const HomePage = ({ imageOptions, buttonTexts, textContents, contactButtonText }) => {
  return (
    <div>
      <Navbar />
      <Image {...imageOptions} ButtonComponent={<BaseButton text="Join" />} />
      <div className="mt-4 grid grid-cols-2 gap-4 w-full">
        {buttonTexts.map((text, index) => (
          <div key={index} className={`${index < 2 ? '' : 'col-start-1 col-span-2'} flex justify-center`}>
            <BaseButton text={text} shape="rectangle" />
          </div>
        ))}
      </div>
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

      <div className="mt-4 w-full flex flex-row justify-center">
        <BaseButton text={contactButtonText} shape="rectangle" />
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
