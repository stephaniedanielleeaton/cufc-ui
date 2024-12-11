import React from 'react';
import PropTypes from 'prop-types';

const options = [
  {
    id: 'nugget',
    header: 'Introduction to HEMA Fundamentals Course',
    price: '$110  (Select date at checkout)',
    description: 'Perfect for beginners looking to start their HEMA journey',
  },
  {
    id: 'fullMembership',
    header: 'Full Class Access',
    price: '$110/month',
    description: 'Access to all regular HEMA classes and open practice sessions',
  },
  {
    id: 'familyPlan',
    header: 'Family Plan',
    price: '$110 + $65/month for each additional family member',
    description: 'Train together with your family members at a discounted rate',
  },
  {
    id: 'dropIn',
    header: 'Drop-in Classes',
    price: '$20 per class',
    description: 'Flexible option for occasional training, fees due on class day',
  },
];

const ClassOptions = ({ selectedOption, onSelect }) => {
  return (
    <div className="space-y-8">
      {/* Quick Links - Mobile Optimized */}
      <div className="bg-Navy/5 rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-Navy/10">
          <a
            href="/classes"
            className="flex items-center justify-center gap-2 p-4 text-Navy hover:text-MediumPink font-semibold transition-colors hover:bg-Navy/5"
          >
            <span>View Classes & Pricing</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="/fundamentals"
            className="flex items-center justify-center gap-2 p-4 text-Navy hover:text-MediumPink font-semibold transition-colors hover:bg-Navy/5"
          >
            <span>Learn About HEMA Fundamentals</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Membership Options */}
      <div>
        <h3 className="text-xl font-bold text-Navy text-center mb-6">
          Choose Your Membership
        </h3>

        <div className="grid gap-4">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => onSelect(option.id)}
              className={`w-full p-6 text-left transition-all ${
                selectedOption === option.id
                  ? 'bg-Navy/5 border-Navy'
                  : 'bg-white hover:bg-gray-50 border-gray-200'
              } border rounded-lg`}
            >
              <div className="flex items-start space-x-3">
                <input
                  type="radio"
                  name="membershipOption"
                  checked={selectedOption === option.id}
                  onChange={() => onSelect(option.id)}
                  className="mt-1.5 h-4 w-4 text-Navy border-gray-300 focus:ring-Navy"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{option.header}</h4>
                  <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                  <p className="text-Navy font-bold mt-2">{option.price}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

ClassOptions.propTypes = {
  selectedOption: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};

export default ClassOptions;
