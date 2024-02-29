import React, { useState } from 'react';
import logoFullColourNavySvg from '../../assets/LogoFullColourNavy.svg';
import logoAllWhiteSvg from '../../assets/LogoAllWhite.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Mobile Navigation */}
      <div className="md:hidden w-full bg-Navy flex items-center h-[70px] min-h-16">
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
          <div className={isOpen ? 'block absolute left top-16' : 'hidden absolute left top-16'}>
            <div className="px-4 py-2 rounded-md space-y-0 bg-Navy w-full">
              <a
                href="#"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base whitespace-nowrap"
                onClick={() => {
                  onNavigationClick('signup');
                }}
              >
                Sign Up
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base whitespace-nowrap"
                onClick={() => {
                  onNavigationClick('donate');
                }}
              >
                Donate
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base whitespace-nowrap"
                onClick={() => {
                  onNavigationClick('contact');
                }}
              >
                Contact
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base whitespace-nowrap"
                onClick={() => {
                  onNavigationClick('about');
                }}
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base whitespace-nowrap" // Added whitespace-nowrap class
                onClick={() => {
                  onNavigationClick('admin');
                }}
              >
                Admin
              </a>
            </div>
          </div>
        </nav>

        {/* Center Content */}
        <div className="w-1/3 absolute inset-x-0 mx-auto text-center p-2 md:hidden flex justify-center items-center">
          <img src={logoAllWhiteSvg} alt="Logo" className="px-4 max-h-[64px]" />
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-around items-center min-h-16 bg-Navy h-full">
        <div></div>
        <nav
          className="md:w-1/2 lg:w-1/3 h-full flex items-center justify-center text-white">
          <div className="button flex items-center px-4 whitespace-nowrap">
            <span
              className="font-Khula font-normal text-base hover:text-MediumGray tracking-[2.4px]">ADMIN</span>
          </div>
          <div className="button flex items-center px-4 whitespace-nowrap">
            <span
              className="font-Khula font-normal text-base hover:text-MediumGray tracking-[2.4px]">DASHBOARD</span>
          </div>
          <div className="button flex items-center whitespace-nowrap bg-MediumPink min-h-16 px-4">
            <span className="font-Khula font-normal text-base h-full hover:text-MediumGray tracking-[2.4px]">SIGN IN</span>
          </div>
        </nav>
      </div>

      <div>
        <div className="hidden md:flex justify-around items-center h-[187px] px-8">
          <div className="flex-none md:flex justify-center items-center bg-white h-full">
            <img src={logoFullColourNavySvg} alt="Logo" className="w-[200px]" />
          </div>
          <nav
            className="md:w-1/2 lg:w-1/3 bg-white h-full flex items-center space-x-4 justify-center">
            <div className="button flex items-center whitespace-nowrap">
              <span className="font-Khula font-normal text-base text-black hover:text-MediumGray tracking-[2.4px]">ABOUT US</span>
            </div>
            <div className="button flex items-center whitespace-nowrap">
              <span
                className="font-Khula font-normal text-base text-black hover:text-MediumGray tracking-[2.4px]">CLASSES</span>
            </div>
            <div className="button flex items-center whitespace-nowrap">
              <span
                className="font-Khula font-normal text-base text-black hover:text-MediumGray tracking-[2.4px]">EVENTS</span>
            </div>
            <div className="button flex items-center whitespace-nowrap">
              <span className="font-Khula font-normal text-base text-black hover:text-MediumGray tracking-[2.4px]">CONTACT US</span>
            </div>
          </nav>
        </div>


      </div>

    </div>
  );
}

export default Nav;
