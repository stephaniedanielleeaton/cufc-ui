import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCat } from '@fortawesome/free-solid-svg-icons';

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-gradient-to-r from-blue-500 text-white py-4 px-6 w-full h-16" >
      <div className="flex-initial mr-4">
        <FontAwesomeIcon icon={faCat} className="h-6 w-6 px-2" />
      </div>
      <div className="flex-1 text-center">
        <p className="w-full text-center text-white font-poppins text-24 font-bold">FCFC</p>
      </div>
      <div className="flex-initial ml-4">
        <button
          type="button"
          className="inline-flex items-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
};

export default TopNavbar;
