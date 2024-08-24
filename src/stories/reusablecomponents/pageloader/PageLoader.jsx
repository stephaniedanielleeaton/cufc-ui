import React from 'react';
import SpinnerSVG from '../../assets/spinner-svgrepo-com.svg';

export const PageLoader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="h-32 w-32 flex justify-center items-center">
        <img src={SpinnerSVG} alt="Loading..." className="h-20 w-20 animate-spin" />
        <span className="font-khula font-bold text-outerSpace">Loading ... </span>
      </div>
    </div>
  );
};

export default PageLoader;
