import React, { useState } from 'react';
import logoFullColourNavySvg from '../../assets/LogoFullColourNavy.svg';
import logoAllWhiteSvg from '../../assets/LogoAllWhite.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
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
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base"
                onClick={() => {
                  onNavigationClick('signup');
                }}
              >
                Sign Up
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base"
                onClick={() => {
                  onNavigationClick('donate');
                }}
              >
                Donate
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base"
                onClick={() => {
                  onNavigationClick('donate');
                }}
              >
                Contact
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base"
                onClick={() => {
                  onNavigationClick('about');
                }}
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base"
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
        <div className="hidden md:flex justify-start items-center h-full">
          <button type="button" className="button w-[160px] flex justify-center items-center">
            <span className="font-Khula text-base font-normal text-white">DASHBOARD</span>
          </button>
          <button type="button" className="button bg-MediumPink w-[160px] h-full flex justify-center items-center">
            <span className="font-Khula font-normal text-base text-white">SIGN IN</span>
          </button>
          <div className="button w-[154px]"></div>
        </div>
      </nav>

      <div>
        <div className="hidden md:flex justify-between items-center h-[187px] px-8">
          <div className="w-1/3 bg-white h-full flex justify-center items-center">
            <img src={logoFullColourNavySvg} alt="Logo" className="w-[200px]" />
          </div>
          <div className="w-1/3 bg-white h-full flex justify-center items-center space-x-4">
            <div className="button flex justify-center items-center">
              <span className="font-Khula font-normal text-base text-black">ABOUT US</span>
            </div>
            <div className="button flex justify-center items-center">
              <span className="font-Khula font-normal text-base text-black">CLASSES</span>
            </div>
            <div className="button flex justify-center items-center">
              <span className="font-Khula font-normal text-base text-black">EVENTS</span>
            </div>
            <div className="button flex justify-center items-center">
              <span className="font-Khula font-normal text-base text-black">CONTACT US</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
