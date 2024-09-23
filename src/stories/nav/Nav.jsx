import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logoFullColourNavySvg from '../assets/LogoFullColourNavy.svg';
import logoAllWhiteSvg from '../assets/LogoAllWhite.svg';
import prideFlagSvg from '../assets/LGBTQ+_rainbow_flag_Quasar__Progress__variant.svg';
import PropTypes from 'prop-types';

function Nav({ onNavigationClick, userProfilePic, isAuthenticated, handleAuth, isAdmin }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigationClick = (page) => {
    onNavigationClick(page);
    setIsOpen(false);
  };

  return (
    <div>
      {/* Mobile Navigation */}
      <div className="md:hidden bg-Navy flex items-center justify-between h-[70px] min-h-16 px-4 relative">
        <button
          type="button"
          className="inline-flex items-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
        </button>

        {/* Center Content */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src={logoAllWhiteSvg} alt="Logo" className="px-4 max-h-[64px]" onClick={() => onNavigationClick('')} />
        </div>

        <img src={prideFlagSvg} alt="Pride Flag" className="h-8 w-8" />
      </div>

      {/* Mobile DropDown */}
      <div
        className={`fixed top-[70px] left-0 w-full h-full bg-Navy bg-opacity-90 z-50 flex flex-col items-center justify-start space-y-4 transition-all duration-300 pt-20 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <a href="#" className="text-white text-xl block" onClick={() => handleNavigationClick('dropin')}>
          Drop In
        </a>
        <a href="#" className="text-white text-xl block" onClick={() => handleNavigationClick('donate')}>
          Donate
        </a>
        <a href="#" className="text-white text-xl block" onClick={() => handleNavigationClick('contact')}>
          Contact
        </a>
        <a href="#" className="text-white text-xl block" onClick={() => handleNavigationClick('about')}>
          About
        </a>
        <a href="#" className="text-white text-xl block" onClick={() => handleNavigationClick('classes')}>
          Classes
        </a>
        <a href="#" className="text-white text-xl block" onClick={() => handleNavigationClick('events')}>
          Events
        </a>
        <a href="#" className="text-white text-xl block" onClick={() => handleAuth()}>
          {isAuthenticated ? 'Sign Out' : 'Sign In'}
        </a>
        {isAdmin ? (
          <a href="#" className="text-white text-xl block" onClick={() => handleNavigationClick('admin')}>
          Admin
        </a>) : ''}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-around items-center min-h-16 bg-Navy h-full">
        <div className="flex items-center">
          <img src={prideFlagSvg} alt="Pride Flag" className="h-8 w-8 mr-4" />
        </div>
        <nav className="md:w-1/2 lg:w-1/3 flex items-center justify-center text-white">
          <div className="button flex items-center px-4 whitespace-nowrap">
            <span
              className="font-Khula font-normal text-base hover:text-MediumGray tracking-[2.4px]"
              onClick={() => onNavigationClick('dropin')}
            >
              DROP IN
            </span>
          </div>
          <div className="button flex items-center px-4 h-full whitespace-nowrap">
            <span
              className="font-Khula font-normal text-base hover:text-MediumGray tracking-[2.4px]"
              onClick={() => onNavigationClick('dashboard')}
            >
              DASHBOARD
            </span>
          </div>
          <div
            className="button flex items-center whitespace-nowrap bg-MediumPink min-h-16 px-4"
            onClick={() => handleAuth()}
          >
            <span className="font-Khula font-normal text-base hover:text-MediumGray tracking-[2.4px]">
              {isAuthenticated ? 'SIGN OUT' : 'SIGN IN'}
            </span>
          </div>
          {/* User Profile Icon */}
          {isAuthenticated ? (
            <img
              src={userProfilePic ? userProfilePic : 'placeholder-avatar.jpg'}
              alt="Profile"
              className="w-12 h-12 rounded-full mx-4"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-gray-300 mx-4"></div>
          )}
          <div className="button flex items-center px-4 whitespace-nowrap">
            {isAdmin ? (
              <span
                className="font-Khula font-normal text-base hover:text-MediumGray tracking-[2.4px]"
                onClick={() => onNavigationClick('admin')}
              >
                ADMIN
              </span>
            ) : (
              ''
            )}
          </div>
        </nav>
      </div>

      {/* Logo */}
      <div className="hidden md:flex justify-around items-center h-[187px] px-8 bg-white">
        <div className="flex-none flex justify-center items-center bg-white h-full">
          <img src={logoFullColourNavySvg} alt="Logo" className="w-[200px]" onClick={() => onNavigationClick('')} />
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
              onClick={() => onNavigationClick('events')}
            >
              EVENTS
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

Nav.propTypes = {
  onNavigationClick: PropTypes.func,
  userLoggedIn: PropTypes.bool,
  userProfilePic: PropTypes.string,
  handleAuth: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  isAdmin: PropTypes.bool,
};

export default Nav;
