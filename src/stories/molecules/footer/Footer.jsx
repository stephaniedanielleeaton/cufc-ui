import React, { useState } from 'react';
import logoFullColourNavySvg from '../../assets/LogoFullColourNavy.svg';
import logoAllWhiteSvg from '../../assets/LogoAllWhite.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div>
        <div className="hidden md:flex justify-between items-center h-[187px] px-8">
          <div className="w-1/3 bg-white h-full flex justify-center items-center">
            <img src={logoFullColourNavySvg} alt="Logo" className="w-[200px]" />
          </div>
          <div className="w-1/3 bg-white h-full flex justify-center items-center space-x-4">
            ADRESS
          </div>
          <div className="w-1/3 bg-white h-full flex justify-center items-center space-x-4">
            FB INSTA
          </div>
        </div>
      </div>
      <div className="w-full bg-Navy flex justify-between md:justify-end items-center h-[70px] min-h-16">
        {/* Center Content */}
        <div className="w-1/3 absolute inset-x-0 mx-auto text-center p-2 md:hidden">
          <img src={logoAllWhiteSvg} alt="Logo" className="px-4" />
        </div>
      </div>

    </div>
  );
}

export default Footer;
