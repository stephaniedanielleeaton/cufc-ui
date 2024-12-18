import React from 'react';
import Footer from '../../footer/Footer.jsx';

function AboutUs({ onNavigationClick, gearRecommendationsLink }) {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const gearRedirect = () => {
    window.open(gearRecommendationsLink);
  }

  return (
    <div className="min-h-screen py-10 bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-md mb-12">
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center py-4 space-y-2 sm:space-y-0">
            <button
              onClick={() => onNavigationClick('intro')}
              className="px-6 py-2 text-Navy hover:text-wine transition-colors font-semibold mx-4 flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              Introduction to HEMA Course
            </button>
            <div className="h-4 border-r border-gray-300 hidden sm:block"></div>
            <button
              onClick={() => onNavigationClick('classes')}
              className="px-6 py-2 text-Navy hover:text-wine transition-colors font-semibold mx-4 flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Class Schedule & Pricing
            </button>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-5xl text-wine font-khula font-bold mb-4">
          Columbus United Fencing Club
        </h1>
        <div className="w-32 h-1 bg-wine mx-auto"></div>
      </header>

      <div className="max-w-screen-lg mx-auto px-4">
        {/* Table of Contents */}
        <section className="mb-12 bg-white shadow-xl rounded-xl p-8">
          <h2 className="text-3xl font-bold text-Navy mb-6 text-center">Quick Navigation</h2>
          <nav className="grid md:grid-cols-2 gap-4">
            {[
              { id: 'what-is-hema', title: 'What is HEMA?' },
              { id: 'why-choose-us', title: 'Why Choose Us?' },
              { id: 'how-to-start', title: 'Getting Started' },
              { id: 'gear', title: 'Recommended Gear' }
            ].map(({ id, title }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="p-4 text-left rounded-lg bg-gray-50 hover:bg-wine/10 transition-colors group"
              >
                <span className="font-semibold text-Navy group-hover:text-wine transition-colors">{title}</span>
              </button>
            ))}
          </nav>
        </section>

        {/* Main Content */}
        <main className="bg-white shadow-xl rounded-xl p-8 md:p-12">
          {/* What is HEMA Section */}
          <section id="what-is-hema" className="mb-16">
            <h2 className="text-3xl font-bold text-Navy mb-6">What is Historical European Martial Arts?</h2>
            <div className="space-y-6 text-gray-700">
              <p className="leading-relaxed">
                Historical European Martial Arts, or HEMA for short, are martial arts from European countries that are no
                longer used in modern times.
              </p>
              <div>
                <p className="mb-4">Sometimes called historical fencing, HEMA involves fighting with weapons like:</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Longsword',
                    'Rapier',
                    'Saber',
                    'Dagger',
                    'Arming sword and buckler',
                    'Smallsword',
                    'Staff'
                  ].map((weapon, index) => (
                    <div key={index} className="flex items-center space-x-2 bg-gray-50 p-3 rounded">
                      <span className="text-wine">•</span>
                      <span>{weapon}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="leading-relaxed">
                Unlike live-action roleplaying (LARP), HEMA is based on surviving fencing instruction manuals
                and manuscripts written in the late Middle Ages and Renaissance periods.
              </p>
              <p className="leading-relaxed">
                Our coaches have studied the works of German fencing masters Johannes Liechtenauer and Joachim Meyer and
                Italian master Fiore dei Liberi for over a decade and pass on the knowledge of centuries-old traditions in
                every class.
              </p>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section id="why-choose-us" className="mb-16">
            <h2 className="text-3xl font-bold text-Navy mb-6">Why Choose Columbus United Fencing Club?</h2>
            <p className="text-gray-700 mb-8">
              Our club members have joined for many different reasons. Here are a few we commonly hear:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'To Learn',
                  content: 'While our lessons don\'t require members to study advanced techniques directly from the manuscripts, there\'s so much to learn. You\'ll learn the historical context and purpose of various weapons and how they were used, and then practice applying that information through sparring.'
                },
                {
                  title: 'To Get Active (with Swords!)',
                  content: 'Several of our members have joined with little to no athletic background—just a desire to exercise and an interest in swords!'
                },
                {
                  title: 'To Make New Friends',
                  content: 'Columbus United Fencing Club strives to provide an inclusive environment for all who enter through our doors. This makes it relatively easy to find a group of friends who support you and your endeavors, in and outside of the school itself.'
                },
                {
                  title: 'To Have Fun',
                  content: 'Whether you want to compete in tournament events or translate what you\'ve learned in training to choreography, you\'ll find there are no wrong ways to have fun at Columbus United Fencing Club.'
                }
              ].map(({ title, content }, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-wine text-xl mb-3">{title}</h3>
                  <p className="text-gray-700">{content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How to Start Section */}
          <section id="how-to-start" className="mb-16">
            <h2 className="text-3xl font-bold text-Navy mb-6">How Do I Start?</h2>
            <p className="text-gray-700 mb-8">
              Your current level of experience will determine how you begin your journey with us.
            </p>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-wine text-xl mb-3">I'm New to HEMA</h3>
                <p className="text-gray-700">
                  If you are completely new to HEMA or fencing, check out our{' '}
                  <button 
                    onClick={() => onNavigationClick('intro')} 
                    className="text-wine hover:text-wine/80 font-medium"
                  >
                    introductory course
                  </button>. 
                  Want to watch a class first? Let us know on our{' '}
                  <button 
                    onClick={() => onNavigationClick('contact')} 
                    className="text-wine hover:text-wine/80 font-medium"
                  >
                    contact page
                  </button>.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-wine text-xl mb-3">I've Done This Before &#128526;</h3>
                <p className="text-gray-700">
                  If you have HEMA experience, you're welcome to{' '}
                  <button 
                    onClick={() => onNavigationClick('contact')} 
                    className="text-wine hover:text-wine/80 font-medium"
                  >
                    contact us
                  </button>
                  {' '}to arrange a free drop-in class. View our{' '}
                  <button 
                    onClick={() => onNavigationClick('classes')} 
                    className="text-wine hover:text-wine/80 font-medium"
                  >
                    classes and pricing
                  </button>
                  {' '}for more details.
                </p>
              </div>
            </div>
          </section>

          {/* Gear Section */}
          <section id="gear" className="mb-16">
            <h2 className="text-3xl font-bold text-Navy mb-6">What Gear Do You Recommend?</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                We provide loaner gear for new students. When you're ready to purchase your own equipment, check out our{' '}
                <button 
                  onClick={gearRedirect} 
                  className="text-wine hover:text-wine/80 font-medium"
                >
                  recommended gear list
                </button>.
              </p>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="bg-Navy/5 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold text-Navy mb-4">Ready to Begin Your Journey?</h2>
            <p className="mb-6 text-gray-700">
              Take your first step into the world of Historical European Martial Arts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigationClick('contact')}
                className="inline-block bg-white border-2 border-wine text-wine px-8 py-2 rounded-lg font-semibold hover:bg-wine/10 transition-colors w-full sm:w-auto"
              >
                Contact Us
              </button>
              <button
                onClick={() => onNavigationClick('joinNow')}
                className="inline-block bg-wine text-white px-8 py-2 rounded-lg font-semibold hover:bg-wine/90 transition-colors w-full sm:w-auto"
              >
                Join Now
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

AboutUs.propTypes = {
  onNavigationClick: Function,
  gearRecommendationsLink: String,
};

export default AboutUs;
