import React from 'react';

function Classes({ onNavigationClick }) {
  return (
    <div className="min-h-screen py-10">
      <h1 className="text-4xl text-wine font-khula font-bold mb-6 text-center">Sword Fighting Classes in Columbus, Ohio</h1>
      <div className="w-9/12 border-t-2 border-wine mx-auto mb-4"></div>
      <div className="max-w-screen-lg font-khula md:px-20 p-4 bg-white">
        <div className="md:mr-4 md:mb-0 px-4">
          <text className="font-light text-sm">
            If you've dreamt of becoming a sword-wielding hero in the Columbus area, you've found the right place.
            Columbus United Fencing Club specializes in teaching Historical European Martial Arts (HEMA).
          </text>
          <h2 className="font-bold text-2xl text-Navy pt-4">Historical European Martial Arts Fundamentals</h2>
          <text className="font-light text-sm">
            If you're new to the art of historical fencing, we encourage you to start with our monthly fundamental class.
            Over the course of 4 weeks, you'll receive instruction in basic footwork, form, and technique. Lender gear will be provided.
          </text>
          <h2 className="font-bold text-2xl text-Navy pt-4">Longsword Fencing</h2>
          <text className="font-light text-sm">
            Sharpen your existing fencing skills with the longsword, a favorite of many historical European martial artists.
          </text>
          <h2 className="font-bold text-2xl text-Navy pt-4">Rapier and Dagger</h2>
          <text className="font-light text-sm">
            Channel your inner musketeer with not one but two beautiful blades. En garde!
          </text>
          <h2 className="font-bold text-2xl text-Navy pt-4">Other Weapons</h2>
          <text className="font-light text-sm">
            From time to time, our academy provides lessons for other weapons: sword and buckler, messer, and more! Talk to one of our coaches for more information.
          </text>
          <h2 className="font-bold text-2xl text-Navy pt-4">Footwork and Thrusting</h2>
          <text className="font-light text-sm">
            Footwork is a key component of this sport, so we run a series of footwork drills and more advanced techniques for thrusting.
          </text>
          <h2 className="font-bold text-2xl text-Navy pt-4">Open Sparring</h2>
          <text className="font-light text-sm">
            Put what you've learned in training to the test through combat with your fellow fencers.
          </text>
          <div className="text-center my-8">
            <button
              className="tracking-wider border-2 border-black text-sm font-bold my-4 px-4 py-2 rounded-none md:w-auto hover:bg-black hover:text-white hover:border-white"
              onClick={() => onNavigationClick('joinNow')}
            >
              JOIN NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Classes;
