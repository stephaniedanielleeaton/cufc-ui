import React from 'react';

function AboutUs({ onNavigationClick }) {

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen py-10">
      <h1 className="text-4xl text-wine font-khula font-bold mb-6 text-center">About Columbus United Fencing Club</h1>
      <div className="w-9/12 border-t-2 border-wine mx-auto mb-10"></div>

      {/* Table of Contents */}
      <div className="max-w-screen-lg font-khula md:px-20 px-8 bg-white shadow-lg mx-auto rounded-lg py-8 mb-10">
        <h2 className="text-2xl text-Navy font-bold mb-4 text-center md:text-left">Table of Contents</h2>
        <ul className="pl-6 mb-4 list-none md:list-disc">
          <li className="mb-2 text-left">
            <button
              onClick={() => scrollToSection('what-is-hema')}
              className="text-blue-600 hover:text-blue-800 w-full text-left"
            >
              What is Historical European Martial Arts (HEMA)?
            </button>
          </li>
          <li className="mb-2 text-left">
            <button
              onClick={() => scrollToSection('why-choose-us')}
              className="text-blue-600 hover:text-blue-800 w-full text-left"
            >
              Why Choose Columbus United Fencing Club?
            </button>
          </li>
          <li className="mb-2 text-left">
            <button
              onClick={() => scrollToSection('how-to-start')}
              className="text-blue-600 hover:text-blue-800 w-full text-left"
            >
              How Do I Start?
            </button>
          </li>
        </ul>
      </div>

      <div className="max-w-screen-lg font-khula md:px-20 px-8 bg-white shadow-lg mx-auto rounded-lg py-8">
        <div id="what-is-hema" className="mb-10">
          <h2 className="font-bold text-2xl text-Navy mb-4">What is Historical European Martial Arts (HEMA)?</h2>
          <p className="font-light text-sm mb-4">
            Historical European Martial Arts, or HEMA for short, are martial arts from European countries that are no
            longer used in modern times.
          </p>
          <p className="font-light text-sm mb-4">
            Sometimes called historical fencing, HEMA involves fighting with weapons like:
          </p>
          <ul className="pl-6 mb-4 list-none md:list-disc">
            <li className="mb-2">Longsword</li>
            <li className="mb-2">Rapier</li>
            <li className="mb-2">Saber (sometimes spelled sabre)</li>
            <li className="mb-2">Dagger</li>
            <li className="mb-2">Arming sword and buckler (a small shield)</li>
            <li className="mb-2">Smallsword</li>
            <li className="mb-2">Staff</li>
          </ul>
          <p className="font-light text-sm mb-4">
            Unlike live-action roleplaying (LARP), HEMA is based on a handful of surviving fencing instruction manuals
            and manuscripts written in the late Middle Ages and Renaissance periods.
          </p>
          <p className="font-light text-sm">
            Our coaches have studied the works of German fencing masters Johannes Liechtenauer and Joachim Meyer and
            Italian master Fiore dei Liberi for over a decade and pass on the knowledge of centuries-old traditions in
            every class.
          </p>
        </div>

        <div id="why-choose-us" className="mb-10">
          <h2 className="font-bold text-2xl text-Navy mb-4">Why Choose Columbus United Fencing Club?</h2>
          <p className="font-light text-sm mb-4">
            Our club members have joined for many different reasons. Here are a few we commonly hear:
          </p>
          <div className="mb-6">
            <h3 className="font-bold text-wine text-lg mb-2">To Learn</h3>
            <p className="font-light text-sm">
              While our lessons don't require members to study advanced techniques directly from the manuscripts,
              there's so much to learn.
              You'll learn the historical context and purpose of various weapons and how they were used, and then
              practice applying that information through sparring.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="font-bold text-wine text-lg mb-2">To Get Active (with Swords!)</h3>
            <p className="font-light text-sm">
              Several of our members have joined with little to no athletic background—just a desire to exercise and an
              interest in swords!
            </p>
          </div>
          <div className="mb-6">
            <h3 className="font-bold text-wine text-lg mb-2">To Make New Friends</h3>
            <p className="font-light text-sm">
              Columbus United Fencing Club strives to provide an inclusive environment for all who enter through our
              doors. This makes it relatively easy to find a group of friends who support you
              and your endeavors, in and outside of the school itself.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="font-bold text-wine text-lg mb-2">To Have Fun</h3>
            <p className="font-light text-sm">
              Whether you want to compete in tournament events or translate what you've learned in training to
              choreography, you'll find there are no wrong ways to have fun at Columbus United
              Fencing Club.
            </p>
          </div>
        </div>

        <div id="how-to-start" className="mb-10">
          <h2 className="font-bold text-2xl text-Navy mb-4">How Do I Start?</h2>
          <p className="font-light text-sm mb-4">
            Your current level of experience will determine how you begin your journey with us.
          </p>
          <div className="mb-6">
            <h3 className="font-bold text-wine text-lg mb-2">I'm New</h3>
            <p className="font-light text-sm">
              If you are completely new to HEMA or fencing, please check our our introductory course <button
              onClick={() => onNavigationClick('intro')}
              className="text-blue-600 hover:text-blue-800"
            >
              here
            </button>. However, if you would like to watch a class first, let us know when on our <button
              onClick={() => onNavigationClick('contact')}
              className="text-blue-600 hover:text-blue-800"
            >
              contact
            </button> page.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="font-bold text-wine text-lg mb-2">I've done this before &#128526;</h3>
            <p className="font-light text-sm">
              If you have participated in Historical European Martial Arts before, and you know what you are getting
              yourself into,
              feel free to use our <button
              onClick={() => onNavigationClick('contact')}
              className="text-blue-600 hover:text-blue-800"
            >
              contact
            </button> page to let us know when you would like to drop in. We allow fencers with previous experience to
              drop into a class for free before making a
              commitment.  See our classes and pricing structure <button
              onClick={() => onNavigationClick('classes')}
              className="text-blue-600 hover:text-blue-800"
            >
              here
            </button>.
            </p>
          </div>
        </div>

        <div id="contact">
          <h2 className="font-bold text-2xl text-Navy mb-4">Interested in Historical Fencing? Contact Us for More Information</h2>
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
  );
}

export default AboutUs;
