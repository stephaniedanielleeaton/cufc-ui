import React from 'react';
import PropTypes from 'prop-types';

const introOption = {
  id: 'nugget',
  header: 'Introduction to HEMA Course',
  price: '$110 (One-time fee)',
  description: 'Perfect for complete beginners with no prior HEMA experience. This introductory course is your first step into historical fencing.',
  details: 'Select your preferred start date at checkout',
};

const experiencedOptions = [
  {
    id: 'fullMembership',
    header: 'Full Class Access',
    price: '$110/month',
    description: 'Access to all regular HEMA classes and open practice sessions',
    recurring: 'Monthly membership fee starts on signup date',
    requiresExperience: true,
  },
  {
    id: 'familyPlan',
    header: 'Family Plan',
    price: '$110 + $65/month for each additional family member',
    description: 'Train together with your family members at a discounted rate',
    recurring: 'Monthly membership fee starts on signup date',
    requiresExperience: true,
  },
  {
    id: 'dropIn',
    header: 'Drop-in Classes',
    price: '$20 per class',
    description: 'Flexible option for occasional training, fees due on class day',
    requiresExperience: true,
  },
];

const ClassOptions = ({ selectedOption, onSelect }) => {
  const renderMembershipOption = (option) => (
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
          {option.details && (
            <p className="text-xs text-gray-500 mt-1">{option.details}</p>
          )}
          {option.recurring && (
            <p className="text-xs text-Navy mt-1 flex items-center gap-1">
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {option.recurring}
            </p>
          )}
          <p className="text-Navy font-bold mt-2">{option.price}</p>
        </div>
      </div>
    </button>
  );

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
            href="/intro"
            className="flex items-center justify-center gap-2 p-4 text-Navy hover:text-MediumPink font-semibold transition-colors hover:bg-Navy/5"
          >
            <span>Learn About Our Intro Courses</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Membership Options */}
      <div>

        {/* New Member Section */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-Navy mb-4">New to HEMA?</h4>
          {renderMembershipOption(introOption)}
        </div>

        {/* Experienced Member Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h4 className="text-lg font-semibold text-Navy">Experienced Fencer Options</h4>
            <div className="text-xs bg-MediumPink/10 text-Wine px-2 py-1 rounded">
              Requires prior experience or completed intro course
            </div>
          </div>
          <div className="grid gap-4">
            {experiencedOptions.map(renderMembershipOption)}
          </div>
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
