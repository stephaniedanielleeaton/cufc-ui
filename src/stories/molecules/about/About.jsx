import React from 'react';
import BaseText from '../../atoms/text/BaseText.jsx';

function About() {
  const title = {
    content: 'Fencing School For Cats',
    color: 'white',
    weight: 'bold',
    size: '3xl',
    font: 'poppins',
  };

  const content = {
    whoAreWe: {
      content: 'Who are we?',
      color: 'white',
      weight: 'bold',
      size: 'md',
      font: 'poppins',
    },
    description: {
      content: `We have spent centuries trying to refine the art of fencing. Yet, as we aspire for perfection, our ability
      to execute the art is plagued by grievous shortcomings - doubles, afterblows, mitelhaus, hand snipes,
      obsessions with side swords, and match winning geislings. For a long time we have questioned our
      techniques, but only now have we questioned just who should be using our techniques. Here at Fencing Club
      for Cats, we believe that cats, with their graceful lunges, born familiarity with sharps, and lack of
      opinions about martial validity, are the purrfect Fencers. Sign your cat up today to learn the martial art
      made for them.`,
      color: 'white',
      weight: 'light',
      size: 'md',
      font: 'poppins',
    },
  };

  return (
    <div className="bg-deepSeaBlue">
      <div className="flex justify-center items-center p-4">
        {/* Title */}
        <BaseText {...title} />
      </div>

      {/* Content */}
      <div className="max-w-screen-xl mx-auto px-4 text-white">
        {/* Image and Text */}
        <div className="flex flex-col lg:flex-row">
          {/* Image for smaller screens */}
          <img
            src="src/stories/assets/Lynx/fencingkitten.jpg"
            alt="Your Image"
            className="w-1/2 h-auto lg:hidden mx-auto border-8 border-black"
          />

          {/* Text */}
          <div className="flex-1">
            <BaseText {...content.whoAreWe} />
            <br />
            <BaseText {...content.description} />
          </div>

          {/* Image for larger screens */}
          <div className="flex-1 hidden lg:block">
            <img src="src/stories/assets/Lynx/fencingkitten.jpg" alt="Your Image" className="w-full h-auto lg:p-8" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
