import React, { useState } from 'react';
import logoFullColourNavySvg from '../../assets/LogoFullColourNavy.svg';
import logoAllWhiteSvg from '../../assets/LogoAllWhite.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-x-auto">
      <nav className="w-full bg-Navy flex justify-between md:justify-end items-center h-[70px] min-h-16">
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div>
            <button
              type="button"
              className="inline-flex items-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
            </button>
          </div>

          <div className={isOpen ? 'block absolute left top-16' : 'hidden absolute left top-16'}>
            <div className="px-4 py-2 rounded-md space-y-0 bg-Navy w-full">
              <a
                href="#"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base whitespace-nowrap" // Added whitespace-nowrap class
                onClick={() => {
                  onNavigationClick('signup');
                }}
              >
                Sign Up
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base whitespace-nowrap" // Added whitespace-nowrap class
                onClick={() => {
                  onNavigationClick('donate');
                }}
              >
                Donate
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base whitespace-nowrap" // Added whitespace-nowrap class
                onClick={() => {
                  onNavigationClick('donate');
                }}
              >
                Contact
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base whitespace-nowrap" // Added whitespace-nowrap class
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
        </div>

        {/* Center Content */}
        <div className="w-1/3 absolute inset-x-0 mx-auto text-center p-2 md:hidden">
          <img src={logoAllWhiteSvg} alt="Logo" className="px-4" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-around items-center h-full md: w-1/2 lg:w-1/3">
          <button type="button" className="button h-full flex-grow flex justify-center items-center">
            <span className="font-Khula text-base font-normal text-white">ADMIN</span>
          </button>
          <button type="button" className="button h-full flex-grow flex justify-center items-center">
            <span className="font-Khula text-base font-normal text-white">DASHBOARD</span>
          </button>
          <button type="button" className="button bg-MediumPink h-full flex-grow flex justify-center items-center">
            <span className="font-Khula font-normal text-base text-white">SIGN IN</span>
          </button>
          <div className="flex-grow"></div>
          {/* Added flex-grow */}
        </div>

      </nav>

      <div>
        <div className="hidden md:flex justify-around items-center h-[187px] px-8">
          <div className="flex-none md:flex justify-center items-center bg-white h-full">
            <img src={logoFullColourNavySvg} alt="Logo" className="w-[200px]" />
          </div>
          <div
            className="md:w-1/2 lg:w-1/3 bg-white h-full flex items-center space-x-4 justify-center"> {/* Updated justify-end */}
            <div className="button flex items-center whitespace-nowrap">
              <span className="font-Khula font-normal text-base text-black tracking-[2.4px]">ABOUT US</span>
            </div>
            <div className="button flex items-center whitespace-nowrap">
              <span className="font-Khula font-normal text-base text-black tracking-[2.4px]">CLASSES</span>
            </div>
            <div className="button flex items-center whitespace-nowrap">
              <span className="font-Khula font-normal text-base text-black tracking-[2.4px]">EVENTS</span>
            </div>
            <div className="button flex items-center whitespace-nowrap">
              <span className="font-Khula font-normal text-base text-black tracking-[2.4px]">CONTACT US</span>
            </div>
          </div>
        </div>


      </div>

    </div>
  );
}

export default Nav;
