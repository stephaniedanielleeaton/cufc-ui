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
          className="inline-flex items-center p-2 rounded-md text-white hover:text-white hover:bg-Navy-light/30"
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
        className={`fixed top-[70px] left-0 w-full h-full bg-Navy bg-opacity-95 backdrop-blur-sm z-50 flex flex-col items-center justify-start space-y-4 transition-all duration-300 pt-20 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <a href="#" className="text-white text-xl block hover:text-LightPink transition-colors" onClick={() => handleNavigationClick('intro')}>
          Get Started
        </a>
        <a href="#" className="text-white text-xl block hover:text-LightPink transition-colors" onClick={() => handleNavigationClick('contact')}>
          Contact
        </a>
        <a href="#" className="text-white text-xl block hover:text-LightPink transition-colors" onClick={() => handleNavigationClick('about')}>
          About
        </a>
        <a href="#" className="text-white text-xl block hover:text-LightPink transition-colors" onClick={() => handleNavigationClick('classes')}>
          Classes
        </a>
        <a href="#" className="text-white text-xl block hover:text-LightPink transition-colors" onClick={() => handleNavigationClick('events')}>
          Events
        </a>
        <a href="#" className="text-white text-xl block hover:text-LightPink transition-colors" onClick={() => handleNavigationClick('donate')}>
          Donate
        </a>
        <div className="relative w-full text-center">
          <div className="text-white text-xs px-3 py-0.5 rounded-full bg-LightPink/90 inline-block border border-LightPink mb-0.5">Current Students Only</div>
          <a href="#" className="text-white text-xl block hover:text-LightPink transition-colors" onClick={() => handleNavigationClick('dropin')}>
            Drop In
          </a>
        </div>
        <div className="relative w-full text-center mt-4">
          <div className="text-white text-xs px-3 py-0.5 rounded-full bg-LightPink/90 inline-block border border-LightPink mb-0.5">Admin</div>
          <a href="#" className="text-white text-xl block hover:text-LightPink transition-colors" onClick={() => handleAuth()}>
            {isAuthenticated ? 'Sign Out' : 'Sign In'}
          </a>
        </div>
        {isAdmin ? (
          <a href="#" className="text-white text-xl block hover:text-LightPink transition-colors" onClick={() => handleNavigationClick('admin')}>
            Admin
          </a>
        ) : (
          ''
        )}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-around items-center min-h-16 bg-Navy h-full">
        <div className="flex items-center">
          <img src={prideFlagSvg} alt="Pride Flag" className="h-8 w-8 mr-4" />
        </div>
        <nav className="md:w-1/2 lg:w-1/3 flex items-center justify-center text-white">
          <div className="button flex flex-col items-center px-4 whitespace-nowrap">
            <span className="text-white text-xs px-3 py-0.5 rounded-full bg-LightPink/90 whitespace-nowrap border border-LightPink mb-0.5">Current Students Only</span>
            <div className="flex items-center justify-center h-16">
              <span
                className="font-Khula font-normal text-base hover:text-LightPink transition-colors tracking-[2.4px] cursor-pointer"
                onClick={() => onNavigationClick('dropin')}
              >
                DROP IN
              </span>
            </div>
          </div>
          <div className="button flex flex-col items-center px-4 whitespace-nowrap bg-Navy-light/30 backdrop-blur-sm hover:bg-Navy-light/40 transition-colors cursor-pointer" onClick={() => handleAuth()}>
            <span className="text-white text-xs px-3 py-0.5 rounded-full bg-LightPink/90 whitespace-nowrap border border-LightPink mb-0.5">Admin</span>
            <div className="flex items-center justify-center h-16">
              <span className="font-Khula font-normal text-base tracking-[2.4px]">
                {isAuthenticated ? 'SIGN OUT' : 'SIGN IN'}
              </span>
            </div>
          </div>
          {/* User Profile Icon */}
          {isAuthenticated ? (
            <img
              src={userProfilePic ? userProfilePic : 'placeholder-avatar.jpg'}
              alt="Profile"
              className="w-12 h-12 rounded-full mx-4 border-2 border-Navy-light/30"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-Navy-light/30 mx-4"></div>
          )}
          {isAdmin ? (
            <div className="button flex items-center px-4 whitespace-nowrap">
              <span
                className="font-Khula font-normal text-base hover:text-LightPink transition-colors tracking-[2.4px] cursor-pointer"
                onClick={() => onNavigationClick('admin')}
              >
                ADMIN
              </span>
            </div>
          ) : (
            ''
          )}
        </nav>
      </div>

      {/* Logo */}
      <div className="hidden md:flex justify-around items-center h-[187px] px-8 bg-white overflow-hidden">
        <div className="flex-none flex justify-center items-center bg-white h-full">
          <img src={logoFullColourNavySvg} alt="Logo" className="w-[200px] cursor-pointer" onClick={() => onNavigationClick('')} />
        </div>
        <nav className="md:w-1/2 lg:w-2/3 flex items-center justify-center">
          <div className="flex items-center justify-center gap-4 lg:gap-8 flex-wrap">
            <span
              className="font-Khula font-normal text-base hover:text-LightPink transition-colors tracking-[2.4px] cursor-pointer"
              onClick={() => onNavigationClick('intro')}
            >
              GET STARTED
            </span>
            <span
              className="font-Khula font-normal text-base hover:text-LightPink transition-colors tracking-[2.4px] cursor-pointer"
              onClick={() => onNavigationClick('about')}
            >
              ABOUT
            </span>
            <span
              className="font-Khula font-normal text-base hover:text-LightPink transition-colors tracking-[2.4px] cursor-pointer"
              onClick={() => onNavigationClick('classes')}
            >
              CLASSES
            </span>
            <span
              className="font-Khula font-normal text-base hover:text-LightPink transition-colors tracking-[2.4px] cursor-pointer"
              onClick={() => onNavigationClick('events')}
            >
              EVENTS
            </span>
            <span
              className="font-Khula font-normal text-base hover:text-LightPink transition-colors tracking-[2.4px] cursor-pointer"
              onClick={() => onNavigationClick('contact')}
            >
              CONTACT
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
