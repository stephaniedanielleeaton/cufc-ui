import React from 'react';

function Classes({ onNavigationClick }) {
  // Function to handle smooth scrolling
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen py-10">
      <h1 className="text-4xl text-wine font-khula font-bold mb-6 text-center">
        Sword Fighting Classes in Columbus, Ohio
      </h1>
      <div className="w-9/12 border-t-2 border-wine mx-auto mb-10"></div>

      {/* Table of Contents */}
      <div className="max-w-screen-lg font-khula md:px-20 px-8 bg-white shadow-lg mx-auto rounded-lg py-8 mb-10">
        <h2 className="text-2xl text-Navy font-bold mb-4">Table of Contents</h2>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">
            <button
              onClick={() => scrollToSection('regular-class-offerings')}
              className="text-blue-600 hover:text-blue-800"
            >
              Regular Class Offerings
            </button>
          </li>
          <li className="mb-2">
            <button
              onClick={() => scrollToSection('pricing-options')}
              className="text-blue-600 hover:text-blue-800"
            >
              What Are Your Prices and Options?
            </button>
          </li>
        </ul>
      </div>

      <div className="max-w-screen-lg font-khula md:px-20 px-8 bg-white shadow-lg mx-auto rounded-lg py-4">
        <div className="mb-10">
          <h2 id="regular-class-offerings" className="font-bold text-2xl text-wine mb-4">Regular Class Offerings</h2>
          <p className="font-light text-sm mb-4">
            If you've dreamt of becoming a sword-wielding hero in the Columbus area, you've found the right place.
            Columbus United Fencing Club specializes in teaching Historical European Martial Arts (HEMA).
          </p>
          <div id="hema-fundamentals" className="mb-6">
            <h3 className="font-bold text-Navy text-lg mb-2">Historical European Martial Arts Fundamentals</h3>
            <p className="font-light text-sm mb-2 italic">Wednesdays @ 6:30 - 8:30 pm; runs alongside Open Longsword</p>
            <p className="font-light text-sm">
              If you're new to the art of historical fencing, we encourage you to start with our monthly fundamental
              class. Over the course of 4 weeks, you'll receive instruction in basic footwork, form, and technique.
              Lender gear will be provided.
            </p>
          </div>
          <div id="longsword-fencing" className="mb-6">
            <h3 className="font-bold text-Navy text-lg mb-2">Longsword Fencing</h3>
            <p className="font-light text-sm italic mb-2">Wednesdays @ 6:30 - 8:30 pm</p>
            <p className="font-light text-sm">
              Sharpen your existing fencing skills with the longsword, a favorite of many historical European martial
              artists.
            </p>
          </div>
          <div id="military-saber" className="mb-6">
            <h3 className="font-bold text-Navy text-lg mb-2">Military Saber</h3>
            <p className="font-light text-sm italic mb-2">Mondays @ 7 - 9 pm</p>
            <p className="font-light text-sm">
              Practice cuts and blocks with military saber.
            </p>
          </div>
          <div id="rapier-dagger" className="mb-6">
            <h3 className="font-bold text-Navy text-lg mb-2">Footwork and Thrusting with Rapier and Dagger</h3>
            <p className="font-light text-sm italic mb-2">Thursdays @ 7 - 9 pm</p>
            <p className="font-light text-sm">
              Footwork is a key component of this sport, so we run a series of footwork drills and more advanced
              techniques for thrusting.
              Plus, you get to channel your inner musketeer with not one but two beautiful blades. <b>En garde!</b>
            </p>
          </div>
          <div id="tournament-prep" className="mb-6">
            <h3 className="font-bold text-Navy text-lg mb-2">Tournament Prep Classes</h3>
            <p className="font-light text-sm italic mb-2">Saturdays @ 11 am - 1 pm</p>
            <p className="font-light text-sm">
              Put what you've learned in training to the test through combat with your fellow fencers in our tournament
              prep classes.
            </p>
          </div>
          <div id="other-weapons" className="mb-6">
            <h3 className="font-bold text-Navy text-lg mb-2">Other Weapons</h3>
            <p className="font-light text-sm mb-2">
              From time to time, our academy provides lessons for other weapons: sword and buckler, messer, and more!
              Talk to one of our coaches for more information.
            </p>
          </div>
        </div>
        <div id="pricing-options" className="mb-10">
          <h2 className="font-bold text-2xl text-wine mb-4">What Are Your Prices and Options?</h2>
          <p className="font-light text-sm mb-4">
            We offer a range of class and pricing options tailored to suit different needs and experience levels.
          </p>
          <div className="mb-6">
            <h3 className="font-bold text-Navy text-lg mb-2">Historical European Martial Arts Fundamentals</h3>
            <p className="font-light text-sm">
              Our Beginner Course is perfect for those new to historical fencing, providing a comprehensive introduction
              to HEMA fundamentals
              for $110 for the full four week course.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="font-bold text-Navy text-lg mb-2">Full Class Access</h3>
            <p className="font-light text-sm">
              For those with prior experience, our Full Class Access option grants unlimited access to all regular weekly
              classes and social events at $110 per month.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="font-bold text-Navy text-lg mb-2">Saturday Classes</h3>
            <p className="font-light text-sm">
              If you prefer to focus on sparring and tournament style fencing, the Saturday Classes option offers access
              to Saturday sessions for $65 per month.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="font-bold text-Navy text-lg mb-2">Family Plan</h3>
            <p className="font-light text-sm">
              Families can take advantage of our Family Plan, which includes full class access for one member at $110
              per month,
              plus $65 per month for each additional family member.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="font-bold text-Navy text-lg mb-2">Drop In</h3>
            <p className="font-light text-sm">
              For those looking to join us occasionally, we also offer a Per Class Drop-In Fee of $20, allowing access
              to one day of classes.
            </p>
          </div>
        </div>
        <div id="contact">
          <h2 className="font-bold text-2xl text-wine mb-4">
            Interested in Historical Fencing? Contact Us for More Information
          </h2>
          <p className="font-light text-sm">
            To learn more about Columbus United Fencing Club and our program,&nbsp;
            <button onClick={() => onNavigationClick('contact')} className="text-blue-600 hover:text-blue-800">
              contact us
            </button>
            .&nbsp;Alternatively, click&nbsp;
            <button onClick={() => onNavigationClick('joinNow')} className="text-blue-600 hover:text-blue-800">
              here
            </button>
            &nbsp;to sign up today.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Classes;
