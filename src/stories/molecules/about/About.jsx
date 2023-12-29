import React from 'react';

function About() {
  return (
    <div>
      <div className="flex justify-center items-center">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center w-full">Your Title</h1>
      </div>

      {/* Content */}
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Image on Top, Text Below */}
        <div className="flex flex-col lg:flex-row">
          {/* Image for smaller screens */}
          <img
            src="src/stories/assets/Lynx/Lynx1.png"
            alt="Your Image"
            className="w-1/2  h-auto lg:hidden mx-auto"
          />

          {/* Text */}
          <div className="flex-1 lg:pl-4">
            <p>
              <b>Who are we?</b> <br />
              <br />
              We have spent centuries trying to refine the art of fencing. Yet, as we aspire for perfection, our ability to execute the art is plagued by grievous shortcomings - doubles, afterblows, mitelhaus, hand snipes, obsessions with side swords, and match winning geislings. For a long time we have questioned our techniques, but only now have we questioned just who should be using our techniques.

              Here at Fencing Club for Cats, we believe that cats, with their graceful lunges, born familiarity with sharps, and lack of opinions about martial validity, are the purrfect Fencers. Sign your cat up today to learn the martial art made for them.
            </p>
          </div>

          {/* Image for larger screens */}
          <div className="flex-1 hidden lg:block">
            <img
              src="src/stories/assets/Lynx/Lynx1.png"
              alt="Your Image"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;