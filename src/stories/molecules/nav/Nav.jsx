import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logoFullColourNavySvg from '../../assets/LogoFullColourNavy.svg';
import logoAllWhiteSvg from '../../assets/LogoAllWhite.svg';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigationClick = (target) => {
    console.log(target);
  };

  return (
    <div>
      {/* Mobile Navigation */}
      <div className="md:hidden bg-Navy flex items-center h-[70px] min-h-16">
        <nav>
          <div>
            <button
              type="button"
              className="inline-flex items-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
            </button>
          </div>
          {/* Mobile DropDown */}
          <div
            className={`absolute ${isOpen ? 'block' : 'hidden'} left-0 top-full px-4 py-2 rounded-md bg-Navy w-full`}
          >
            <a
              href="#"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base whitespace-nowrap"
              onClick={() => handleNavigationClick('signup')}
            >
              Sign Up
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base whitespace-nowrap"
              onClick={() => handleNavigationClick('donate')}
            >
              Donate
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base whitespace-nowrap"
              onClick={() => handleNavigationClick('contact')}
            >
              Contact
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base whitespace-nowrap"
              onClick={() => handleNavigationClick('about')}
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base whitespace-nowrap"
              onClick={() => handleNavigationClick('admin')}
            >
              Admin
            </a>
          </div>
        </nav>

        {/* Center Content */}
        <div className="w-1/3 absolute inset-x-0 mx-auto text-center p-2">
          <img src={logoAllWhiteSvg} alt="Logo" className="px-4 max-h-[64px]" />
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-around items-center min-h-16 bg-Navy h-full">
        <div></div>
        <nav className="md:w-1/2 lg:w-1/3 flex items-center justify-center text-white">
          <div className="button flex items-center px-4 whitespace-nowrap">
            <span
              className="font-Khula font-normal text-base hover:text-MediumGray tracking-[2.4px]"
              onClick={() => handleNavigationClick('admin')}
            >
              ADMIN
            </span>
          </div>
          <div className="button flex items-center px-4 whitespace-nowrap">
            <span
              className="font-Khula font-normal text-base hover:text-MediumGray tracking-[2.4px]"
              onClick={() => handleNavigationClick('dashboard')}
            >
              DASHBOARD
            </span>
          </div>
          <div className="button flex items-center whitespace-nowrap bg-MediumPink min-h-16 px-4">
            <span
              className="font-Khula font-normal text-base h-full hover:text-MediumGray tracking-[2.4px]"
              onClick={() => handleNavigationClick('signin')}
            >
              SIGN IN
            </span>
          </div>
        </nav>
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
              onClick={() => handleNavigationClick('about')}
            >
              ABOUT US
            </span>
          </div>
          <div className="button flex items-center whitespace-nowrap">
            <span
              className="font-Khula font-normal text-base text-black hover:text-MediumGray tracking-[2.4px]"
              onClick={() => handleNavigationClick('classes')}
            >
              CLASSES
            </span>
          </div>
          <div className="button flex items-center whitespace-nowrap">
            <span
              className="font-Khula font-normal text-base text-black hover:text-MediumGray tracking-[2.4px]"
              onClick={() => handleNavigationClick('events')}
            >
              EVENTS
            </span>
          </div>
          <div className="button flex items-center whitespace-nowrap">
            <span
              className="font-Khula font-normal text-base text-black hover:text-MediumGray tracking-[2.4px]"
              onClick={() => handleNavigationClick('contact')}
            >
              CONTACT US
            </span>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
