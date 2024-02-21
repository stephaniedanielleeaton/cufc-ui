import React from 'react';
import svgUrl from '../../assets/LogoFullColourNavy.svg';

function Nav() {
  return (
    <div>
      <div className="pl-24 w-full bg-Navy flex justify-end items-center h-[70px]">
        <div className="button w-[160px] flex justify-center items-center">
          <span className="font-Khula font-medium text-base text-white">DASHBOARD</span>
        </div>
        <div className="button bg-MediumPink w-[160px] h-full flex justify-center items-center">
          <span className="font-Khula font-medium text-base text-white">SIGN IN</span>
        </div>
      </div>
      <div className="flex justify-between items-center h-[187px] px-8">
        <div className="w-1/3 bg-white h-full flex justify-center items-center">
          {/* Image goes here */}
          <img src={svgUrl} alt="Logo" className="w-[200px]" />
        </div>
        <div className="w-1/3 bg-white h-full flex justify-center items-center space-x-4">
          {/* Navigation items go here */}
          <div className="button flex justify-center items-center">
            <span className="font-Khula font-medium text-base text-black">ABOUT US</span>
          </div>
          <div className="button flex justify-center items-center">
            <span className="font-Khula font-medium text-base text-black">CLASSES</span>
          </div>
          <div className="button flex justify-center items-center">
            <span className="font-Khula font-medium text-base text-black">EVENTS</span>
          </div>
          <div className="button flex justify-center items-center">
            <span className="font-Khula font-medium text-base text-black">CONTACT US</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
