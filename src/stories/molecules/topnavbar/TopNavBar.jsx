import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import BaseText from '../../atoms/text/BaseText.jsx';
import BaseButton from '../../molecules/button/BaseButton.jsx';

function TopNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-deepSeaBlue to-wine/50 text-white w-full flex justify-between items-center px-4 min-h-16">
      <div className="flex-none h-full">
        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <button
            type="button"
            className="inline-flex items-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
          </button>
          <div className={isOpen ? 'block absolute left top-16' : 'hidden absolute left top-16'}>
            <div className="px-4 py-2 rounded-md space-y-0 bg-deepSeaBlue w-full">
              <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Sign Up
              </a>
              <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </a>
              <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                About
              </a>
              <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Admin
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Center Content */}
      <div className="w-1/3 absolute inset-x-0 mx-auto text-center p-2">
        <BaseText content="FCFC" color="white" weight="bold" size="3xl" font="poppins" />
      </div>

      {/* Desktop Navigation */}
      <div className="w-1/3">
        <div className="lg:flex justify-between items-center hidden">
          <BaseText
            className="px-2 hover:text-blue-300"
            content="Admin"
            color="white"
            weight="normal"
            size="sm"
            font="poppins"
          />
          <BaseText
            className="px-2 hover:text-blue-300"
            content="About"
            color="white"
            weight="normal"
            size="sm"
            font="poppins"
          />
          <BaseText
            className="px-2 hover:text-blue-300"
            content="Contact"
            color="white"
            weight="normal"
            size="sm"
            font="poppins"
          />
          <BaseButton className="px-2" text={'Sign Up'} color={'transparent'} border={'white'} size={'sm'} />
          <FontAwesomeIcon icon={faUser} className="h-6 w-6" />
        </div>
        <div className="flex justify-end">
          <FontAwesomeIcon icon={faUser} className="h-6 w-6 lg:hidden" />
        </div>
      </div>
    </nav>
  );
}

export default TopNavbar;
