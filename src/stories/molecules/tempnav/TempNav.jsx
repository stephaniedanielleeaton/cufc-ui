import React from 'react';
import logoFullColourNavySvg from '../../assets/LogoFullColourNavy.svg';
import logoAllWhiteSvg from '../../assets/LogoAllWhite.svg';

function TempNav({onNavigationClick}) {
  return (
    <div>
      {/* Mobile Navigation */}
      <div className="md:hidden bg-Navy flex items-center h-[70px] min-h-16">
        <nav>
          <div></div>
        </nav>

        {/* Center Content */}
        <div className="w-1/3 absolute inset-x-0 mx-auto text-center p-2">
          <img src={logoAllWhiteSvg} alt="Logo" className="px-4 max-h-[64px]" />
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-around items-center min-h-16 bg-Navy h-full">
        <div></div>
      </div>

      {/* Logo */}
      <div className="hidden md:flex justify-around items-center h-[187px] px-8">
        <div className="flex-none flex justify-center items-center bg-white h-full">
          <img src={logoFullColourNavySvg} alt="Logo" className="w-[200px]" />
        </div>
        <nav className="md:w-1/2 lg:w-1/3 flex items-center justify-center space-x-4">
          <div className="button flex items-center whitespace-nowrap">
            <span
              className="font-Khula font-normal text-base text-black hover:text-MediumGray tracking-[2.4px]"
              onClick={() => onNavigationClick('about')}
            >
              ABOUT US
            </span>
          </div>
          <div className="button flex items-center whitespace-nowrap">
            <span
              className="font-Khula font-normal text-base text-black hover:text-MediumGray tracking-[2.4px]"
              onClick={() => onNavigationClick('classes')}
            >
              CLASSES
            </span>
          </div>
          <div className="button flex items-center whitespace-nowrap">
            <span
              className="font-Khula font-normal text-base text-black hover:text-MediumGray tracking-[2.4px]"
              onClick={() => onNavigationClick('contact')}
            >
              CONTACT US
            </span>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default TempNav;
