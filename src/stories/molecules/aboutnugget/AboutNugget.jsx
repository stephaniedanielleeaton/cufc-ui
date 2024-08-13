import React from 'react';
import imageSrc from '../../assets/longswordcrop.jpg';

function AboutNugget({ onNavigationClick }) {
  return (
    <div className="min-h-screen py-10">
      <h1 className="text-4xl text-wine font-khula font-bold mb-6 text-center">
        Historical European Martial Arts Fundamentals
      </h1>
      <div className="w-9/12 border-t-2 border-wine mx-auto mb-10"></div>
      <div className="max-w-screen-lg font-khula md:px-20 px-8 bg-white shadow-lg mx-auto rounded-lg py-8">
        <div className="mb-10">
          <img
            src={imageSrc}
            alt="Historical European Martial Arts"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="mb-10">
          <p className="text-lg text-Navy font-bold mb-4">
            Wednesdays @ 6:30 - 8:30 pm
          </p>
          <p className="font-light text-sm mb-4">
            If you're new to the art of historical fencing, we encourage you to start with our four week fundamental
            class. This class is designed for the complete beginner, and will teach you HEMA fundamentals through the
            longsword. Over the course of 4 weeks, you'll receive instruction in basic
            footwork,
            form, and technique.
          </p>
          <p className="font-light text-sm mb-4">
            Topics that we will cover in class include:
          </p>
          <ul className="list-disc pl-6 mb-4 font-light text-sm">
            <li className="mb-2">Basic footwork and stances</li>
            <li className="mb-2">Proper cutting structure and blade alignment</li>
            <li className="mb-2">Accurately reading distance between you and your opponent</li>
            <li className="mb-2">Introduction to offensive and defensive techniques</li>
            <li className="mb-2">Application of techniques in sparring</li>
            <li className="mb-2">Reading your opponent and making tactical decisions</li>
            <li className="mb-2">Understanding and following safety protocols</li>
          </ul>
          <div className="mb-10">
            <h2 className="font-bold text-2xl text-Navy mb-4">Upcoming Start Dates:</h2>
            <ul className="list-disc pl-6 text-sm">
              <li className="mb-2">October 2, 2024</li>
              <li className="mb-2">January 8, 2025</li>
              <li className="mb-2">March 5, 2025</li>
              <li className="mb-2">May 7, 2025</li>
            </ul>
          </div>
          <p className="text-lg text-Navy font-bold mb-4">
            What gear do I need?
          </p>
          <p className="font-light text-sm mb-4">
            No gear is required! Lender gear will be provided for you to participate in the whole
            session. Just wear comfortable gym clothing and bring a water bottle.
          </p>
          <p className="font-light text-sm mb-4">
            After the course is completed, you will still be able to borrow loaner gear. We find that most fencers
            purchase their own equipment at a rate
            that allows us to have gear available for every student that needs it. However, priority for gear goes to
            the newest students.
          </p>
          <p className="text-lg text-Navy font-bold mb-4">
            What happens at the end?
          </p>
          <p className="font-light text-sm mb-4">
            At the end of four weeks, you will be sparring ready. You will be invited to join the rest of our class
            offerings.
            Although the class is focused on longsword, the fundamentals you learn will be applicable to our other
            weapon types,
            such as Military Sabre and Rapier, meaning that you will want to take this course even if your passion is
            for another weapon form.
          </p>
          <p className="text-lg text-Navy font-bold mb-4">
            But I've never held a sword before!
          </p>
          <p className="font-light text-sm mb-4">
            No worries! Our club teaches fencers of a wide range of fitness and skill levels. Our beginner's course is
            perfect for anyone who has never fenced before,
            or fencers that are completely new to HEMA.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-2xl text-Navy mb-4">Interested in Joining?</h2>
          <p className="font-light text-sm">
            If you're ready to start your journey in Historical European Martial Arts, click&nbsp;
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

export default AboutNugget;
