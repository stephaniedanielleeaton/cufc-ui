import React from 'react';
import Footer from '../../footer/Footer.jsx';

function Classes({ onNavigationClick }) {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

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
              onClick={() => onNavigationClick('contact')}
              className="px-6 py-2 text-Navy hover:text-wine transition-colors font-semibold mx-4 flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </button>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-5xl text-wine font-khula font-bold mb-4">
          Sword Fighting Classes
        </h1>
        <p className="text-xl text-gray-600 mb-4">Columbus, Ohio</p>
        <div className="w-32 h-1 bg-wine mx-auto"></div>
      </header>

      <div className="max-w-screen-lg mx-auto px-4">
        {/* Quick Navigation */}
        <section className="mb-12 bg-white shadow-xl rounded-xl p-8">
          <h2 className="text-3xl font-bold text-Navy mb-6 text-center">Quick Navigation</h2>
          <nav className="grid md:grid-cols-2 gap-4">
            {[
              { id: 'regular-class-offerings', title: 'Class Schedule' },
              { id: 'pricing-options', title: 'Pricing & Options' },
              { id: 'contact', title: 'Get Started' }
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
          {/* Regular Class Offerings */}
          <section id="regular-class-offerings" className="mb-16">
            <h2 className="text-3xl font-bold text-Navy mb-6">Regular Class Offerings</h2>
            <p className="text-gray-700 mb-8">
              If you've dreamt of becoming a sword-wielding hero in the Columbus area, you've found the right place.
              Columbus United Fencing Club specializes in teaching Historical European Martial Arts (HEMA).
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl text-Navy mb-2">Introduction to HEMA</h3>
                <p className="text-wine font-semibold mb-2">Schedule varies - see course details</p>
                <p className="text-gray-700 mb-3">
                  Perfect for beginners! Learn basic footwork, form, and technique over 4 weeks.
                  Lender gear provided.
                </p>
                <button 
                  onClick={() => onNavigationClick('intro')}
                  className="text-Navy hover:text-wine transition-colors font-semibold flex items-center"
                >
                  Learn more about the course →
                </button>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl text-Navy mb-2">Longsword Fencing</h3>
                <p className="text-wine font-semibold mb-2">Wednesdays @ 6:30 - 8:30 pm</p>
                <p className="text-gray-700">
                  Sharpen your existing fencing skills with the longsword, a favorite of many historical European martial artists.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl text-Navy mb-2">Longsword Fundamentals</h3>
                <p className="text-wine font-semibold mb-2">Saturdays @ 10:00 - 11:30 am</p>
                <p className="text-gray-700">
                  This is a new class intended to focus on fundamental structure and technique for longsword fencers in their first year.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl text-Navy mb-2">Military Saber</h3>
                <p className="text-wine font-semibold mb-2">Mondays @ 7 - 9 pm</p>
                <p className="text-gray-700">
                  Master the art of military saber through practical drills and techniques.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl text-Navy mb-2">Rapier and Dagger</h3>
                <p className="text-wine font-semibold mb-2">Thursdays @ 7 - 9 pm</p>
                <p className="text-gray-700">
                  Channel your inner musketeer with advanced footwork and thrusting techniques using two beautiful blades.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl text-Navy mb-2">Tournament Prep</h3>
                <p className="text-wine font-semibold mb-2">Saturdays @ 11 am - 1 pm</p>
                <p className="text-gray-700">
                  Put your skills to the test through combat training with fellow fencers.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl text-Navy mb-2">Other Weapons</h3>
                <p className="text-wine font-semibold mb-2">Special Sessions</p>
                <p className="text-gray-700">
                  Explore sword and buckler, messer, and more! Ask our coaches about upcoming special sessions.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl text-Navy mb-2">Marginalized Gender Open Floor Brunch</h3>
                <p className="text-wine font-semibold mb-2">Sundays - Various Times</p>
                <p className="text-gray-700">
                  A welcoming and open-ended training environment for women, trans men, non-binary, and intersex club members. 
                  Receive additional training and social support to help overcome gender-based cultural disparities common in martial arts communities.
                </p>
              </div>
            </div>
          </section>

          {/* Pricing Options */}
          <section id="pricing-options" className="mb-16">
            <h2 className="text-3xl font-bold text-Navy mb-6">Pricing & Options</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl text-Navy mb-2">Introduction to HEMA Course</h3>
                <p className="text-3xl font-bold text-wine mb-4">$110</p>
                <p className="text-gray-700">Complete 4-week beginner course with provided equipment</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl text-Navy mb-2">Monthly Class Access</h3>
                <p className="text-3xl font-bold text-wine mb-4">$110/month</p>
                <p className="text-gray-700">Unlimited access to all regular weekly classes and social events</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl text-Navy mb-2">Family Plan</h3>
                <p className="text-3xl font-bold text-wine mb-4">$110 + $65/member</p>
                <p className="text-gray-700">First member $110/month, each additional family member $65/month</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl text-Navy mb-2">Drop-In Class</h3>
                <p className="text-3xl font-bold text-wine mb-4">$20</p>
                <p className="text-gray-700">Single class access, perfect for trying out our programs</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="text-center">
            <h2 className="text-3xl font-bold text-Navy mb-6">Ready to Start Your Journey?</h2>
            <p className="text-gray-700 mb-8">
              Join our community of passionate historical fencers and begin your HEMA adventure today!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => onNavigationClick('contact')}
                className="px-8 py-3 bg-wine text-white rounded-lg hover:bg-wine/90 transition-colors font-semibold"
              >
                Contact Us
              </button>
              <button
                onClick={() => onNavigationClick('joinNow')}
                className="px-8 py-3 bg-Navy text-white rounded-lg hover:bg-Navy/90 transition-colors font-semibold"
              >
                Sign Up Now
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Classes;
