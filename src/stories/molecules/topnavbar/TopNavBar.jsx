import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCat } from '@fortawesome/free-solid-svg-icons';

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-ashGray text-white w-full h-10 flex flex-row">
      <div className="flex flex-row w-2/3 pt-2">
        <FontAwesomeIcon icon={faCat} className="h-6 w-6 px-2" />
        <p className="w-full">Fencing Club for Cats</p>
      </div>
      <div className="flex justify-end w-1/3 h-full">
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
      <div className={`${isOpen ? 'block' : 'hidden'} absolute right-2 z-50 mt-2 `}>
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
    </nav>
  );
};

export default TopNavbar;
