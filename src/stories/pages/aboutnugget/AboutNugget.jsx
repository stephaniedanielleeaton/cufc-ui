import React from 'react';
import imageSrc from '../../assets/longswordcrop.jpg';
import UpcomingStartDates from './components/UpcomingStartDates';
import NotificationSignup from '../../components/notificationsignup/NotificationSignup';
import PropTypes from 'prop-types';

function AboutNugget({ onNavigationClick, onEmailSignup, upcomingDates }) {
  return (
    <div className="min-h-screen py-10 bg-gray-50">
      <div className="max-w-screen-lg mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-5xl text-wine font-khula font-bold mb-4">
            Getting Started with HEMA
          </h1>
          <div className="w-32 h-1 bg-wine mx-auto"></div>
        </header>

        {/* Main Content */}
        <main className="font-khula md:px-12 px-6 bg-white shadow-xl rounded-xl py-10 mx-4">
          {/* Hero Image */}
          <div className="mb-12">
            <img
              src={imageSrc}
              alt="Historical European Martial Arts"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Introduction Section */}
          <section className="mb-16">
            <p className="text-gray-700 leading-relaxed mb-6">
              If you're new to the art of historical fencing, we encourage you to start with one of our four week fundamental
              classes. This class is designed for the complete beginner, and will teach you HEMA fundamentals through a single weapon style. 
              Over the course of 4 weeks, you'll receive instruction in basic footwork, form, and technique. These basics will prepare 
              you to join any of our weapon offerings after the starting course.
            </p>

            <h3 className="text-lg font-semibold text-Navy mb-4">Topics we cover in class:</h3>
            <ul className="list-none space-y-3 mb-6">
              {[/* eslint-disable-line */
                "Basic footwork and stances",
                "Proper cutting, thrusting structure and blade alignment",
                "Accurately reading distance between you and your opponent",
                "Introduction to offensive and defensive techniques",
                "Application of techniques in sparring",
                "Reading your opponent and making tactical decisions",
                "Understanding and following safety protocols"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-wine mr-3">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Class Schedule Section */}
          <UpcomingStartDates onNavigationClick={onNavigationClick} upcomingDates={upcomingDates} />

          {/* Notification Signup */}
          <section className="mb-16">
            <NotificationSignup onSubmit={onEmailSignup} />
          </section>

          {/* Equipment Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-Navy mb-6">What gear do I need?</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Lender gear will be provided for you to participate in the whole
                session. Just wear comfortable gym clothing and bring a water bottle. Please note, that we only have
                fencing jackets up to size 2XL and some drills will be altered if we cannot provide a comfortable fitting jacket.
              </p>
              <p className="leading-relaxed">
                After the course is completed, you will still be able to borrow loaner gear. We find that most fencers
                purchase their own equipment at a rate that allows us to have gear available for every student that needs it. 
                However, priority for gear goes to the newest students.
              </p>
            </div>
          </section>

          {/* Course Completion Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-Navy mb-6">What happens at the end?</h2>
            <p className="text-gray-700 leading-relaxed">
              At the end of four weeks, you will be sparring ready. You will be invited to join the rest of our class
              offerings. Although the class will be focus on a singular weapon form, the basics you learn will allow you to join
              in any of our other class offerings.
            </p>
          </section>

          {/* Call to Action Section */}
          <section className="bg-Navy/5 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold text-Navy mb-4">Ready to Begin Your Journey?</h2>
            <p className="mb-6 text-gray-700">
              Take your first step into the world of Historical European Martial Arts
            </p>
            <button
              onClick={() => onNavigationClick('joinNow')}
              className="inline-block bg-wine text-white px-8 py-3 rounded-lg font-semibold hover:bg-wine/90 transition-colors"
            >
              Join Now
            </button>
          </section>
        </main>
      </div>
    </div>
  );
}

AboutNugget.propTypes = {
  onNavigationClick: PropTypes.func.isRequired,
  onEmailSignup: PropTypes.func.isRequired,
  upcomingDates: PropTypes.arrayOf(
    PropTypes.shape({
      startDate: PropTypes.string.isRequired,
      schedule: PropTypes.string.isRequired,
      meetingTime: PropTypes.string.isRequired,
      courseTitle: PropTypes.string.isRequired
    })
  )
};

export default AboutNugget;
