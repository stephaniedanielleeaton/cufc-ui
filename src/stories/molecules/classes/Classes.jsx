import React from 'react';

function Classes({ onNavigationClick }) {
  return (
    <div className="min-h-screen py-10">
      <h1 className="text-4xl text-wine font-khula font-bold mb-6 text-center">Sword Fighting Classes in Columbus, Ohio</h1>
      <div className="w-9/12 border-t-2 border-wine mx-auto mb-10"></div>
      <div className="max-w-screen-lg font-khula md:px-20 px-8 bg-white shadow-lg mx-auto rounded-lg py-4">
        <div className="mb-10">
          <p className="font-light text-sm mb-4">
            If you've dreamt of becoming a sword-wielding hero in the Columbus area, you've found the right place.
            Columbus United Fencing Club specializes in teaching Historical European Martial Arts (HEMA).
          </p>
          <div className="mb-6">
            <h3 className="font-bold text-Navy text-lg mb-2">Historical European Martial Arts Fundamentals</h3>
            <p className="font-light text-sm">
              If you're new to the art of historical fencing, we encourage you to start with our monthly fundamental
              class. Over the course of 4 weeks, you'll receive instruction in basic footwork, form, and technique.
              Lender gear will be provided.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="font-bold text-Navy text-lg mb-2">Longsword Fencing</h3>
            <p className="font-light text-sm">
              Sharpen your existing fencing skills with the longsword, a favorite of many historical European martial
              artists.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="font-bold text-Navy text-lg mb-2">Rapier and Dagger</h3>
            <p className="font-light text-sm">
              Channel your inner musketeer with not one but two beautiful blades. En garde!
            </p>
          </div>
          <div className="mb-6">
            <h3 className="font-bold text-Navy text-lg mb-2">Other Weapons</h3>
            <p className="font-light text-sm">
              From time to time, our academy provides lessons for other weapons: sword and buckler, messer, and more!
              Talk to one of our coaches for more information.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="font-bold text-Navy text-lg mb-2">Footwork and Thrusting</h3>
            <p className="font-light text-sm">
              Footwork is a key component of this sport, so we run a series of footwork drills and more advanced techniques for thrusting.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="font-bold text-Navy text-lg mb-2">Open Sparring</h3>
            <p className="font-light text-sm">
              Put what you've learned in training to the test through combat with your fellow fencers.
            </p>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-2xl text-wine mb-4">Interested in Historical Fencing? Contact Us for More
            Information</h2>
          <p className="font-light text-sm">
            To learn more about Columbus United Fencing Club and our program,&nbsp;
            <button
              onClick={() => onNavigationClick('contact')}
              className="text-blue-600 hover:text-blue-800"
            >
              contact us
            </button>
            .&nbsp;Alternatively, click&nbsp;
            <button
              onClick={() => onNavigationClick('joinNow')}
              className="text-blue-600 hover:text-blue-800"
            >
              here
            </button>
            &nbsp;to sign up today.
          </p>
        </div>
      </div>
    </div>
  )
    ;
}

export default Classes;
