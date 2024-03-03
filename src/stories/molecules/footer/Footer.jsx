import React from 'react';
import logoFullColourNavySvg from '../../assets/LogoFullColourNavy.svg';
import facebookSvg from '../../assets/facebook.svg';
import instagramSvg from '../../assets/instagram.svg';

function Footer() {

  return (
    <div>
      {/* Desktop/Tablet */}
      <div className="hidden md:flex justify-between items-center h-[150px] px-8">
        <div className="w-1/3 bg-white h-full flex justify-center items-center">
          <img src={logoFullColourNavySvg} alt="Logo" className="w-[200px]" />
        </div>
        <div className="w-1/3 bg-white h-full flex justify-center items-center space-x-4">
          {/*<span className="font-light font-inter">4601 Nickerson Rd, Columbus, OH 43228</span>*/}
        </div>
        <div className="w-1/3 bg-white h-full flex justify-center items-center space-x-4">
          <div className="flex items-center">
            <img src={facebookSvg} alt="Facebook Logo" className="w-10 h-10 mr-4" />
            <img src={instagramSvg} alt="Instagram Logo" className="w-10 h-10" />
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="flex md:hidden justify-between items-center h-[100px] px-4">
        <img src={logoFullColourNavySvg} alt="Logo" className="w-16" />
        {/*<div className="flex flex-col items-start">*/}
        {/*  <span className="font-light font-inter text-xs">4601 Nickerson Rd,</span>*/}
        {/*  <span className="font-light font-inter text-xs">Columbus, OH 43228</span>*/}
        {/*</div>*/}
        <div className="flex items-center space-x-2">
          <img src={facebookSvg} alt="Facebook Logo" className="w-6 h-6" />
          <img src={instagramSvg} alt="Instagram Logo" className="w-6 h-6" />
        </div>
      </div>
      {/* Desktop/Tablet */}
      <div className="hidden md:flex w-full bg-Navy justify-between md:justify-end items-center h-[70px] min-h-16">
        <div className="w-1/2 h-full flex justify-center items-center">
          <span className="text-xs text-white">© 2024 Columbus United Fencing Club. All rights reserved</span>
        </div>
        <div className="w-1/2  h-full flex justify-center items-center">
          <span></span>
        </div>
      </div>
      {/* Mobile */}
      <div className="flex md:hidden w-full bg-Navy justify-center items-center h-[70px] min-h-16 p-2">
        <span className="text-xs text-white">© 2024 Columbus United Fencing Club. All rights reserved</span>
      </div>
    </div>
  );
}

export default Footer;
