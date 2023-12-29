import React from 'react';

function About() {
  return (
    <div>
      <div className="flex justify-center items-center">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center w-full">Your Title</h1>
      </div>
      <div className="w-full flex justify-center">
        <div className="max-w-screen-xl w-full px-4 flex">
          {/* Text on Left */}
          <div className="flex-1">
            <p>
              <b>Who are we?</b> <br />
              <br />
              We have spent centuries trying to refine the art of fencing. Yet, as we aspire for perfection, our ability
              to execute the art is plagued by grievous shortcomings - doubles, afterblows, mitelhaus, hand snipes,
              obsessions with side swords, and match winning geislings. For a long time we have questioned our
              techniques, but only now have we questioned just who should be using our techniques. <br />
              <br />
              Here at Fencing Club for Cats, we believe that cats, with their graceful lunges, born familiarity with
              sharps, and lack of opinions about martial validity, are the purrfect Fencers. Sign your cat up today to
              learn the martial art made for them.
            </p>
          </div>

          {/* Image on Right */}
          <div className="flex-1">
            <img src="src/stories/assets/Lynx/Lynx1.png" alt="Your Image" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
