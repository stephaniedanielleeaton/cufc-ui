import React from 'react';
import imageSrc from '../../assets/longswordcrop.jpg';

function AboutNugget({ onNavigationClick }) {
  return (
    <div className="min-h-screen py-10">
      <h1 className="text-4xl text-wine font-khula font-bold mb-6 text-center">
        Getting Started with HEMA
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
          <p className="font-light text-sm mb-4">
            If you're new to the art of historical fencing, we encourage you to start with one of our four week fundamental
            classes. This class is designed for the complete beginner, and will teach you HEMA fundamentals through a single weapon style. 
            Over the course of 4 weeks, you'll receive instruction in basic footwork, form, and technique. These basics will prepare 
            you to join any of our weapon offerings after the starting course.
          </p>
          <p className="font-light text-sm mb-4">
            Topics that we will cover in class include:
          </p>
          <ul className="list-disc pl-6 mb-4 font-light text-sm">
            <li className="mb-2">Basic footwork and stances</li>
            <li className="mb-2">Proper cutting, thrusting structure and blade alignment</li>
            <li className="mb-2">Accurately reading distance between you and your opponent</li>
            <li className="mb-2">Introduction to offensive and defensive techniques</li>
            <li className="mb-2">Application of techniques in sparring</li>
            <li className="mb-2">Reading your opponent and making tactical decisions</li>
            <li className="mb-2">Understanding and following safety protocols</li>
          </ul>
          <div className="mb-10">
            <h2 className="font-bold text-2xl text-Navy mb-4">Upcoming Start Dates:</h2>
            <div className="space-y-6">
              <div className="start-date-block">
                <p className="mb-2">
                  <span className="font-bold">January 9th, 2025</span>
                  <span className="text-gray-600 ml-2">• Thursday evenings</span>
                </p>
                <p className="pl-4">
                  Meeting every Thursday at 7:00pm for four weeks.<br/>
                  Fundamentals of HEMA will be taught through the Rapier.
                </p>
              </div>
              <div className="start-date-block">
                <p className="mb-2">
                  <span className="font-bold">February 22nd, 2025</span>
                  <span className="text-gray-600 ml-2">• Saturday mornings</span>
                </p>
                <p className="pl-4">
                  Meeting every Saturday at 10:00am for four weeks.<br/>
                  Fundamentals of HEMA will be taught through the Longsword.
                </p>
              </div>
            </div>
          </div>
          <p className="text-lg text-Navy font-bold mb-4">
            What gear do I need?
          </p>
          <p className="font-light text-sm mb-4">
            Lender gear will be provided for you to participate in the whole
            session. Just wear comfortable gym clothing and bring a water bottle. Please note, that we only have
            fencing jackets up to size 2XL and some drills will be altered if we cannot provide a comfortable fitting jacket. 
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
            Although the class will be focus on a singular weapon form, the basics you learn will allow you to join
            in any of our other class offerings.
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
