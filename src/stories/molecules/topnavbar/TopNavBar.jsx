/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import BaseText from '../../atoms/text/BaseText.jsx';
import BaseButton from '../../molecules/button/BaseButton.jsx';

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScreenTooSmall, setIsScreenTooSmall] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-deepSeaBlue to-lavender text-white w-full flex justify-between items-center px-4">
      <div className="flex-none h-full">
        <div className="flex md:hidden">
          <button
            type="button"
            className="inline-flex items-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
          </button>
          <div className={`${isOpen ? 'block' : 'hidden'} absolute right-2 z-50 mt-2`}>
            <div
              className="-mt-1 px-4 py-5 rounded-md space-y-0 bg-ashGray text-white w-full"
              onClick={() => setIsOpen(!isOpen)}
            >
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Link 1
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Link 2
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Link 3
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3 absolute inset-x-0 mx-auto text-center p-2">
        <BaseText content="FCFC" color="white" weight="bold" size="3xl" font="poppins" />
      </div>
      <div className="w-1/3 ">
        <div className="justify-between p-4 items-center hidden md:flex">
          <BaseText className="px-2 hover:text-blue-300" content="Admin" color="white" weight="normal" size="sm"
                  font="poppins" />
          <BaseText className="px-2 hover:text-blue-300" content="About" color="white" weight="normal" size="sm"
                  font="poppins" />
          <BaseText className="px-2 hover:text-blue-300" content="Contact" color="white" weight="normal" size="sm"
                  font="poppins" />
          <BaseButton className="px-2 whitespace-nowrap" text={'Sign Up'} color={'transparent'} border={'white'} size={'sm'} />
          <FontAwesomeIcon icon={faUser} className="h-6 w-6" />
        </div>
        <div className="flex justify-end" >
          <FontAwesomeIcon icon={faUser} className="h-6 w-6 md:hidden" />
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
